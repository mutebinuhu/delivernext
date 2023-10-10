// src/components/UserProfile.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserProfile = () => {
    const formik = useFormik({
        initialValues: {
            country: '',
            city: '',
            phone: '',
        },
        validationSchema: Yup.object({
            country: Yup.string().required('Country is required'),
            city: Yup.string().required('City is required'),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
                .required('Phone is required'),
        }),
        onSubmit: (values) => {
            // Handle form submission here, e.g., send data to the server
            console.log('Form values:', values);
        },
    });
    return (
        <motion.div
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-semibold">User Profile</h2>
            <form onSubmit={formik.handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-600">
                        Country:
                    </label>
                    <select type="text"
                        id="country"
                        name="country"
                        className={`w-full px-4 py-2 border rounded-md ${formik.touched.country && formik.errors.country
                            ? 'border-red-500'
                            : 'border-gray-300'
                            }`}
                        placeholder="Enter your country"
                        {...formik.getFieldProps('country')}>
                        <option value=""></option>
                        <option value="UAE">UAE</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Phillipines">Phillipines</option>

                    </select>
                    {formik.touched.country && formik.errors.country && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
                    )}
                  
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-600">
                        City:
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className={`w-full px-4 py-2 border rounded-md ${formik.touched.city && formik.errors.city
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                        placeholder="Enter your city"
                        {...formik.getFieldProps('city')}
                    />
                    {formik.touched.city && formik.errors.city && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-600">
                        Phone:
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className={`w-full px-4 py-2 border rounded-md ${formik.touched.phone && formik.errors.phone
                                ? 'border-red-500'
                                : 'border-gray-300'
                            }`}
                        placeholder="Enter your phone number"
                        {...formik.getFieldProps('phone')}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
                >
                    Save
                </button>
            </form>
        </motion.div>
    );
};

export default UserProfile;
