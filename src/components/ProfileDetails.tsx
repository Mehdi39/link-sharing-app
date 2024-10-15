"use client"
import React from 'react';
import Image from 'next/image'

// internal imports
import illustraionEmpty from '../assets/images/illustration-empty.svg'
import HeadingM from "@/elements/Text/HeadingM";
import BodyM from "@/elements/Text/BodyM";
import BodyS from "@/elements/Text/BodyS";
import ProfileCard from "@/components/ProfileCard";
import EmptyLinks from "@/components/EmptyLinks";
import Img from "@/elements/Img";

const ProfileDetails: React.FC = () => {
    const [links, setLinks] = React.useState([])

    const handleAddNewLink = () => {
        setLinks([...links, ])
    }

    const handleSaveBtn = () => {
        console.log('Links saved')
    }
    return (
        <div className="bg-white">
            <div className="border-b p-10 space-y-10">
                {/* Title */}
                <div className="space-y-2">
                    <HeadingM text="Profile Details" />
                    <p className="text-graphite_gray text-body-m">
                        Add your details to create a personal touch to your profiles
                    </p>
                </div>
                <div className="flex items-center bg-frost_white rounded-lg p-5">
                    <div className="flex w-[240px]">
                        <BodyM text="Profile picture"/>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <Img on={false}/>
                        </div>
                        <div>
                            <BodyS text="Image must be below 1024x1024px. Use PNG or JPG format."/>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 p-5 bg-frost_white rounded-lg">
                    <form className="">
                        <div className="flex items-center mb-4">
                            <label htmlFor="firstname" className="w-[240px] text-gray-700">
                                <BodyM text="First name*"/>
                            </label>
                            <input
                                id="firstname"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                                type="text"
                                placeholder="e.g. John"
                            />
                        </div>

                        <div className="flex items-center mb-4">
                            <label htmlFor="lastname" className="w-[240px] text-gray-700">
                                <BodyM text="Last name*"/>
                            </label>
                            <input
                                id="lastname"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                                type="text"
                                placeholder="e.g. Appleseed"
                            />
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="email" className="w-[240px] text-gray-700">
                                <BodyM text="Email"/>
                            </label>
                            <input
                                id="email"
                                className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                                type="email"
                                placeholder="e.g. email@example.com"
                            />
                        </div>
                    </form>

                </div>
                {/*<div className="w-full space-y-6">*/}
                {/*    /!* Add new link button *!/*/}
                {/*    <button*/}
                {/*        onClick={() => handleAddNewLink()}*/}
                {/*        className="w-full border border-electric_indigo text-electric_indigo py-[11px] rounded-lg hover:bg-soft_lilac transition duration-300">*/}
                {/*        + Add new link*/}
                {/*    </button>*/}
                {/*    /!* Illustration *!/*/}
                {/*    <div className="flex flex-col gap-10 items-center justify-center px-5 py-[62.5px] rounded-lg bg-frost_white">*/}
                {/*        <Image*/}
                {/*            src={illustraionEmpty}*/}
                {/*            alt="Get Started Illustration"*/}
                {/*            className="w-48 h-48"*/}
                {/*            width={249.53}*/}
                {/*            height={160}*/}
                {/*        />*/}
                {/*        <div className="text-center space-y-6 max-w-[488px]">*/}
                {/*            <HeadingM text="Let’s get you started" />*/}
                {/*            <p className="text-body-m text-graphite_gray text-center max-w-lg">*/}
                {/*                Use the “Add new link” button to get started. Once you have more than one link, you*/}
                {/*                can*/}
                {/*                reorder and edit them. We’re here to help you share your profiles with everyone!*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            {/* Save Button */}
            <div className="flex justify-end md:pe-10 md:py-6 px-4 py-4">
                <button
                    onClick={() => handleSaveBtn()}
                    className="w-full md:w-auto px-6 py-3 bg-lavender_mist text-white text-heading-s rounded-lg hover:bg-purple-600 transition duration-300">
                    Save
                </button>
            </div>
        </div>
    );
};

export default ProfileDetails;
