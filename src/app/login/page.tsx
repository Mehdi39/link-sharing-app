"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// internal imports
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../assets/images/logo-devlinks-large.svg'
import IconMail from "@/assets/images/IconMail";
import IconPassword from "@/assets/images/IconPassword";
import HeadingS from "@/elements/Text/HeadingS";
import HeadingM from "@/elements/Text/HeadingM";
import BodyM from "@/elements/Text/BodyM";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const { message } = await res.json();
                setError(message);
                return;
            }

            // Redirect to homepage or protected page
            router.push('/');
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col gap-[51px] items-center justify-center bg-gray-50 pt-[206px]">
            <div className="flex flex-col items-center min-w-[476px]">
                <div className="flex items-center justify-center rounded-full">
                    <Image src={logo} alt="link-sharing-app-logo" />
                </div>
            </div>
            <div className="w-full max-w-md p-10 bg-white rounded-xl">
                <div className="pb-10">
                    <HeadingM text="Login" />
                    <BodyM text="Add your details below to get back into the app" classnames="mt-2"/>
                </div>

                {/* Form */}
                <form className="mt-0 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-6">
                        {/* Email */}
                        {error && <p>{error}</p>}
                        <div>
                            <label htmlFor="email" className="block text-body-s text-charcoal_black">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconMail />
                                </div>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-body-m text-graphite_gray"
                                    placeholder="e.g. alex@email.com"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-body-s text-charcoal_black">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconPassword />
                                </div>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-body-m"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-[11px] px-4 bg-electric_indigo hover:bg-purple-700 text-white text-heading-s font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                           <HeadingS text="Login" classnames="text-white"/>
                        </button>
                    </div>
                </form>

                {/* Create Account Link */}
                <div className="text-center pt-6">
                    <p className="text-body-m text-graphite_gray">
                        Don’t have an account?{' '}
                        <Link href="/signup" className="text-electric_indigo hover:text-purple-500">Create account</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;
