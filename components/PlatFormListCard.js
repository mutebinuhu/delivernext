"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import store from "../redux/store";
import { showForm } from '@/redux/slices/showShipmentBookingForm';
import Link from 'next/link';



const PlatFormListCard = ({ imageSrc, showBookingForm, description, ctaText, ctaText2, onClick, onClick2,  title, deliveriesCount, price, currencey, id }) => {
    const [showBook, setShowBook] = useState(false);
    const handleClick = (status) => {
       
        console.log("status", store.getState().bookingForm.show)
        store.dispatch(showForm())

    }
    return (
        <div
            className="max-w-md rounded overflow-hidden shadow-lg py-2"
            whileHover={{ scale: 1.05 }}
        >
            
            <img src={imageSrc} alt="Card Image" className="w-full h-60 object-cover" />
            <div className="px-6 py-1">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base my-1">{description}</p>
                <p className='font-bold py-2'>From <span>{currencey}</span> <span> {price}</span></p>
                <p className=''><span className='bg-primary text-white py-0.5 px-0.5 rounded-lg text-sm font-bold'>{deliveriesCount} </span>+Success Shipments  </p>
            </div>
            <div className="mx-2 md:flex justify-between sm:space-x-2 mt-4 ">
                
                <Link
                    href={`/book?platform=${title}&shipper_id=${id}`}
                    onClick={()=>handleClick(showBookingForm)}
                   
                    className="w-full"
                >
               
                    <button className="w-full text-white mb-2 sm:mb-0 bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm  px-1 sm:px-4 py-3 text-center mr-3 md:mr-0 dark:bg-primary w-full dark:hover:bg-primary-800 dark:focus:ring-red-5000">     {ctaText2}</button>
                    
                </Link>
                <button
                    onClick={onClick}
                    className="hover:bg-blue-700 w-full border border border-primary hover:bg-primary hover:text-white font-bold py-1.5 px-2 rounded"
                >
                    {ctaText}
                </button>
            </div>
        </div>
    );
}

export default PlatFormListCard;
