"use client"
import ErrorComponent from "@/app/components/ui/ErrorComponent";
import IconButton from "@/components/ui/IconButton";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";




function  SignUp() {
    const [isSubMiting, setIsSubMiting] = useState(false)
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    
    const [errors, setErrors] = useState("");
    const getData = async () => {
        const data = await fetch(`http://localhost:3000/api/profile`, {
            method:"POST",
            body: JSON.stringify({username:userName, phone, country})
        });
        let test = await data.json();
        return test.data
    
      };

    useEffect(()=>{
       

        if(isSubMiting){
            getData().then((data)=>{
                console.log("test",data)
            })
        }
        console.log("issubmit", isSubMiting)

    })

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
   
  
    
    const newErrors = {};
    const validateForm = () => {
      

     
        // Validate email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate password
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        
        // Validate user name
        if (!userName) {
            newErrors.userName = 'User name is required';
        }

         // Validate user name
         if (!phone) {
            newErrors.phone = 'Phone Number is required';
        }
        
        
         // Validate user name
         if (!country) {
            newErrors.country = 'Country name is required';
        }
        
        
     
        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSubMit = (e) => {
        
        e.preventDefault();
      
        if(validateForm()) {
            const userInfo = {
                email,  confirmPassword
            }
            console.log("userInfo", userInfo);
            const supabase = createClientComponentClient();
            const {error} = supabase.auth.signUp({
                email, password,
                options: {
                    emailRedirectTo: `${location.origin}/api/auth/callback`
                }
            })
            const supabaseNewInstance = createClientComponentClient();
            const {data} =  supabaseNewInstance.from('profiles').insert({username:userName, phone, country}).single().select()
            console.log("test", data)
            console.log("userdata", {
                country, phone
            })

           
            if(error){
                setErrors(error)
            }
            if (!error) {
                setIsSubMiting(true);
                 router.push('/verify');
            }

        }else{
            console.log("errors",newErrors);
        }
        
        
    }
    return (
        <div className="flex mt-16">
            {/* Left Side with Background Image */}
            <div
                className="hidden md:block flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg')", // Replace with your image path
                }}
            >
                {/* Content inside the left side */}
                <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-4xl font-extrabold mb-4">
                            Welcome to Deliver Next
                        </h1>
                        <p className="text-lg">Sign up to get started!</p>
                    </div>
                </div>
            </div>

            {/* Right Side with Sign-up Form */}
            <div className="flex-1 flex items-center justify-center">
                <div className="max-w-md w-full p-4">
                    <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handleSubMit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Email"
                                value={email}
                                onChange = {(e)=>setEmail(e.target.value)}
                            />
                          

                        </div>
                        <div className="mt-2">
                            {errors.email && <ErrorComponent message={errors.email} />}
                        </div>


                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-600">
                                User name
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Name"
                                value={userName}
                                onChange = {(e)=>setUserName(e.target.value)}
                            />
                          

                        </div>
                        <div className="mt-2">
                            {errors.userName && <ErrorComponent message={errors.userName} />}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-600">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Phone"
                                value={phone}
                                onChange = {(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            {errors.phone && <ErrorComponent message={errors.phone} />}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="country" className="block text-gray-600">
                                Country
                            </label>
                            <select
                        id="from"
                        name="from"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                        </div> 
                       
                      
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="mt-2">
                                {errors.password && <ErrorComponent message={errors.password} />}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">
                               Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="mt-2">
                                {errors.confirmPassword && <ErrorComponent message={errors.confirmPassword} />}
                            </div>
                        </div>
                       
                        <div className="mt-2 w-full">
                            <IconButton text="Sign Up"  />

                        </div>
                        <div className="mt-2 w-full">

                            <IconButton text="Google" icon={<FcGoogle />} />
                        </div>
                        <div className="mt-2 w-full mt-2">

                          <Link href="/auth/login">
                                Have Account ? <IconButton type="button" text="Login"  />
                          </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
