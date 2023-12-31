

import React from 'react';
import PlatformsList from '../components/PlatformsList';
import SearchForm from '../components/SearchForm';
import ShipmentBooking from '../components/ShipmentBooking';
import ShipmentForm from '../components/ShipmentForm';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
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
            <Hero/>
            <div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="px-8"
            >
               

                {
                    /**
                }
                
                <SearchForm />
                     * 
                     */
                }
                {/** shipment form to post shipments
                 * 
                 *   <div className='mt-12'>
                        <h2 className='text-2xl font-bold py-2 text-center'>Post Your Shipments So Carriers can find You</h2>

                        <ShipmentForm />
                     </div>
                 * 
                 */}
              
                    <h2 className='mt-4 text-2xl font-bold'>Available Carriers</h2>

                <div className="flex justify-center items-center">

                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 w-full '>
                        <PlatformsList />
                  <h2>Still On Boarding Partners</h2>

                   </div>
                  
                </div>
               
            </div>
          
          <Footer/>
        </div>
    );
};


export default Page;
