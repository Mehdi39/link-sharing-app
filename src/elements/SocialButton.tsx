import React from 'react';

// internal import
import RightArrow from "@/elements/RightArrow";
import Image from "next/image";
import {white} from "next/dist/lib/picocolors";

type ButtonProps = {
    icon: React.ReactNode;
    buttonTitle: string;
    color: string;
    size?: 'small' | 'large';
    onClick?: () => void; // Optional if you want to add click functionality
};

const SocialButton: React.FC<ButtonProps> = ({ icon, buttonTitle, classnames, size = "large", onClick }) => {
    const buttonHeight = size === 'small' ? 'px-4 py-[11px]' : 'p-4';
    return (
        <div
            onClick={onClick}
            className={`${classnames} ${buttonHeight} z-40  max-w-[237px] flex items-center justify-between w-full font-medium rounded-lg shadow-md`}
        >
            <div className="flex items-center">
                {icon}
                <span className="ml-2">{buttonTitle}</span>
            </div>
            <RightArrow/>
        </div>
    );
};

export default SocialButton;

// TODO: SocialButton revision_1
