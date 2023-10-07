import IconButton from "@/components/ui/IconButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
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
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                User name
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Username"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                               Phone number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                className="w-full border border-gray-300 rounded-md py-2 px-3"
                                placeholder="Your Phone"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">
                                Country
                            </label>
                            <select name="" id="" className="w-full border border-gray-300 rounded-md py-2 px-3">
                                <option value="UAE">UAE</option>
                                <option value="INDIA">India</option>
                                <option value="PHILLIPINES">Phillipines</option>
                                <option value="UGANDA">Uganda</option>
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
                            />
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
