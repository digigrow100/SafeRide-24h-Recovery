import type { Metadata } from "next";
import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import Certifications from "@/components/about/Certifications";
import CoreEthos from "@/components/about/CoreEthos";
import FleetBanner from "@/components/about/FleetBanner";
import FleetHardware from "@/components/about/FleetHardware";
import LocationSection from "@/components/about/LocationSection";
import PrecisionProtocols from "@/components/about/PrecisionProtocols";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyTrust from "@/components/about/WhyTrust";

export const metadata: Metadata = {
  title: "About Us | SafeRide 24H Recovery",
  description:
    "SafeRide 24h Recovery is an independent vehicle rescue team providing direct-dispatch recovery, breakdown assistance and vehicle transportation across your local area.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CoreEthos />
      <WhatWeDo />
      <FleetHardware />
      <PrecisionProtocols />
      <FleetBanner />
      <Certifications />
      <WhyTrust />
      <LocationSection />
      <AboutCta />
    </>
  );
}
