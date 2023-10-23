
import React from 'react';
import PlatformsList from '../components/PlatformsList';
import SearchForm from '../components/SearchForm';
import ShipmentBooking from '../components/ShipmentBooking';
import ShipmentForm from '../components/ShipmentForm';
const Page = () => {
    /*const handleButtonClick = () => {
        // Define the action when the button is clicked
        console.log("Button Clicked");
    }
    */

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="min-h-screen w-auto">

            <div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="px-8"
            >
                <h1 className="text-2xl font-bold mb-2">Find Available Carriers</h1>
                <SearchForm />
                <div className='mt-4'>
                    <h2 className='text-2xl font-bold py-2 text-center'>Post Your Shipments So Carriers can find You</h2>

                    <ShipmentForm />
                </div>

                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 w-full '>
                        <h2 className='mt-4 text-2xl text-bold'>Available Carriers</h2>
                        <PlatformsList />
                   </div>
                  
                </div>
               
            </div>
          
          
        </div>
    );
};


export default Page;
