import React from 'react';
import LinkPrimaryButton from './LinkPrimaryButton';

const FeaturesBenefitsSection = () => {
    const featuresBenefitsData = [
        {
            title: 'Fast Delivery',
            description: 'Get your shipments delivered quickly, so you never have to wait.',
            image: 'https://www.stockvault.net/data/2016/04/19/194061/preview16.jpg'

        },
        {
            title: 'Real-time Tracking',
            description: 'Track your shipment in real-time to know exactly when it will arrive.',
            image:'https://img.freepik.com/free-photo/side-view-hand-holding-smartphone_23-2149764138.jpg?w=996&t=st=1698209538~exp=1698210138~hmac=b2015839fe66fc11db8d9b1116408d6333305b1984ff68e87efe2396e5272b0d'
        },
        {
            title: 'Wide Platforms Selection',
            description: 'Choose from a variety of Shipping Partners.',
            image:'https://img.freepik.com/free-photo/businessman-selecting-gray-square_1232-897.jpg?w=996&t=st=1698209633~exp=1698210233~hmac=dd6c2c76db9bb13f53f5bccb44c0ee85c1f4ac15beef2c9ffa9dff6c05077090'
        },
        {
            title: 'Cost Comparison',
            description: 'Compare Prices for different Shipping Platforms.',
            image: 'https://img.freepik.com/free-vector/income-inequality-abstract-concept-illustration-country-income-distribution-financial-gender-discrimination-social-economic-inequality-gini-coefficient-salary-gap_335657-66.jpg?size=626&ext=jpg&ga=GA1.1.286537777.1698209519&semt=ais'
        },
    ];

    return (
        <section className="bg-gray-100 py-12" id="features">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6">Features and Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {featuresBenefitsData.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md bg-white">
                            <img src={item.image} alt="pic" className='w-full h-48 mx-auto mb-4 object-cover ' />
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="my-6">
                                <LinkPrimaryButton message="GET STARTED" linkTo="/dashboard" />
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default FeaturesBenefitsSection;
