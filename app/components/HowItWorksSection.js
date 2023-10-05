import React from 'react';

const HowItWorksSection = () => {
    const steps = [
        {
            title: 'Step 1: Browse Platform',
            description: 'Explore a wide range of shipping Platforms and Partners.',
            image: 'https://images.pexels.com/photos/6348124/pexels-photo-6348124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the actual image file path

        },
        {
            title: 'Step 2: Choose Platform and partner',
            description: 'From a variety of plaforms please choose who you want to be your next shipper',
            image: 'https://images.pexels.com/photos/977246/pexels-photo-977246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the actual image file path

        },
        {
            title: 'Step 3: Shipment Pickup',
            description: 'One of Our partners Will Come and Pick Your Items',
            image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the actual image file path

        },
        {
            title: 'Step 3: Track Your Delivery',
            description: 'Sit back and relax while we monitor the status of your delivery / shipment.',
            image: 'https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the actual image file path

        },
    ];
    
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md bg-white">
                            <img
                                src={step.image}
                                alt={`Step ${index + 1}`}
                                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
                            />
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
