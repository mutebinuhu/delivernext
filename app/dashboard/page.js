"use client"
import React, {useState} from 'react';
import { motion } from "framer-motion";
import UserProfile from '../components/UserProfile';
import Card from '@/components/Card';
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
        <div className="min-h-screen flex py-12">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 p-8"
            >
                <h1 className="text-2xl font-bold mb-4">Delivery Dashboard</h1>
              
               

              
                <div className="flex justify-center items-center h-screen">
                    <div className='grid grid-cols-3 gap-4'>
                        <Card
                            imageSrc="https://avatars.githubusercontent.com/u/39644701?s=400&u=161876679e145eba53ddbd442a612fb98ca9bf41&v=4"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                        />
                        <Card
                            imageSrc="https://avatars.githubusercontent.com/u/39644701?s=400&u=161876679e145eba53ddbd442a612fb98ca9bf41&v=4"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            ctaText="Learn More"
                            onClick={handleButtonClick}
                        />
                   </div>
                </div>
            
            </motion.div>
         
        </div>
    );
};


export default Page;
