import React from "react";
import LinkPrimaryButton from "./LinkPrimaryButton";

function AboutUs() {
    return (
        <div className="bg-gray-100" id="about">
            <div className="container mx-auto ">
                <h1 className="text-3xl font-semibold text-gray-800 py-4">About Us</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            Our Mission
                        </h2>
                        <p className="text-gray-600">
                            At DeliverNext, we are dedicated to simplifying shipping
                            for businesses and individuals. Our mission is to provide
                            reliable, cost-effective, and efficient shipping solutions that
                            meet your needs.
                        </p>
                        <div className="my-6">
                            <LinkPrimaryButton message="GET STARTED" linkTo="/dashboard" />
                        </div>
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
                        <div className="my-6">
                            <LinkPrimaryButton message="GET STARTED" linkTo="/dashboard" />
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default AboutUs;
