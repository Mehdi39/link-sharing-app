"use client"
import React, { useState } from 'react';
import {FaGithub, FaYoutube, FaLinkedin, FaLink} from 'react-icons/fa';

interface DropdownItem {
    id: number;
    label: string;
    icon: JSX.Element;
}

const items: DropdownItem[] = [
    { id: 1, label: 'Item 1', icon: <FaGithub /> },
    { id: 2, label: 'Item 2 (Selected)', icon: <FaYoutube /> },
    { id: 3, label: 'Item 3', icon: <FaLinkedin /> },
];

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectItem = (item: DropdownItem) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative w-64">
            {/* Dropdown Field */}
            <button
                onClick={toggleDropdown}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border ${
                    isOpen
                        ? 'border-purple-500 bg-purple-100'
                        : 'border-gray-300 bg-white'
                } text-gray-700 hover:border-purple-500 focus:border-purple-500 transition-all duration-300`}
            >
                <span className="flex items-center space-x-2">
                  <FaLink />
                  <span>
                    {selectedItem ? selectedItem.label : 'Dropdown Field Default'}
                  </span>
                </span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleSelectItem(item)}
                            className={`px-4 py-2 flex items-center space-x-2 cursor-pointer hover:bg-purple-100 ${
                                selectedItem?.id === item.id ? 'text-purple-600' : 'text-gray-700'
                            }`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
