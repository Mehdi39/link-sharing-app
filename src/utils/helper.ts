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


export function getCorrespondingLogo(name: string) {
    if (name === "Github") return IconGithub;
    if (name === "Dev.to") return IconDevto;
    if (name === "Frontend Mentor") return IconFrontendMentor;
    if (name === "Codewars") return IconCodewars;
    if (name === "Gitlab") return IconGitlab;
    if (name === "Hashnode") return IconHashnode;
    if (name === "Twitter") return IconTwitter;
    if (name === "LinkedIn") return IconLinkedin;
    if (name === "YouTube") return IconYoutube;
    if (name === "Facebook") return IconFacebook;
    if (name === "Twitch") return IconTwitch;
    if (name === "Codepen") return IconCodepen;
    if (name === "freeCodeCamp") return IconFreeCodeCamp;
    if (name === "StackOverflow") return IconStackOverflow;
}

export function getCorrespondingLogoCom(name: string, size?: string) {
    if (name === "Github") return IconGithub;
    if (name === "Dev.to") return IconDevto;
    if (name === "Frontend Mentor") return IconFrontendMentor;
    if (name === "Codewars") return IconCodewars;
    if (name === "Gitlab") return IconGitlab;
    if (name === "Hashnode") return IconHashnode;
    if (name === "Twitter") return IconTwitter;
    if (name === "LinkedIn") return IconLinkedin;
    if (name === "YouTube") return IconYoutube;
    if (name === "Facebook") return IconFacebook;
    if (name === "Twitch") return IconTwitch;
    if (name === "Codepen") return IconCodepen;
    if (name === "freeCodeCamp") return IconFreeCodeCamp;
    if (name === "StackOverflow") return IconStackOverflow;
}

export function getBgColor(name: string) {
    if (name === "Github") return "bg-github text-white";
    if (name === "Frontend Mentor")
        return "bg-white border border-solid border-[#d9d9d9] text-[#333]";
    if (name === "Twitter") return "bg-twitter text-white";
    if (name === "LinkedIn") return "bg-linkedin text-white";
    if (name === "YouTube") return "bg-youtube text-white";
    if (name === "Facebook") return "bg-facebook text-white";
    if (name === "Dev.to") return "bg-devto text-white";
    if (name === "Codewars") return "bg-codewars text-white";
    if (name === "freeCodeCamp") return "bg-freecodecamp text-white";
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
