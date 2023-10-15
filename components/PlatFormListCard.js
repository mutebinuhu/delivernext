import React from 'react';
import {motion} from "framer-motion";

const PlatFormListCard = ({ imageSrc, description, ctaText, ctaText2, onClick, onClick2,  title, deliveriesCount, price, currencey }) => {
    return (
        <motion.div
            className="max-w-md rounded overflow-hidden shadow-lg mt-2"
            whileHover={{ scale: 1.05 }}
        >
            <img src={imageSrc} alt="Card Image" className="w-full h-60 object-cover" />
            <div className="px-6 py-1">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base my-1">{description}</p>
                <p className='font-bold py-2'>From <span>{currencey}</span> <span> {price}</span></p>
                <p className=''><span className='bg-orange-300 py-0.5 px-0.5 rounded-lg text-sm font-bold'>{deliveriesCount} </span>+Success Shipments  </p>
            </div>
            <div className="px-6 py-2 md:flex justify-between ">
                <button
                    onClick={onClick}
                    className="bg-blue-500 mx-4 sm:mx-0 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded-full"
                >
                    {ctaText}
                </button>
                <button
                    onClick={onClick2}
                    className="bg-blue-500 mx-4  hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded-full"
                >
                    {ctaText2}
                </button>
            </div>
        </motion.div>
    );
}

export default PlatFormListCard;
