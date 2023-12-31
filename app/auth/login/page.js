"use client"
import ErrorComponent from "@/app/components/ui/ErrorComponent";
import IconButton from "@/components/ui/IconButton";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React, {useState} from "react";
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/navigation";



function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("");
    const newErrors = {};
    const validateForm = () => {


        // Validate username
        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        }

        // Validate email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate password
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }


        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const supabase = createClientComponentClient();
                const { data, error } = await supabase.auth.signInWithPassword({
                    email, password
                });
                console.log("userdata", data)
                if (error) {
                    setErrors(error.message);
                }

                if (!error) {
                    window.localStorage.setItem("user_details", JSON.stringify({
                        email:data.user.email
                    }))
                    router.push("/dashboard");
                }

            } catch (error) {
                console.log("err---", error.message)
            }



        } else {
            console.log("errors", newErrors);
        }

  

    }

    return (
        <div className="flex h-screen">
            {/* Left Side with Background Image */}
            <div 
                className="flex-1 bg-cover bg-center hidden sm:block"
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
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="mt-2">
                                {errors.email && <ErrorComponent message={errors.email} />}
                            </div>
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
                        <div className="mt-2 w-full">
                            <IconButton text="Login"  />
                        </div>
                       
                        
                        <div className="mt-2 w-full mb-8">
                            <IconButton text="Google" icon={<FcGoogle />} />
                        </div>

                        <Link href="/auth/signup" className="mt-8">
                        <div className="mt-2 w-full">

                           
                                Dont have Account ? <IconButton  text="Sign Up"  />
                           
                        </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
