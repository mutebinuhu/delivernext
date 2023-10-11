"use client"
import ErrorComponent from "@/app/components/ui/ErrorComponent";
import IconButton from "@/components/ui/IconButton";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";


function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");
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
            if(error){
                setErrors(error)
            }
            if (!error) {
                router.push('/verify');
            }

        }else{
            console.log("errors",newErrors);
        }
        
        
    }
    return (
        <div className="flex h-screen">
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
