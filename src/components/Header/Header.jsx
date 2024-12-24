import React from "react";

const Header = () => {
    return (
        <nav className="bg-gray-100 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-xl font-bold" href="#">FsWebApp</a>
                <button className="text-gray-500 md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-4">
                    <a className="text-gray-700 hover:text-gray-900" href="#">Home</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Features</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Pricing</a>
                    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;