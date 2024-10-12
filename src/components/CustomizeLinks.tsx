import React from 'react';
import Image from 'next/image'

// internal imports
import illustraionEmpty from '../assets/images/illustration-empty.svg'

const CustomizeLinks: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-800">Customize your links</h1>
                <p className="text-gray-600">
                    Add/edit/remove links below and then share all your profiles with the world!
                </p>

                {/* Add new link button */}
                <div className="flex justify-center">
                    <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition duration-300">
                        + Add new link
                    </button>
                </div>

                {/* Illustration */}
                <div className="flex flex-col items-center justify-center py-12">
                    <Image
                        src={illustraionEmpty}
                        alt="Get Started Illustration"
                        className="w-48 h-48"
                        width={249.53}
                        height={160}
                    />
                    <h2 className="mt-8 text-xl font-bold text-gray-800">Let’s get you started</h2>
                    <p className="text-gray-600 text-center mt-2 max-w-lg">
                        Use the “Add new link” button to get started. Once you have more than one link, you can
                        reorder and edit them. We’re here to help you share your profiles with everyone!
                    </p>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomizeLinks;
