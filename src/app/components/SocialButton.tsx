import React from 'react';

type ButtonProps = {
    icon: React.ReactNode;
    buttonTitle: string;
    color: string;
    onClick?: () => void; // Optional if you want to add click functionality
};

const SocialButton: React.FC<ButtonProps> = ({ icon, buttonTitle, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`min-w-[237px] flex items-center justify-between w-full text-white font-medium px-4 py-3 rounded-lg shadow-md`}
            style={{ backgroundColor: color }}
        >
            <div className="flex items-center">
                {icon}
                <span className="ml-3">{buttonTitle}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </button>
    );
};

export default SocialButton;
