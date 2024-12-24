import React, {useState} from "react";
import Swal from "sweetalert2";
import {
    auth,
    createUserWithEmailAndPassword,
    googleProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail
} from "../../firebase.js";

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isResettingPassword, setIsResettingPassword] = useState(false); // Estado para recuperación de contraseña

    const toggleAuthMode = () => {
        setIsSignUp((prev) => !prev);
    };

    const showToast = (icon, title) => {
        Swal.fire({
            toast: true,
            position: 'top-right',
            icon,
            title,
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
        });
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                showToast('success', 'Account created successfully!');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                showToast('success', 'Logged in successfully!');
            }
        } catch (err) {
            showToast('error', "Authentication error. Please try again.");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            showToast('success', 'Signed in with Google!');
        } catch (err) {
            showToast('error', "Error signing in with Google.");
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            showToast('success', 'Password reset email sent!');
            setIsResettingPassword(false);
        } catch (err) {
            showToast('error', "Error sending password reset email.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-start my-7 h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                {!isResettingPassword ? (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
                        <form className="flex flex-col" onSubmit={handleAuth}>
                            <input
                                type="email"
                                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex items-center justify-between flex-wrap">
                                <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                                    <input type="checkbox" id="remember-me" className="mr-2"/>
                                    Remember me
                                </label>
                                <button
                                    type="button"
                                    className="text-sm text-blue-500 hover:underline mb-0.5"
                                    onClick={() => setIsResettingPassword(true)}
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <p className="text-gray-900 mt-4">
                                {isSignUp
                                    ? "Already signed up? "
                                    : "Don't have an account? "}
                                <button
                                    type="button"
                                    className="text-sm text-blue-500 hover:underline"
                                    onClick={toggleAuthMode}
                                >
                                    {isSignUp ? "Log in" : "Sign up"}
                                </button>
                            </p>
                            {isSignUp ? <SignUpButtonCard/> : <LoginButtonCard/>}
                        </form>
                        <div className="mt-4 text-center">
                            <button
                                onClick={handleGoogleSignIn}
                                className="bg-red-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 transition ease-in-out duration-150"
                            >
                                Sign In with Google
                            </button>
                        </div>
                    </>
                ) : (
                    <form onSubmit={handlePasswordReset} className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Reset Password</h2>
                        <input
                            type="email"
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition ease-in-out duration-150"
                        >
                            Send Reset Email
                        </button>
                        <button
                            type="button"
                            className="text-sm text-blue-500 hover:underline mt-4"
                            onClick={() => setIsResettingPassword(false)}
                        >
                            Back to Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;

const LoginButtonCard = () => (
    <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
    >
        Log In
    </button>
);

export const SignUpButtonCard = () => (
    <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
    >
        Sign Up
    </button>
);
