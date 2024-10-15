import Link from "next/link";
import React from "react";

const PreviewNavbar = () => {
    return (
        <div className="flex">
            <nav className="w-full flex justify-between items-center ps-6 p-4 bg-white md:m-6 m-0 md:rounded-xl">
                <Link
                    href="/"
                    className="flex items-center md:px-[27px] px-4 py-[11px] border border-electric_indigo text-electric_indigo rounded-lg hover:bg-purple-50 transition duration-300"
                >
                    <span className="hidden md:block">Back to Editor</span>
                </Link>
                <Link
                    href="/preview"
                    className="flex items-center bg-electric_indigo text-white md:px-[27px] px-4 py-[11px] rounded-lg">
                    Share Link
                </Link>
            </nav>
        </div>
    )
}

export default PreviewNavbar;
