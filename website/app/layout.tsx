import type { Metadata } from "next";
import { Boldonse, Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
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
        <Header />

        {children}

        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Reyse. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
