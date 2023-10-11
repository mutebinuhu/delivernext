"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ThanksForRegistering = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <h1 className="text-3xl font-bold mb-4">Thanks for Registering!</h1>
                <p className="text-gray-600 text-center">
                    We're excited to have you on board. Please check your email and click the confirmation link to activate your account.
                </p>
            </motion.div>
        </div>
    );
};

export default ThanksForRegistering;
