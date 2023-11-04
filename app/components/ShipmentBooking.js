
"use client"
import React, { useState } from 'react';
import store from "../../redux/store";
import { motion } from 'framer-motion';
import { CiDeliveryTruck } from 'react-icons/ci';

const ShipmentBooking = ({showPage}) => {

    const [formValues, setFormValues] = useState({
        pickupLocation: '',
        deliveryLocation: '',
        shipmentDate: '',
        weight: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        if (!formValues.pickupLocation) {
            newErrors.pickupLocation = 'Pickup location is required';
        }
        if (!formValues.deliveryLocation) {
            newErrors.deliveryLocation = 'Delivery location is required';
        }
        if (!formValues.shipmentDate) {
            newErrors.shipmentDate = 'Shipment date is required';
        }
        if (!formValues.weight) {
            newErrors.weight = 'Weight is required';
        } else if (isNaN(formValues.weight)) {
            newErrors.weight = 'Weight must be a number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Your form submission logic here
            // You can use the formValues state for submitting data to your server.
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

   
        return (

            <div className="flex justify-center w-1/2 w-full mx:4 items-center min-h-screen ">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
                >
                    
                    <div className='md-flex w-full'>
                        <a href="/" className="flex items-center">
                            <div className='mr-2 dark:text-accent '>
                                <CiDeliveryTruck size="20" />
                            </div>
                            <span className="text-md self-center sm:text-xl font-semibold whitespace-nowrap dark:text-white">Deliver Next</span>
                        </a>
                        <h2 className="text-2xl font-semibold mb-4 mt-4 ">Book a Shipment</h2>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="pickupLocation" className="block text-sm font-medium">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.pickupLocation && 'border-red-500'}`}
                                value={formValues.pickupLocation}
                                onChange={handleInputChange}
                            />
                            {errors.pickupLocation && (
                                <p className="text-red-500 text-xs mt-1">{errors.pickupLocation}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="deliveryLocation" className="block text-sm font-medium">
                                Delivery Location
                            </label>
                            <input
                                type="text"
                                id="deliveryLocation"
                                name="deliveryLocation"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.deliveryLocation && 'border-red-500'}`}
                                value={formValues.deliveryLocation}
                                onChange={handleInputChange}
                            />
                            {errors.deliveryLocation && (
                                <p className="text-red-500 text-xs mt-1">{errors.deliveryLocation}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="shipmentDate" className="block text-sm font-medium">
                                Shipment Date
                            </label>
                            <input
                                type="date"
                                id="shipmentDate"
                                name="shipmentDate"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.shipmentDate && 'border-red-500'}`}
                                value={formValues.shipmentDate}
                                onChange={handleInputChange}
                            />
                            {errors.shipmentDate && (
                                <p className="text-red-500 text-xs mt-1">{errors.shipmentDate}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="weight" className="block text-sm font-medium">
                                Weights (in kg)
                            </label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full py-3 border-gray-200 ${errors.weight && 'border-red-500'}`}
                                value={formValues.weight}
                                onChange={handleInputChange}
                            />
                            {errors.weight && (
                                <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moreInformation">
                                More Information:
                            </label>
                            <textarea
                                className="w-full border rounded py-2 px-3"
                                id="moreInformation"
                                name="moreInformation"
                                value={""}
                                onChange={""}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm  px-1 sm:px-4 py-3 text-center mr-3 md:mr-0 dark:bg-primary w-full dark:hover:bg-primary-800 dark:focus:ring-red-5000 transition-colors"
                        >
                            Book Shipment
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    
    
};
export default ShipmentBooking;
