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

const title = "Reyse — AI Live Chat for Property Businesses";
const description =
  "Reyse gives property businesses an AI live chat that answers inquiries instantly, day or night.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reyse.co.uk"),
  title: {
    default: title,
    template: "%s — Reyse",
  },
  description,
  openGraph: {
    title,
    description,
    url: "https://reyse.co.uk",
    siteName: "Reyse",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#0b0c0e",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reyse",
  url: "https://reyse.co.uk",
  logo: "https://reyse.co.uk/icon.png",
  description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${boldonse.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
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
