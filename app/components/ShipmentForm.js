"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShipmentForm = () => {

    const [fromCountry, setFromCountry] = useState("");
    const [toCountry, setToCountry] = useState("");

    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Comoros',
        'Congo (Congo-Brazzaville)',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czechia (Czech Republic)',
        'Democratic Republic of the Congo (Congo-Kinshasa)',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'East Timor (Timor-Leste)',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Eswatini',
        'Ethiopia',
        'Fiji',
        'Finland',
        'France',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Greece',
        'Grenada',
        'Guatemala',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Israel',
        'Italy',
        'Ivory Coast',
        'Jamaica',
        'Japan',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea, North',
        'Korea, South',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Micronesia',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Morocco',
        'Mozambique',
        'Myanmar (formerly Burma)',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'North Macedonia (formerly Macedonia)',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestine State',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Qatar',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        'Togo',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Vatican City (Holy See)',
        'Venezuela',
        'Vietnam',
        'Yemen',
        'Zambia',
        'Zimbabwe',
    ];


    const [shipment, setShipment] = useState({
        origin: '',
        destination: '',
        cargoType: '',
        specialRequirements: '',
        moreInformation: '',
        weight: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipment({ ...shipment, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission here, e.g., send the data to an API
        console.log(shipment);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className='bg-white p-4 rounded-lg shadow-md'
        >
            <div className='md:flex justify-between'>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin">
                        Origin:
                    </label>
                    
                    <select
                        id="from"
                        name="from"
                        value={fromCountry}
                        onChange={(e) => setFromCountry(e.target.value)}
                        className="border border-gray-300 p-4 sm:p-3 rounded w-full"
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                        Destination:
                    </label>
                    
                    <select
                        type="text"
                        id="destination"
                        name="destination"
                        value={toCountry}
                        onChange={(e) => setToCountry(e.target.value)}
                        className="border border-gray-300 p-4 sm:p-3  rounded w-full"
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cargoType">
                        Weight (kg):
                    </label>
                    <input
                        className="w-full border rounded p-4 sm:p-3 "
                        type="text"
                        id="weight"
                        name="weight"
                        value={shipment.weight}
                        onChange={handleChange}
                        
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialRequirements">
                        Special Requirements:
                    </label>
                    <input
                        className="w-full border rounded p-4 sm:p-3 "
                        type="text"
                        id="specialRequirements"
                        name="specialRequirements"
                        value={shipment.specialRequirements}
                        onChange={handleChange}
                    />
                </div>
               
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moreInformation">
                    More Information:
                </label>
                <textarea
                    className="w-full border rounded py-2 px-3"
                    id="moreInformation"
                    name="moreInformation"
                    value={shipment.moreInformation}
                    onChange={handleChange}
                />
            </div>
            <button
                className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-100"
                type="submit"
            >
                Submit Shipment
            </button>
        </motion.form>
    );
};

export default ShipmentForm;
