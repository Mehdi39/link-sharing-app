"use client"
import { useState } from 'react';
import { FiLink } from 'react-icons/fi'; // Optional, using react-icons for the link icon

interface TextFieldProps {
    placeholder: string;
    state: 'empty' | 'filled' | 'active' | 'error';
    errorMessage?: string;
}

const TextField = ({ placeholder, state, errorMessage }: TextFieldProps) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    let borderColor = 'border-gray-300';
    let textColor = 'text-gray-500';
    let placeholderColor = 'placeholder-gray-400';
    let iconColor = 'text-gray-400';

    if (state === 'active') {
        borderColor = 'border-[#633CFF]';
        textColor = 'text-gray-900';
        placeholderColor = 'placeholder-gray-500';
        iconColor = 'text-[#633CFF]';
    } else if (state === 'filled') {
        textColor = 'text-gray-900';
        placeholderColor = 'placeholder-gray-500';
    } else if (state === 'error') {
        borderColor = 'border-red-500';
        textColor = 'text-red-600';
        iconColor = 'text-red-500';
    }

    return (
        <div className="flex flex-col space-y-2">
            <div className={`relative flex items-center rounded-md border-2 p-2 ${borderColor}`}>
                <FiLink className={`w-5 h-5 ${iconColor} mr-2`} />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={`w-full outline-none ${textColor} ${placeholderColor} bg-transparent`}
                />
            </div>
            {state === 'error' && errorMessage && (
                <span className="text-sm text-red-500">{errorMessage}</span>
            )}
        </div>
    );
};

export default TextField;
