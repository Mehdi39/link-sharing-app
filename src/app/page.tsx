"use client"
import {useEffect, useState} from "react";
import {useUserContext} from "@/context/UserContext";
import PhoneMockup from "@/components/PhoneMockup";
import LinksHome from "@/components/LinksHome";

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
                <section className="flex justify-between gap-10">
                    <div className="justify-center items-center w-full bg-pure_white lg:flex hidden">
                        <PhoneMockup key="PhoneMockup"/>
                    </div>
                    <div className="w-full bg-pure_white">
                        <LinksHome/>
                    </div>
                    <div>
                        {links.map((link) => (<h1 key={link?.id}>{link?.name}</h1>))}
                    </div>
                </section>
            </main>
        </div>
    );
}
