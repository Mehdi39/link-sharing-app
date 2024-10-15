"use client"
import React from 'react';

// internal imports
import HeadingM from "@/elements/Text/HeadingM";
import BodyM from "@/elements/Text/BodyM";
import LinkItem from "@/components/LinkItem";
import EmptyLinks from "@/components/EmptyLinks";
import { useLinks } from "@/context/LinkContext";
import LinkItemTwo from "@/components/LinkItemTwo";

const LinksHome: React.FC = () => {
    const { links, addLink } = useLinks()

    const handleSaveBtn = () => {
        console.log('Links saved')
    }

    return (
        <div className="bg-white">
            <div className="border-b p-10 space-y-10">
                {/* Title */}
                <div className="space-y-2">
                    <HeadingM text="Customize your links" />
                    <BodyM text="Add/edit/remove links below and then share all your profiles with the world!"/>
                </div>
                <div className="w-full space-y-6">
                    {/* Add new link button */}
                    <button
                        onClick={() => addLink("Github", " ", Date.now())}
                        disabled={links.length === 5}
                        className="w-full border border-electric_indigo text-electric_indigo py-[11px] rounded-lg hover:bg-soft_lilac transition duration-300 disabled:border-purple-300 disabled:text-purple-300 disabled:bg-white">
                        + Add new link
                    </button>
                    {/* Illustration */}
                    <div className="space-y-6">
                        {links.length < 1 && <EmptyLinks/>}
                        {
                            links.map((link, index) => {
                                return (
                                    <LinkItemTwo link={link} number={index + 1} index={index} _id={link._id}/>
                                )
                            })
                        }
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

export default LinksHome;
