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

import github from "@/assets/images/icon-github.svg";
import devto from "@/assets/images/icon-devto.svg";
import frontendMentor from "@/assets/images/icon-frontend-mentor.svg";
import codewars from "@/assets/images/icon-codewars.svg";
import gitlab from "@/assets/images/icon-gitlab.svg";
import hashnode from "@/assets/images/icon-hashnode.svg";
import twitter from "@/assets/images/icon-twitter.svg";
import linkedin from "@/assets/images/icon-linkedin.svg";
import youtube from "@/assets/images/icon-youtube.svg";
import facebook from "@/assets/images/icon-facebook.svg";
import twitch from "@/assets/images/icon-twitch.svg";
import codepen from "@/assets/images/icon-codepen.svg";
import freeCodeCamp from "@/assets/images/icon-freecodecamp.svg";
import stackOverflow from "@/assets/images/icon-stack-overflow.svg";


export function getCorrespondingLogo(name: string, color: string) {
    if (name === "Github") return <IconGithub color={color}/>;
    if (name === "Dev.to") return <IconDevto color={color}/>;
    if (name === "Frontend Mentor") return <IconFrontendMentor/>;
    if (name === "Codewars") return <IconCodewars color={color}/>;
    if (name === "Gitlab") return <IconGitlab  color={color}/>;
    if (name === "Hashnode") return <IconHashnode  color={color}/>;
    if (name === "Twitter") return <IconTwitter  color={color}/>;
    if (name === "LinkedIn") return <IconLinkedin  color={color}/>;
    if (name === "YouTube") return <IconYoutube  color={color}/>;
    if (name === "Facebook") return <IconFacebook color={color}/>;
    if (name === "Twitch") return <IconTwitch  color={color}/>;
    if (name === "Codepen") return <IconCodepen color={color}/>;
    if (name === "freeCodeCamp") return <IconFreeCodeCamp color={color}/>;
    if (name === "StackOverflow") return <IconStackOverflow color={color}/>;
}


export function getCorrespondingLogoCom(name: string) {
    if (name === "Github") return github;
    if (name === "Dev.to") return devto;
    if (name === "Frontend Mentor") return frontendMentor;
    if (name === "Codewars") return codewars;
    if (name === "Gitlab") return gitlab;
    if (name === "Hashnode") return hashnode;
    if (name === "Twitter") return twitter;
    if (name === "LinkedIn") return linkedin;
    if (name === "YouTube") return youtube;
    if (name === "Facebook") return facebook;
    if (name === "Twitch") return twitch;
    if (name === "Codepen") return codepen;
    if (name === "freeCodeCamp") return freeCodeCamp;
    if (name === "StackOverflow") return stackOverflow;
}

export function getBgColor(name: string) {
    if (name === "Github") return "bg-github text-white";
    if (name === "Frontend Mentor") return "bg-white text-black";
    if (name === "Twitter") return "bg-twitter text-white";
    if (name === "LinkedIn") return "bg-linkedin text-white";
    if (name === "YouTube") return "bg-youtube text-white";
    if (name === "Facebook") return "bg-facebook text-white";
    if (name === "Dev.to") return "bg-devto text-white";
    if (name === "Codewars") return "bg-codewars text-white";
    if (name === "freeCodeCamp") return "bg-freecodecamp";
    if (name === "Gitlab") return "bg-gitlab text-white";
    if (name === "Hashnode") return "bg-hashnode text-white";
    if (name === "StackOverflow") return "bg-stackoverflow text-white";
    if (name === "Twitch") return "bg-twitch text-white";
    if (name === "Codepen") return "bg-codepen text-white";
}

export function getRightProfileUrl(name: string) {
    if (name === "Github") return "https://www.github.com/";
    if (name === "Dev.to") return "https://www.dev.to/";
    if (name === "Frontend Mentor") return "https://www.frontendmentor.io/profile/";
    if (name === "Codewars") return "https://www.codewars.com/users/";
    if (name === "Gitlab") return "https://www.gitlab.com/";
    if (name === "Hashnode") return "https://www.hashnode.com/@";
    if (name === "Twitter") return "https://www.twitter.com/";
    if (name === "LinkedIn") return "https://www.linkedin.com/in/";
    if (name === "YouTube") return "https://www.youtube.com/";
    if (name === "Facebook") return "https://www.facebook.com/";
    if (name === "Twitch") return "https://www.twitch.tv/";
    if (name === "Codepen") return "https://www.codepen.io/";
    if (name === "freeCodeCamp") return "https://www.freecodecamp.org/news/author";
    if (name === "StackOverflow") return "https://www.stackoverflow.com/users/";
}
