import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
    title: string;
    href?: string;
    isActive?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ title, href = '#', isActive = false }) => {
    const baseStyles =
        'inline-flex items-center space-x-1 text-sm font-medium transition-all duration-300';

    const activeStyles = 'text-purple-600 bg-purple-100 px-4 py-2 rounded-lg';
    const defaultStyles = 'text-gray-500';
    const hoverStyles = 'hover:text-purple-600';

    return (
        <Link href={href} passHref className={`${baseStyles} ${isActive ? activeStyles : defaultStyles} ${hoverStyles}`}>
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke={isActive ? '#7C3AED' : '#9CA3AF'}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 13a5 5 0 00-7.53 3.61A5 5 0 0011 18l1.68-.68m6.64-6.64A5 5 0 0016 9m-4 4l5-5"
                    ></path>
                </svg>
                <span>{title}</span>
        </Link>
    );
};

export default CustomLink;
