import React from 'react';

interface ButtonProps {
    title: string;
    buttonType: 'primary' | 'secondary';
    isActive?: boolean;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, buttonType, isActive = false, isDisabled = false }) => {
    const baseStyles =
        'py-2 px-6 rounded-lg font-medium text-sm flex items-center justify-center transition-all duration-300';

    const primaryStyles = isDisabled
        ? 'bg-purple-300 text-white'
        : isActive
            ? 'bg-purple-400 text-white shadow-lg'
            : 'bg-purple-600 text-white hover:bg-purple-500';

    const secondaryStyles = isDisabled
        ? 'border border-purple-300 text-purple-300'
        : isActive
            ? 'border border-purple-400 text-purple-500 bg-purple-100'
            : 'border border-purple-500 text-purple-500 hover:bg-purple-100';

    const buttonStyles = buttonType === 'primary' ? primaryStyles : secondaryStyles;

    return (
        <button
            className={`${baseStyles} ${buttonStyles} text-red-500`}
            disabled={isDisabled}
        >
            {title}
        </button>
    );
};

export default Button;

