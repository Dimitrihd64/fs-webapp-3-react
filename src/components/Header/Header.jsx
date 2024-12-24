import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {auth} from "../../firebase";

const Header = () => {
    const [user, setUser] = useState(null);

    // Verifica si el usuario está logueado
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Limpia el listener cuando el componente se desmonta
    }, []);

    return (
        <nav className="bg-gray-100 p-4">
            <div className="container mx-auto flex items-center">
                <a className="text-xl font-bold mx-4" href="#">FsWebApp</a>

                <div className="hidden md:flex space-x-4">
                    <Link to="/"><a className="text-gray-700 hover:text-gray-900" href="#">Home</a></Link>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Pricing</a>
                    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="text-gray-700 font-bold">{user.email}</span>
                            <LogoutButton/>
                        </>
                    ) : (
                        <LoginButton/>
                    )}
                </div>
            </div>
        </nav>
    );
};

export const LoginButton = () => {
    return (
        <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </Link>
    );
};

export const LogoutButton = () => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log("User logged out");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    );
};

export default Header;
