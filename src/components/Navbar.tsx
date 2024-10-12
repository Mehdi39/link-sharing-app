"use client"
import React from 'react';
import { FiEye } from 'react-icons/fi';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// internal imports
import logo from '../assets/images/logo-devlinks-large.svg'
import logoSm from '../assets/images/logo-devlinks-small.svg'
import ProfileIcon from "@/assets/images/ProfileIcon";
import LinkIcon from "@/assets/images/LinkIcon";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between items-center ps-6 p-4 bg-white md:m-6 m-0 md:rounded-xl ">
            <div className="flex items-center justify-center">
                <Link href="/">
                    <Image className="hidden md:block" src={logo} alt="link-sharing-app-logo" width={146} height={32}/>
                    <Image className="md:hidden" src={logoSm} alt="link-sharing-app-logo" width={32} height={32}/>
                </Link>
            </div>

            <div className="flex space-x-6">
                <Link
                    href="/"
                    className={`flex items-center space-x-2 text-graphite_gray px-[27px] py-[11px] rounded-lg 
                                ${pathname === '/' ? 'bg-soft_lilac text-electric_indigo' : ''}`}
                >
                    <LinkIcon color={pathname === '/' ? '#633CFF' : '#737373'}/>
                    <span className={`hidden md:block ${pathname === '/' ? 'bg-soft_lilac text-electric_indigo' : ''}`}>Links</span>
                </Link>
                <Link
                    href="/home"
                    className={`flex items-center space-x-2 text-graphite_gray px-[27px] py-[11px] rounded-lg  
                                ${pathname === '/home' ? 'bg-soft_lilac text-electric_indigo' +
                        ' text-purple-600' : ''}`}
                >
                    <ProfileIcon color={pathname === '/home' ? '#633CFF' : '#737373'}/>
                    <span className={`hidden md:block ${pathname === '/home' ? 'bg-soft_lilac text-electric_indigo' : ''}`}>Profile Details</span>
                </Link>
            </div>

            <div>
                <button
                    className="flex items-center md:px-[27px] px-4 py-[11px] border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition duration-300">
                    <FiEye className="w-5 h-5 md:hidden"/>
                    <span className="hidden md:block">Preview</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

// TODO: Navbar revision_1
