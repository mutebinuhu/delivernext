"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Nav = ({ isOpen, toggleNavBar }) => {
    return (
        <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? 0 : '-100%' }}
            className="fixed  top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out"
        >
            <ul>
                {/* Add your navigation links here */}
                <li>Link 1</li>
                <li>Link 2</li>
                {/* ... */}
            </ul>
            <button onClick={toggleNavBar} className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded">
                Close
            </button>
        </motion.nav>
    );
};

export default Nav;
