import type { Metadata } from "next";
import { Boldonse, Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollProgressBar from "./components/ScrollProgressBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const boldonse = Boldonse({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reyse — AI Live Chat for Property Businesses",
  description:
    "Reyse gives property businesses an AI live chat that answers inquiries instantly, day or night.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${boldonse.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollProgressBar />
        <Header />

        {children}

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
