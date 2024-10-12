"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getUserProfile } from "@/utils/api"; // We'll update this to call your Next.js API route

export type UserProps = {
    firstName: string;
    lastName: string;
    photo: string;
};

type UserState = {
    firstName: string;
    lastName: string;
    photo: string;
    updateFirstName: (newFirstName: string) => void;
    updateLastName: (newLastName: string) => void;
    updatePhoto: (newPhoto: string) => void;
};

const UsersContext = createContext<UserState | null>(null);

export function UsersProvider({ children }: { children: ReactNode }) {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [photo, setPhoto] = useState<string>("");

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const { data } = await getUserProfile(); // API call using Next.js route
                const { firstName, lastName, photo } = data?.user || {};
                setFirstName(firstName || "");
                setLastName(lastName || "");
                setPhoto(photo || "");
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
            }
        }

        fetchUserProfile();
    }, []);

    function updateFirstName(newFirstName: string) {
        setFirstName(newFirstName);
    }

    function updateLastName(newLastName: string) {
        setLastName(newLastName);
    }

    function updatePhoto(newPhoto: string) {
        setPhoto(newPhoto);
    }

    return (
        <UsersContext.Provider
            value={{
                firstName,
                lastName,
                photo,
                updateFirstName,
                updateLastName,
                updatePhoto,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UsersProvider");
    }
    return context;
}
