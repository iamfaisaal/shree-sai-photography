import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/header";
import ContactSection from "@/components/footer";
import StickyCurser from "@/components/sticky-curser";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shree-sai-photography.vercel.app"),
  openGraph: {
    title: "Shree Sai Photography",
    description:
      "Capturing moments, creating memories. Experience the art of photography with our professional and passionate team.",
    url: "https://shree-sai-photography.vercel.app",
    siteName: "Shree Sai Photography",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        // secureUrl:
        //   "https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Preview image for Sai Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "Shree Sai Photography",
    title: "Shree Sai Photography",
    description:
      "Capturing moments, creating memories. Experience the art of photography with our professional and passionate team.",
    creator: "Shree Sai Photography",
    images: {
      url: "/twitter-image.png",
      alt: "Preview image for Sai Photography",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyCurser />
        <Navigation />
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
