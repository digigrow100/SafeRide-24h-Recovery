import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import openGraphImage from "@/assets/images/open-graph.webp";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const SITE_TITLE = "24/7 Car Recovery | SafeRide 24H Recovery";
const SITE_DESCRIPTION =
  "Need car recovery? SafeRide provides 24/7 car recovery, breakdown recovery, roadside assistance and vehicle transportation in your local area. Call now.";

export const metadata: Metadata = {
  // TODO: replace with the live production domain before deploying.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: "/site-icon.webp", type: "image/webp" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: openGraphImage.src,
        width: openGraphImage.width,
        height: openGraphImage.height,
        alt: "SafeRide 24H Recovery - Vehicle Recovery & Roadside Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [openGraphImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased selection:bg-blue-800 selection:text-white">
        <Header />
        <main className="w-full pt-[68px] lg:pt-20">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
