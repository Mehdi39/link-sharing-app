// components/PhoneMockup.tsx
import React from 'react';
import Image from 'next/image';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

// internal imports
import illustrationPhoneMockup from "@/assets/images/illustration-phone-mockup.svg"
import SocialButton from "@/elements/SocialButton";
import IconGithub from "@/assets/images/IconGithub";
import IconYoutube from "@/assets/images/IconYoutube";
import IconLinkedin from "@/assets/images/IconLinkedin";

const PhoneMockup: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            {/* Phone mockup container */}
            <div className="relative w-[280px] h-[600px] flex items-center justify-center">
                {/* Background Image */}
                <Image
                    src={illustrationPhoneMockup}
                    alt="Phone Mockup"
                    layout="fill"
                    objectFit="contain"
                />

                {/* Content inside the phone */}
                <div className="absolute top-[70px] w-full px-8 flex flex-col items-center">
                    {/* Profile Placeholder */}
                    <div className="w-[87px] h-[87px] bg-gray-300 rounded-full"></div>
                    <div className="w-[160px] h-4 bg-gray-300 rounded-full mt-[22px]"></div>
                    <div className="w-[68px] h-2 bg-gray-200 rounded-full mt-[12px]"></div>

                    {/* Button */}
                    <div className="w-full mt-[44px] space-y-3">
                        <SocialButton icon={<IconGithub/>} buttonTitle="GitHub" color="bg-github" size="small"/>
                        <SocialButton icon={<IconYoutube/>} buttonTitle="Youtube" color="bg-youtube" size="small"/>
                        <SocialButton icon={<IconLinkedin/>} buttonTitle="LinkedIn" color="bg-linkedin" size="small"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;
