"use client"
import "./globals.css"
import {usePathname} from "next/navigation";
import {UsersProvider} from "@/context/UserContext";
import Navbar from "@/components/Navbar";
import {LinksProvider} from "@/context/LinkContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const pathname = usePathname(); // Get the current path
    const showNavbar = !['/login', '/sign-up', '/preview'].includes(pathname) // Conditionally show Navbar
  return (
    <html lang="en">
      <body
        className={`antialiased bg-frost_white`}
      >
      {/* Wrapping the app with UsersProvider and LinksProvider */}
      <UsersProvider>
          <LinksProvider>
              {showNavbar && <Navbar/>}
              {children}
          </LinksProvider>
      </UsersProvider>
      </body>
    </html>
  );
}
