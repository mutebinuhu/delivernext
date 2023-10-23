"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShipmentForm = () => {
    const [shipment, setShipment] = useState({
        origin: '',
        destination: '',
        cargoType: '',
        specialRequirements: '',
        moreInformation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipment({ ...shipment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission here, e.g., send the data to an API
        console.log(shipment);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className='bg-white p-4 rounded-lg shadow-md'
        >
            <div className='md:flex justify-between'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
                        Origin:
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="text"
                        id="origin"
                        name="origin"
                        value={shipment.origin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                        Destination:
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="text"
                        id="destination"
                        name="destination"
                        value={shipment.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cargoType">
                        Type of Cargo:
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="text"
                        id="cargoType"
                        name="cargoType"
                        value={shipment.cargoType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialRequirements">
                        Special Requirements:
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="text"
                        id="specialRequirements"
                        name="specialRequirements"
                        value={shipment.specialRequirements}
                        onChange={handleChange}
                    />
                </div>
               
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moreInformation">
                    More Information:
                </label>
                <textarea
                    className="w-full border rounded py-2 px-3"
                    id="moreInformation"
                    name="moreInformation"
                    value={shipment.moreInformation}
                    onChange={handleChange}
                />
            </div>
            <button
                className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-100"
                type="submit"
            >
                Submit Shipment
            </button>
        </motion.form>
    );
};

export default ShipmentForm;
