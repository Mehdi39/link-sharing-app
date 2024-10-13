"use client"
import {useEffect, useState} from "react";
import {useUserContext} from "@/context/UserContext";
import PhoneMockup from "@/components/PhoneMockup";
import LinksHome from "@/components/LinksHome";
import CustomLink from "@/elements/CustomLink";
import SocialButton from "@/elements/SocialButton";

export default function Home() {
    const [links, setLinks] = useState([])
    const {isAuthenticated} = useUserContext();

    useEffect(() => {
        fetch("/api/links")
            .then((res) => res.json())
            .then((data) => setLinks(data))
            .catch((err) => console.error(err));
    }, [isAuthenticated]);

    return (
        <div>
            <main className="">
                <section className="flex justify-between gap-10 px-6 pb-6">
                    <div className="justify-center items-start w-full bg-pure_white lg:flex hidden py-[101px]">
                        <PhoneMockup/>
                    </div>
                    <div className="w-full max-w-[808px] bg-pure_white">
                        <LinksHome/>
                    </div>
                </section>
            </main>
        </div>
    );
}
