
"use client"
import React, { useState } from 'react';
import store from "../../redux/store";
import { motion } from 'framer-motion';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';




const ShipmentBooking = ({showPage}) => {
    const searchParams = useSearchParams()
 
    const shipperId = searchParams.get('shipper_id')
    const shipperName = searchParams.get('platform')
    //console.log("shipper", shipperId, "shipperName", shipperName)

    const [formValues, setFormValues] = useState({
        pickupLocation: '',
        deliveryLocation: '',
        shipmentDate: '',
        weight: '',
        phone:'',
        receiverContact:'',
        information:''

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
        if (!formValues.receiverContact) {
            newErrors.receiverContact= 'Receiver  contact is required';
        }
        if (!formValues.phone) {
            newErrors.phone= 'Please type Your  contact';
        }
     
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();
       
        if (validateForm()) {
            //console.log(e)
            formValues.shipperId = shipperId
            formValues.shipperName = shipperName
            const submitData = {
                shipper_id: formValues.shipperId,
                shipper_name: formValues.shipperName,
                pickup_location: formValues.pickupLocation,
                drop_off: formValues.deliveryLocation,
                weight: formValues.weight ? formValues.weight: 0,
                customer_phone: formValues.phone,
                receivers_contact: formValues.receiverContact,
                shipment_date:formValues.shipmentDate,
                information:formValues.information
            }
          
            try {
                const response = await fetch('https://delivernext.vercel.app/api/booking', {
                method:'POST',
                body:JSON.stringify(submitData)
            })

            const data = await  response.json();
            if(data.data){
                setFormValues({
                pickupLocation: '',
                deliveryLocation: '',
                shipmentDate: '',
                weight: '',
                phone:'',
                receiverContact:'',
                information:''
        
                })
              }
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
                //console.log("err Now ",response.status )
              }
             
            } catch (error) {
                console.log("err from response", error)
            }
            // Your form submission logic here
            // You can use the formValues state for submitting data to your server.
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log("name--", {[name]: value})
        setFormValues({
            ...formValues,
            [name]: value,
        });
       // console.log("formValues", formValues)
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
                            <label htmlFor="Tel" className="block text-sm font-medium">
                                phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full py-3 border-gray-200 ${errors.userContact && 'border-red-500'}`}
                                value={formValues.phone}
                                onChange={handleInputChange}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Tel" className="block text-sm font-medium">
                                Receivers Contact
                            </label>
                            <input
                                type="text"
                                id="receiverContact"
                                name="receiverContact"
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full py-3 border-gray-200 ${errors.weight && 'border-red-500'}`}
                                value={formValues.receiverContact}
                                onChange={handleInputChange}
                            />
                            {errors.receiverContact && (
                                <p className="text-red-500 text-xs mt-1">{errors.receiverContact}</p>
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
                                name="information"
                                value={formValues.information}
                                onChange={handleInputChange}
                              
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
