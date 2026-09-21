import type { Metadata } from "next";
import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import Certifications from "@/components/about/Certifications";
import CoreEthos from "@/components/about/CoreEthos";
import Depots from "@/components/about/Depots";
import FleetBanner from "@/components/about/FleetBanner";
import FleetHardware from "@/components/about/FleetHardware";
import LocationSection from "@/components/about/LocationSection";
import PrecisionProtocols from "@/components/about/PrecisionProtocols";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyTrust from "@/components/about/WhyTrust";

export const metadata: Metadata = {
  title: "About Us | SafeRide 24H Recovery Bradford",
  description:
    "SafeRide 24h Recovery is an independent Bradford-based vehicle rescue team providing direct-dispatch recovery, breakdown assistance and vehicle transportation across West Yorkshire.",
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
      <Depots />
      <LocationSection />
      <AboutCta />
    </>
  );
}
