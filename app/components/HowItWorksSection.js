import React from 'react';

const HowItWorksSection = () => {
    const steps = [
        {
            title: 'Step 1: Browse Platform',
            description: 'Explore a wide range of shipping Platforms and Partners.',
        },
        {
            title: 'Step 2: Choose Platform and partner',
            description: 'From a variety of plaforms please choose who you want to be your next shipper',
        },
        {
            title: 'Step 3: Shipment Pickup',
            description: 'One of Our partners Will Come and Pick Your Items',
        },
        {
            title: 'Step 3: Track Your Delivery',
            description: 'Sit back and relax while we monitor the status of your delivery / shipment.',
        },
    ];

    return (
        <section className="bg-blue-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md bg-white">
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
