import React from "react";
import {Link} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage.jsx";


const Header = () => {
    return (
        <nav className="bg-gray-100 p-4 ">
            <div className="container mx-auto flex  items-center">
                <a className="text-xl font-bold mx-4" href="#">FsWebApp</a>

                <div className="hidden md:flex space-x-4">
                    <a className="text-gray-700 hover:text-gray-900" href="#">Home</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Login</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Pricing</a>
                    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </div>
                <div className=" ml-auto">
                    <LoginButton/>
                </div>
            </div>

        </nav>
    );
};

const LoginButton = () => {
    return (
        <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </Link>

    );
}
export default Header;