
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            euismod luctus odio, non mattis dolor bibendum eu.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Courses</h2>
                        <ul className="list-none">
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Data Science
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">
                                    Machine Learning
                                </a>
                            </li>
                            {/* Add more courses here */}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact</h2>
                        <p>Email: contact@example.com</p>
                        <p>Phone: +1 123-456-7890</p>
                        <p>Address: 123 Street, City, Country</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaInstagram />
                            </a>
                            {/* Add more social media icons here */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2023 Your Educational Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
