import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

// internal imports
import logo from '../../assets/images/logo-devlinks-large.svg'
import IconMail from "@/assets/images/IconMail";
import IconPassword from "@/assets/images/IconPassword";

const SignUp = () => {
    return (
        <div className="flex flex-col gap-[51px] items-center justify-center bg-gray-50 pt-[206px]">
            <div className="flex flex-col items-center min-w-[476px]">
                <div className="flex items-center justify-center rounded-full">
                    <Image src={logo} alt="link-sharing-app-logo"/>
                </div>
            </div>
            <div className="w-full max-w-md p-10 bg-white rounded-xl">
                <div className="pb-10">
                    <h1 className="text-heading-m font-bold text-charcoal_black">Create account</h1>
                    <p className="mt-2 text-graphite_gray text-body-m">
                        Let’s get you started sharing your links!
                    </p>
                </div>

                {/* Form */}
                <form className="mt-0 space-y-6">
                    <div className="space-y-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-body-s text-charcoal_black">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconMail/>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-body-m text-graphite_gray"
                                    placeholder="e.g. alex@email.com"
                                />
                            </div>
                        </div>

                        {/* Create Password */}
                        <div>
                            <label htmlFor="password" className="block text-body-s text-charcoal_black">
                                Create Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconPassword/>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-body-m text-graphite_gray"
                                    placeholder="At least 8 characters"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="password" className="block text-body-s text-charcoal_black">
                                Confirm Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <IconPassword/>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-body-m text-graphite_gray"
                                    placeholder="At least 8 characters"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-body-s">Password must contain at least 8 characters</p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-electric_indigo hover:bg-purple-700 text-white text-heading-s font-semibold rounded-[8px] shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Create new account
                        </button>
                    </div>
                </form>

                {/* Create Account Link */}
                <div className="text-center pt-6">
                    <p className="text-body-m text-graphite_gray">
                        Already have an account?{' '}
                        <Link href="/login" className="text-electric_indigo hover:text-purple-500">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SignUp;
