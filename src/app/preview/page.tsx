"use client"
import React from "react";
import PreviewNavbar from "@/components/PreviewNavbar";
import ProfileCard from "@/components/ProfileCard";

const Preview = () => {
    return (
        <div className="relative">
            <div className="relative">
                <div className="absolute left-0 top-0 z-10 lg:h-[357px] w-full bg-electric_indigo rounded-b-[32px]"></div>
                <div className="absolute w-full z-20">
                    <PreviewNavbar/>
                </div>
            </div>

            <div className="">
                <ProfileCard/>
            </div>
        </div>
    )
}

export default Preview;
