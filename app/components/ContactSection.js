import React from 'react';
import LinkPrimaryButton from './LinkPrimaryButton';

const ContactSection = () => {
    return (
        <section className="bg-gray-100 py-12" id="contact">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg" // Replace with the actual image file path
                            alt="Contact Us"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-600 mb-4">
                            If you have any questions or need assistance, please feel free to contact us. Our dedicated support team is here to help you.
                        </p>
                        <div className="flex items-center space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                            <a href="tel:+1234567890" className="text-blue-500">+971522437828</a>
                        </div>
                        <div className="flex items-center space-x-4 mt-2">
                         
                        </div>
                        <div className="my-6">
                            <LinkPrimaryButton message="GET STARTED" linkTo="/dashboard" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
