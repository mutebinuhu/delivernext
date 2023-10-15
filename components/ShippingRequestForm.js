import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShippingRequestForm = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        recipientName: '',
        address: '',
        packageWeight: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here, e.g., send data to the server.
    };

    return (
        <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold mb-4">Shipping Request Form</h2>
            <div className="mb-4">
                <label htmlFor="senderName" className="block font-semibold">
                    Sender's Name
                </label>
                <input
                    type="text"
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="recipientName" className="block font-semibold">
                    Recipient's Name
                </label>
                <input
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block font-semibold">
                    Shipping Address
                </label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="packageWeight" className="block font-semibold">
                    Package Weight (in kg)
                </label>
                <input
                    type="number"
                    id="packageWeight"
                    name="packageWeight"
                    value={formData.packageWeight}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </motion.form>
    );
};

export default ShippingRequestForm;
