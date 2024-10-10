import type { Metadata } from "next";
import "./globals.css";

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
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
