"use client"
import { useState } from 'react';

const ImageUploader = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    return (
        <div className="flex items-center space-x-8">
            <div className="relative">
                {!image ? (
                    <label className="cursor-pointer flex flex-col items-center justify-center h-48 w-48 bg-[#EFE8FF] rounded-xl border-2 border-dashed border-[#633CFF]">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="#633CFF"
                                className="w-10 h-10 mb-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.75a4.75 4.75 0 014.75 4.75h3.5a1.75 1.75 0 011.75 1.75v7a1.75 1.75 0 01-1.75 1.75H4.75A1.75 1.75 0 013 18.25v-7A1.75 1.75 0 014.75 9.5h3.5A4.75 4.75 0 0112 4.75z"
                                />
                            </svg>
                            <span className="text-[#633CFF] text-sm font-medium">
                + Upload Image
              </span>
                        </div>
                    </label>
                ) : (
                    <div className="relative h-48 w-48 rounded-xl overflow-hidden">
                        <img
                            src={image}
                            alt="Uploaded"
                            className="h-full w-full object-cover"
                        />
                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="white"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.75a4.75 4.75 0 014.75 4.75h3.5a1.75 1.75 0 011.75 1.75v7a1.75 1.75 0 01-1.75 1.75H4.75A1.75 1.75 0 013 18.25v-7A1.75 1.75 0 014.75 9.5h3.5A4.75 4.75 0 0112 4.75z"
                                />
                            </svg>
                            <span className="text-white text-sm font-medium ml-2">
                Change Image
              </span>
                        </label>
                    </div>
                )}
            </div>
            <div>
                {image ? (
                    <p className="text-gray-900 font-medium">Image Uploaded</p>
                ) : (
                    <p className="text-gray-500">Image Not Uploaded</p>
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
