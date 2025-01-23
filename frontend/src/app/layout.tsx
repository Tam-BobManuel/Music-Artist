
const APP_NAME="Artist by Tam";
const APP_DEFAULT_TITILE = "Artist";
const APP_TITLE_TEMPLATE = "%s - APP";
const APP_DESCRIPTION = "A website built by Tam"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorTracker from "./components/layout/CursorTracker";
import Logo from "@/../public/Images/logo.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artist",
  description: "Created by Tam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Artist</title></head>
      <meta property="og:image" content={Logo}></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <CursorTracker />
        {children}
      </body>
    </html>
  );
}
