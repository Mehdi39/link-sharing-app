"use client"
import React from 'react';
import Image from 'next/image'

// internal imports
import illustraionEmpty from '../assets/images/illustration-empty.svg'

const CustomizeLinks: React.FC = () => {
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
                    <h2 className="text-heading-m font-bold text-charcoal_black">Customize your links</h2>
                    <p className="text-graphite_gray text-body-m">
                        Add/edit/remove links below and then share all your profiles with the world!
                    </p>
                </div>
                <div className="w-full space-y-6">
                    {/* Add new link button */}
                    <button
                        onClick={() => handleAddNewLink()}
                        className="w-full border border-electric_indigo text-electric_indigo py-[11px] rounded-lg hover:bg-soft_lilac transition duration-300">
                        + Add new link
                    </button>
                    {/* Illustration */}
                    <div className="flex flex-col gap-10 items-center justify-center px-5 py-[62.5px] rounded-lg bg-frost_white">
                        <Image
                            src={illustraionEmpty}
                            alt="Get Started Illustration"
                            className="w-48 h-48"
                            width={249.53}
                            height={160}
                        />
                        <div className="text-center space-y-6 max-w-[488px]">
                            <h2 className="text-heading-m font-bold text-charcoal_black">Let’s get you started</h2>
                            <p className="text-body-m text-graphite_gray text-center max-w-lg">
                                Use the “Add new link” button to get started. Once you have more than one link, you
                                can
                                reorder and edit them. We’re here to help you share your profiles with everyone!
                            </p>
                        </div>
                    </div>
                </div>
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

export default CustomizeLinks;
