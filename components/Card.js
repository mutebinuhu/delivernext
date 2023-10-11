import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageSrc, description, ctaText, onClick }) => {
    return (
        <motion.div
            className="max-w-md rounded overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
        >
            <img src={imageSrc} alt="Card Image" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={onClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    {ctaText}
                </button>
            </div>
        </motion.div>
    );
};

export default Card;
