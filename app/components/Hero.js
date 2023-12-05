// Hero.js
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className=" flex flex-col-reverse mt-24 md:mt-0 md:flex-row items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full md:w-1/2 pr-8 md:pr-16 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Deliver Next</h1>
          <p className="text-lg mb-8">We're your local delivery experts, getting your goods where they need to be.</p>
                        <Link
                    href={`/book`}

                    className=""
                >
               
               <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Get 90% Discount on Your first Booking</p>

                    <button className=" text-white mb-2 sm:mb-0 bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm  px-1 sm:px-4 py-3 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-primary-800 dark:focus:ring-red-5000"> Book Now    </button>
                    
                </Link>

                <Link
                    href={`https://wa.me/+971522437828`}
                    target='_blank'
                    className="mx-4"
                >
               
                    <button className=" text-white mb-2 sm:mb-0 bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm  px-1 sm:px-4 py-3 text-center mr-3 md:mr-0 dark:bg-primary dark:hover:bg-primary-800 dark:focus:ring-red-5000">Contact Us</button>
                    
                </Link>
                        
            </div>
        <div className="w-full md:w-1/2 hidden sm:block">
          <img
            className="object-cover h-80 md:h-96 lg:h-full w-full rounded-md"
            src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148509518.jpg?w=826&t=st=1700643796~exp=1700644396~hmac=f0673d9ba20133864555e399c1e9d4bae33b6000f51c99fe6a7066f60f4d7595" // Replace with your image URL
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;