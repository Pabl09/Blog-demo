import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* About Section */}
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold text-white mb-4">About This Blog</h2>
                    <p className="text-sm">
                        This blog shares insights on various topics ranging from technology to lifestyle.
                        Stay tuned for regular updates and feel free to connect with us on social media.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="md:col-span-1">
                    <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="md:col-span-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
                        <p className="text-sm">
                            Connect with us on social media to stay updated with our latest posts and updates.
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex space-x-4">
                            <a href="" className='hover:text-blue-600'><FaFacebook className='h-6 w-6'/></a>
                            <a href="" className='hover:text-purple-600'><FaInstagram className='h-6 w-6'/></a>
                            <a href="" className='hover:text-blue-400'><FaXTwitter className='h-6 w-6'/></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-5 text-center text-sm">
                <p>© 2024 | All rights reserved. Powered by React.js and Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
