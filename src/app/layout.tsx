"use client"
// import type { Metadata } from "next";
import "./globals.css"
import { usePathname} from "next/navigation";
import { UsersProvider } from "@/context/UserContext";
import Navbar from "@/components/Navbar";


// export const metadata: Metadata = {
//   title: "link-sharing app",
//   description: "share your link",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const showNavbar = !['/login', '/signup'].includes(pathname)
  return (
    <html lang="en">
      <body
        className={` antialiased bg-frost_white`}
      >
      <UsersProvider>
          {showNavbar && <Navbar/>}
          {children}
      </UsersProvider>
      </body>
    </html>
  );
}
