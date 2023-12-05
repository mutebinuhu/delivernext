"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'


const dashboardLinks = ['/dashboard', '/book']


const NavLinks = () =>{
const pathName = usePathname();
const router = useRouter();
const redirectHome = () =>{
if(pathName == "/"){
router.push("/")
}
router.push("/dashboard")

}
    if (pathName == "/") {
        return (
        <>
            <li onClick={redirectHome}>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
                <Link href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
                <Link href="#features" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
            </li>
            <li>
                <Link href="#howitworks" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">How It Works</Link>
            </li>
            <li>
                <Link href="#testmonial" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testmonials</Link>
            </li>
            <li>
                <Link href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
            </li>
        </>
    )
    }else{
        return (
            <>
                <li onClick={redirectHome}>
                    <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Shipments</Link>
                </li>
            </>
        )
    }
    
}

const Nav = ({ isOpen, toggleNavBar }) => {
    return (
        <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: isOpen ? 0 : '-100%'}}
            className="fixed  top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4 transition-transform duration-100 ease-in-out"
        >
            <ul className="md:hidden flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavLinks/>
                
            </ul>
            <button onClick={toggleNavBar} className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded">
                Close
            </button>
        </motion.nav>
    );
};

export default Nav;
