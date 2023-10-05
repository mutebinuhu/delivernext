import React from 'react';

const FeaturesBenefitsSection = () => {
    const featuresBenefitsData = [
        {
            title: 'Fast Delivery',
            description: 'Get your shipments delivered quickly, so you never have to wait.',
        },
        {
            title: 'Real-time Tracking',
            description: 'Track your shipment in real-time to know exactly when it will arrive.',
        },
        {
            title: 'Wide Platforms Selection',
            description: 'Choose from a variety of Shipping Partners.',
        },
        {
            title: 'Cost Comparison',
            description: 'Compare Prices for different Shipping Platforms.',
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Features and Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {featuresBenefitsData.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md bg-white">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesBenefitsSection;
