"use client"
import React from 'react';
import { motion } from 'framer-motion';

const DeliveryPlatform = () => {
    // Dummy data
    const platformData = {
        platformName: 'QuickDeliver',
        logo: 'quickdeliver-logo.png',
        description: 'QuickDeliver is a fast and reliable on-demand delivery platform that connects customers with local businesses for a wide range of delivery services.',
        website: 'https://www.quickdeliver.com',
        deliveryServices: [
            {
                serviceName: 'Food Delivery',
                icon: 'food-icon.png',
                averageDeliveryTime: '30 minutes',
                deliveryFee: '$2.99',
            },
            {
                serviceName: 'Grocery Delivery',
                icon: 'grocery-icon.png',
                averageDeliveryTime: '45 minutes',
                deliveryFee: '$3.49',
            },
            {
                serviceName: 'Retail Delivery',
                icon: 'retail-icon.png',
                averageDeliveryTime: '60 minutes',
                deliveryFee: '$4.99',
            },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-4 rounded-lg shadow-lg">
            <img
                src={platformData.logo}
                alt={`${platformData.platformName} Logo`}
                className="w-16 h-16 rounded-full mx-auto"
            />
            <h1 className="text-2xl font-semibold mt-2 text-center">
                {platformData.platformName}
            </h1>
            <p className="text-gray-600 text-center mt-2">
                {platformData.description}
            </p>
            <div className="text-center mt-4">
                <a
                    href={platformData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    Visit Website
                </a>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {platformData.deliveryServices.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow">
                        <img
                            src={service.icon}
                            alt={`${service.serviceName} Icon`}
                            className="w-12 h-12 mx-auto"
                        />
                        <h2 className="text-lg font-semibold text-center mt-2">
                            {service.serviceName}
                        </h2>
                        <p className="text-gray-600 text-center mt-1">
                            Delivery Time: {service.averageDeliveryTime}
                        </p>
                        <p className="text-gray-600 text-center mt-1">
                            Delivery Fee: {service.deliveryFee}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default DeliveryPlatform;
