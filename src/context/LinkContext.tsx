"use client"; // Ensure this is a client component
import React, { createContext, useContext, useEffect, useState } from "react";

// LinkProps Type Definition
export type LinkProps = {
    id: number;
    name: string;
    link: string;
};

// Context State Type Definition
type LinksState = {
    links: LinkProps[];
    addLink: (name: string, link: string) => Promise<void>;
    updateLink: (id: number, updatedFields: Partial<LinkProps>) => Promise<void>;
    deleteLink: (id: number) => Promise<void>;
    setLinks: React.Dispatch<React.SetStateAction<LinkProps[]>>;
};

const LinksContext = createContext<LinksState | null>(null);

function LinksProvider({ children }: { children: React.ReactNode }) {
    const [links, setLinks] = useState<LinkProps[]>([]);

    // Fetch links from the Next.js API route
    const fetchLinks = async () => {
        try {
            const res = await fetch('/api/links'); // Calls your API route
            if (!res.ok) throw new Error('Failed to fetch links');
            const data = await res.json();
            setLinks(data);
        } catch (error) {
            console.error("Error fetching links:", error);
        }
    };

    // Add a new link by calling the POST API
    const addLink = async (name: string, link: string) => {
        try {
            const res = await fetch('/api/links', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, link }),
            });
            if (!res.ok) throw new Error('Failed to add link');
            const newLink = await res.json();
            setLinks((prevLinks) => [...prevLinks, newLink]);
        } catch (error) {
            console.error("Error adding link:", error);
        }
    };

    // Update a link by calling a PATCH/PUT API
    const updateLink = async (id: number, updatedFields: Partial<LinkProps>) => {
        try {
            const res = await fetch(`/api/links/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            if (!res.ok) throw new Error('Failed to update link');
            const updatedLink = await res.json();
            setLinks((prevLinks) =>
                prevLinks.map((link) => (link.id === id ? updatedLink : link))
            );
        } catch (error) {
            console.error("Error updating link:", error);
        }
    };

    // Delete a link by calling the DELETE API
    const deleteLink = async (id: number) => {
        try {
            const res = await fetch(`/api/links/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Failed to delete link');
            setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
        } catch (error) {
            console.error("Error deleting link:", error);
        }
    };

    useEffect(() => {
        fetchLinks(); // Fetch the links on mount
    }, []);

    return (
        <LinksContext.Provider
            value={{ links, addLink, updateLink, deleteLink, setLinks }}
        >
            {children}
        </LinksContext.Provider>
    );
}

// Custom hook to access the Links context
function useLinks() {
    const context = useContext(LinksContext);
    if (!context) {
        throw new Error("useLinks must be used within a LinksProvider");
    }
    return context;
}

export { LinksProvider, useLinks };
