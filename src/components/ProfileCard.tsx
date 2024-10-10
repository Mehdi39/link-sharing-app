// components/ProfileCard.tsx
import React from 'react';
import { FiGithub, FiYoutube, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image'

// internal imports
import IconGithub from "@/assets/images/IconGithub";
import IconYoutube from "@/assets/images/IconYoutube";
import IconLinkedin from "@/assets/images/IconLinkedin";
import avatar from "@/assets/images/img_1.png"
import SocialButton from "@/elements/SocialButton";

const ProfileCard: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 min-w-[349px]">
            <div className="bg-white shadow-[0_0_32px_rgba(0,0,0,0.10)] rounded-3xl px-14 py-12 max-w-md w-full text-center">
                <div className="flex flex-col gap-[25px]">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <Image src={avatar} alt="profile" width={104} height={104} className="border-4 border-electric_indigo rounded-full "/>
                    </div>

                    {/* Name and Email */}
                    <div className="space-y-2">
                        <h2 className="text-heading-m font-bold text-charcoal_black">Ben Wright</h2>
                        <p className="text-graphite_gray text-body-m">ben@example.com</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-14 space-y-5">
                    {/* GitHub Button */}
                    <SocialButton icon={<IconGithub/>} buttonTitle="GitHub" color="bg-github"/>
                    {/* YouTube Button */}
                    <SocialButton icon={<IconYoutube/>} buttonTitle="Youtube" color="bg-youtube"/>
                    {/* LinkedIn Button */}
                    <SocialButton icon={<IconLinkedin/>} buttonTitle="Linkedin" color="bg-linkedin"/>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
