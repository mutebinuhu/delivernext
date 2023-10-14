"use client"
import React, {useState} from 'react';
import { motion } from "framer-motion";
import UserProfile from '../components/UserProfile';
import Card from '@/components/Card';
import DeliveryPlatform from '../components/DeliveryPlatform';
import PlatFormListCard from '@/components/PlatFormListCard';
const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = () => {
        // Define the action when the button is clicked
        console.log("Button Clicked");
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="min-h-screen w-auto">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="px-8"
            >
                <h1 className="text-2xl font-bold mb-2">Shippers List</h1>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 w-full'>
                     
                       <PlatFormListCard

                            imageSrc="https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                            title="First Delieveries"
                            description="We shall ship Your items all over the world"
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                            price="10"
                            currencey="AED"
                            deliveriesCount={1000}
                            ctaText2="Book Now"
                            
                       />
                        <PlatFormListCard

                            imageSrc="https://images.unsplash.com/photo-1576423596782-8c5478efd11f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                            title="First Delieveries"
                            description="We shall ship Your items all over the world"
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                            price="10"
                            currencey="AED"
                            deliveriesCount={1000}
                            ctaText2="Book Now"

                        />
                        <PlatFormListCard

                            imageSrc="https://images.pexels.com/photos/7363161/pexels-photo-7363161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            title="First Delieveries"
                            description="We shall ship Your items all over the world"
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                            price="10"
                            currencey="AED"
                            deliveriesCount={1000}
                            ctaText2="Book Now"

                        />   
                        <PlatFormListCard

                            imageSrc="https://images.pexels.com/photos/10691905/pexels-photo-10691905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            title="First Delieveries"
                            description="We shall ship Your items all over the world"
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                            price="10"
                            currencey="AED"
                            deliveriesCount={1000}
                            ctaText2="Book Now"

                        />                      
                   </div>
                </div>
            
            </motion.div>
          
        </div>
    );
};


export default Page;
