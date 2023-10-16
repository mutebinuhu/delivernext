import React from 'react';
import PlatformsList from '../components/PlatformsList';
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
                <h1 className="text-2xl font-bold mb-2">Shippers List</h1>
                <div className="flex justify-center items-center">
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 w-full'>
                     
                        <PlatformsList />
                                            
                   </div>
                  
                </div>
            
            </div>
          
          
        </div>
    );
};


export default Page;
