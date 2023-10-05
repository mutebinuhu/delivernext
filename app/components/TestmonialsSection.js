import React from 'react';

const TestimonialsSection = () => {
    const testimonialsData = [
        {
            name: 'John Chinua',
            country:'uganda',
            testimonial:
                'I\'m impressed with the quick and reliable delivery service.The shippments always arrive on time!',
            image: 'https://lh3.googleusercontent.com/a/ACg8ocKEk52PA6iU_4dPpA5jnf9MUC8Zz77Q3IQyCMbv8rRDFZY=s360-c-no', // Add the actual image file path
        },
        {
            name: 'Sanjay',
            country:'India',
            testimonial:
                'This platform has made my life so much easier. I love the variety of platforms available and the easy process.',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80', // Add the actual image file path
        },
        {
            name: 'Danielle',
            country:'Philippines',
            testimonial:
                'The customer support is outstanding. They helped me with a delivery issue, and I couldn\'t be happier with the service.',
            image: 'https://images.pexels.com/photos/18441346/pexels-photo-18441346/free-photo-of-smiling-woman-in-eyeglasses-sitting-by-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add the actual image file path
        },
    ];

    return (
        <section className="bg-testimonials-bg bg-cover bg-center py-12 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-black">Customer Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-md bg-opacity-70 bg-white text-gray-800">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
                            />
                            <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
                            <p className="text-lg font-semibold">{testimonial.name}</p>
                            <span className="italic mt-4"><span className="text-bold">-</span>{testimonial.country}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
