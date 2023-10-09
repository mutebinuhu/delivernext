"use client"
import React from 'react';
import { motion } from "framer-motion";
const Page = () => {
    return (
        <div className="min-h-screen flex py-12">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 p-8"
            >
                <h1 className="text-2xl font-bold mb-4">Delivery Dashboard</h1>

              

            
            </motion.div>
        </div>
    );
};


export default Page;
