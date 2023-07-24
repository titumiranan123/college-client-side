import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prevState) => !prevState);
    };
    const navItem = <>
        <Link to={'/'} className="text-white hover:text-gray-200">
            Home
        </Link>
        <Link to='/college' className="text-white hover:text-gray-200">
            College
        </Link>
        <Link to='/admission' className="text-white hover:text-gray-200">
            Admission
        </Link>
        <Link to='/may-college' className="text-white hover:text-gray-200">
            My College
        </Link>
    </>

    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-white font-bold text-xl">Logo</div>
                    {/* Hamburger icon for mobile and tablet */}
                    <button
                        className="text-white md:hidden ml-4"
                        onClick={toggleMobileNav}
                        aria-label="Open mobile navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {/* Nav items for desktop */}
                <div className="hidden md:flex space-x-4">
                    {navItem}
                </div>
            </div>

            {/* Nav items for mobile and tablet */}
            {isMobileNavOpen && (
                <div className="md:hidden mt-4">
                    {navItem}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
