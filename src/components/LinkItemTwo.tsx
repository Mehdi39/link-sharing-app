"use client"; // Mark it as a client component since it uses React state

import React, { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import LinkPlatformItems from "./LinkPlatformItems";
import { LinkProps, useLinks } from "@/context/LinkContext";
import { getCorrespondingLogo, getRightProfileUrl } from "@/utils/helper";

// Internal imports
import IconGithub from "@/assets/images/IconGithub";
import IconDevto from "@/assets/images/IconDevto";
import IconFrontendMentor from "@/assets/images/IconFrontendMentor";
import IconCodewars from "@/assets/images/IconCodewars";
import IconGitlab from "@/assets/images/IconGitlab";
import IconHashnode from "@/assets/images/IconHashnode";
import IconTwitter from "@/assets/images/IconTwitter";
import IconLinkedin from "@/assets/images/IconLinkedin";
import IconYoutube  from "@/assets/images/IconYoutube";
import IconFacebook from "@/assets/images/IconFacebook";
import IconTwitch from "@/assets/images/IconTwitch";
import IconCodepen from "@/assets/images/IconCodepen";
import IconFreeCodeCamp from "@/assets/images/IconFreeCodeCamp";
import IconStackOverflow from "@/assets/images/IconStackOverflow";
import IconDragAndDrop from "@/assets/images/IconDragAndDrop";
import HeadingM from "@/elements/Text/HeadingM";
import HeadingS from "@/elements/Text/HeadingS";
import IconLink from "@/assets/images/IconLink";
import BodyM from "@/elements/Text/BodyM";
import BodyS from "@/elements/Text/BodyS";
import {FiLink} from "react-icons/fi";

// List of available social platforms
const socialPlatforms = [
    { name: "Github", icon: <IconGithub/>, url: "https://github.com/" },
    { name: "Dev.to", icon: <IconDevto/>, url: "https://dev.to/" },
    { name: "Frontend Mentor", icon: <IconFrontendMentor/>, url: "https://www.frontendmentor.io/profile/" },
    { name: "Codewars", icon: <IconCodewars/>, url: "https://www.codewars.com/users/" },
    { name: "Gitlab", icon: <IconGitlab/>, url: "https://gitlab.com/" },
    { name: "Hashnode", icon: <IconHashnode/>, url: "https://hashnode.com/@" },
    { name: "Twitter", icon: <IconTwitter/>, url: "https://twitter.com/" },
    { name: "LinkedIn", icon: <IconLinkedin/>, url: "https://www.linkedin.com/in/" },
    { name: "YouTube", icon: <IconYoutube/>, url: "https://www.youtube.com/@" },
    { name: "Facebook", icon: <IconFacebook/>, url: "https://www.facebook.com/" },
    { name: "Twitch", icon: <IconTwitch/>, url: "https://www.twitch.tv/" },
    { name: "Codepen", icon: <IconCodepen/>, url: "https://codepen.io/" },
    { name: "freeCodeCamp", icon: <IconFreeCodeCamp/>, url: "https://www.freecodecamp.org/news/author" },
    { name: "StackOverflow", icon: <IconStackOverflow/>, url: "https://stackoverflow.com/users/" },
];

interface LinkItemsProps {
    link: LinkProps;
    number: number;
    index: number;
    isCreating: boolean;
}

// Refactored LinkItems component without framer-motion
const LinkItems: React.FC<LinkItemsProps> = ({ link, number, index, isCreating }) => {
    const { updateLink, deleteLink } = useLinks();
    const [links, setLinks] = useState(link.name);
    const [isLinkBoxOpen, setIsLinkBoxOpen] = useState(false);
    const [linkUrl, setLinkUrl] = useState(link.link || getRightProfileUrl(link.name)!);

    const handlePlatformChange = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsLinkBoxOpen((prev) => !prev);
    };

    const handleUpdateLinkUrl = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length >= getRightProfileUrl(link.name)!.length) {
            setLinkUrl(value);
            updateLink(index, { link: value, name: links });
        }
    };

    useEffect(() => {
        setLinkUrl(link.link || getRightProfileUrl(link.name)!);
        setLinks(link.name);
    }, [link]);

    return (
        <div className="rounded-lg bg-frost_white p-5">
            {/* Header with Remove button */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex justify-center items-center gap-2">
                    <IconDragAndDrop color="#737373"/>
                    <HeadingS text="Link #">{number}</HeadingS>
                </div>
                <button onClick={() => deleteLink(index)} className="text-gray-500 hover:text-gray-700">
                    <BodyM text="Remove"/>
                </button>
            </div>

            <div>
                <form className="flex flex-col gap-[1.2rem]">
                    {/* Platform Dropdown */}
                    <div className="space-y-1">
                        <label htmlFor="platform">
                            <BodyS text="Platform" />
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                className="flex w-full items-center gap-5 rounded-lg border border-solid border-cloudy_silver bg-white px-4 py-2 text-[1.6rem] leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff] focus:shadow-purple-sh"
                                onClick={handlePlatformChange}
                            >
                                {getCorrespondingLogo(link.name)}
                                <BodyM text={link.name} />
                            </button>
                            {isLinkBoxOpen && (
                                <div
                                    className="absolute top-[64px] z-[3] flex h-[30rem] w-full flex-col gap-[1.2rem] overflow-y-scroll rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white py-3 px-4 shadow-dark-sh hide-scrollbar">
                                    {socialPlatforms.map((platform) => (
                                        <LinkPlatformItems
                                            key={platform.name}
                                            index={index}
                                            name={platform.name}
                                            icon={platform.icon}
                                            setLinks={setLinks}
                                            setIsLinkBoxOpen={setIsLinkBoxOpen}
                                            links={links}
                                            setLinkUrl={setLinkUrl}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Link Input */}
                    <div className="space-y-1">
                        <label htmlFor="link">
                            <BodyS text="Link"/>
                        </label>
                        <div className="relative flex items-start">
                            <div className="absolute left-[2.5%] top-[40%]"><IconLink/></div>
                            <input
                                type="text"
                                placeholder="e.g. https://www.github.com/johnappleseed"
                                id="link"
                                value={linkUrl}
                                onChange={handleUpdateLinkUrl}
                                className="w-full rounded-[0.8rem] border border-solid border-[#d9d9d9] bg-white py-3 pl-[40px] text-body-m leading-[2.4rem] text-[#333] caret-[#633cff] outline-none focus:border-[#633cff] focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc]"
                                disabled={isCreating}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LinkItems;
