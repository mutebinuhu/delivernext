
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

    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
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
        setIsLoading(true)

        e.preventDefault();
        if (validateForm()) {

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
         
            //clear state

            if(data.data){
                setIsSubmitted(true)
                setFormValues({
                pickupLocation: '',
                deliveryLocation: '',
                shipmentDate: '',
                weight: '',
                phone:'',
                receiverContact:'',
                information:''
        
                })

                setTimeout(() => {
                    setIsSubmitted(false)
                }, 3000);
              }
            if (!response.ok) {
                setIsLoading(false)
                throw new Error(`${response.status} ${response.statusText}`);
              }
             
            } catch (error) {
                setIsLoading(false)
                throw new Error(`${error}`);  
            }

            setIsLoading(false)
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
                      
                        <h2 className="text-2xl font-semibold mb-4 mt-4 ">Book a Shipment</h2>
                    {isSubmitted && <p className='py-3 text-green-500'>Booking Sent Successfully 😊</p>}
                    {<p>{isLoading && 
<div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
 }</p>}

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
                                Weights (in kgs)
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
