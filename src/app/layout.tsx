import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import openGraphImage from "@/assets/images/open-graph.webp";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_TITLE = "SafeRide 24H Recovery | Bradford Vehicle Recovery & Roadside Assistance";
const SITE_DESCRIPTION =
  "SafeRide 24h Recovery provides 24/7 vehicle recovery, breakdown assistance, vehicle transportation and roadside help across Bradford and West Yorkshire. Call +44 7466 354550.";

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
        alt: "SafeRide 24H Recovery - Vehicle Recovery & Roadside Assistance, Bradford",
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
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-sans text-bodyText antialiased selection:bg-primaryNeon selection:text-white">
        <Header />
        <main className="w-full pt-20">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
