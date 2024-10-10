import React from 'react';

// internal import
import RightArrow from "@/elements/RightArrow";

type ButtonProps = {
    icon: React.ReactNode;
    buttonTitle: string;
    color: string;
    size?: 'small' | 'large';
    onClick?: () => void; // Optional if you want to add click functionality
};

const SocialButton: React.FC<ButtonProps> = ({ icon, buttonTitle, color, size = "large", onClick }) => {
    const buttonHeight = size === 'small' ? 'px-4 py-[11px]' : 'p-4';
    return (
        <button
            onClick={onClick}
            className={`${buttonHeight} ${color} max-w-[237px] flex items-center justify-between w-full text-white font-medium rounded-lg shadow-md`}
        >
            <div className="flex items-center">
                {icon}
                <span className="ml-2">{buttonTitle}</span>
            </div>
            <RightArrow/>
        </button>
    );
};

export default SocialButton;

// TODO: SocialButton revision_1
