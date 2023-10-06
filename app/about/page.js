import React from "react";

function Page() {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            Our Mission
                        </h2>
                        <p className="text-gray-600">
                            At Deliver Next, we are dedicated to simplifying shipping
                            for businesses and individuals. Our mission is to provide
                            reliable, cost-effective, and efficient shipping solutions that
                            meet your needs.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600">
                            With years of experience in the shipping industry, we have
                            established strong partnerships with carriers and logistics
                            experts. This allows us to offer you a seamless shipping
                            experience, whether you are shipping locally or globally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
