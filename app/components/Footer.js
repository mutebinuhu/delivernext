import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            We are dedicated to providing fast and convenient delivery and shipment services to our customers. Try Us and  experience the ease of getting your favorite items delivered anywhere.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-300">
                            <li className="mb-2">
                                <a href="/">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="/menu">Menu</a>
                            </li>
                            <li className="mb-2">
                                <a href="/about">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <address className="text-gray-300">
                            <p>Electra Street</p>
                            <p>Abudhabi</p>
                            <p>
                                Phone: <a href="tel:+1234567890">(123) 456-7890</a>
                            </p>
                            <p>
                                Email: <a href="mailto:info@example.com">info@delivernext.com</a>
                            </p>
                        </address>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Deliver Next All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
