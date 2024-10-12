import type { Metadata } from "next";
import "./globals.css"
import { UsersProvider } from "@/context/UserContext";


export const metadata: Metadata = {
  title: "link-sharing app",
  description: "share your link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-frost_white`}
      >
      <UsersProvider>
          {children}
      </UsersProvider>
      </body>
    </html>
  );
}
