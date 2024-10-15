"use client"; // Mark it as a client component since it uses React state

import React, { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import LinkPlatformItems from "./LinkPlatformItems";
import { LinkProps, useLinks } from "@/context/LinkContext";
import {getCorrespondingLogo, getCorrespondingLogoCom, getRightProfileUrl} from "@/utils/helper";

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

// List of available social platforms
const socialPlatforms = [
    { name: "Github", icon: <IconGithub  color="#737373"/>, url: "https://github.com/" },
    { name: "Dev.to", icon: <IconDevto color="#737373"/>, url: "https://dev.to/" },
    { name: "Frontend Mentor", icon: <IconFrontendMentor color="#737373"/>, url: "https://www.frontendmentor.io/profile/" },
    { name: "Codewars", icon: <IconCodewars color="#737373"/>, url: "https://www.codewars.com/users/" },
    { name: "Gitlab", icon: <IconGitlab color="#737373"/>, url: "https://gitlab.com/" },
    { name: "Hashnode", icon: <IconHashnode color="#737373"/>, url: "https://hashnode.com/@" },
    { name: "Twitter", icon: <IconTwitter color="#737373"/>, url: "https://twitter.com/" },
    { name: "LinkedIn", icon: <IconLinkedin color="#737373"/>, url: "https://www.linkedin.com/in/" },
    { name: "YouTube", icon: <IconYoutube color="#737373"/>, url: "https://www.youtube.com/@" },
    { name: "Facebook", icon: <IconFacebook color="#737373"/>, url: "https://www.facebook.com/" },
    { name: "Twitch", icon: <IconTwitch color="#737373"/>, url: "https://www.twitch.tv/" },
    { name: "Codepen", icon: <IconCodepen color="#737373"/>, url: "https://codepen.io/" },
    { name: "freeCodeCamp", icon: <IconFreeCodeCamp color="#737373"/>, url: "https://www.freecodecamp.org/news/author" },
    { name: "StackOverflow", icon: <IconStackOverflow color="#737373"/>, url: "https://stackoverflow.com/users/" },
];

interface LinkItemsProps {
    link: LinkProps;
    number: number;
    index: number;
    isCreating: boolean;
    _id: string;
}

// Refactored LinkItems component without framer-motion
const LinkItems: React.FC<LinkItemsProps> = ({ link, number, index, isCreating, _id }) => {
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
                <button onClick={() => deleteLink(link._id)} className="text-gray-500 hover:text-gray-700">
                    <BodyM text="Remove"/>
                </button>
            </div>

            <div>
                <form className="flex flex-col gap-[1.2rem]">
                    {/* Platform Dropdown */}
                    <div className="space-y-1">
                        <label htmlFor="platform">
                            <BodyS text="Platform"/>
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                className="flex w-full items-center gap-[14px] rounded-lg border border-solid border-cloudy_silver bg-white px-4 py-2 text-[1.6rem] outline-none focus:border-[#633cff] focus:shadow-purple-sh"
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
                                            index={link._id}
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
                            <BodyS text="Link" classnames=""/>
                        </label>
                        <div className="relative">
                            <div className="absolute left-[2.2%] top-[32%]"><IconLink/></div>
                            <input
                                type="text"
                                placeholder="e.g. https://www.github.com/johnappleseed"
                                id="link"
                                value={linkUrl}
                                onChange={handleUpdateLinkUrl}
                                className="w-full rounded-lg border border-solid border-[#d9d9d9] bg-white py-2 pl-[38px] text-body-m text-graphite_gray outline-none focus:border-[#633cff] focus:shadow-purple-sh disabled:cursor-not-allowed disabled:bg-[#ccc]"
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
