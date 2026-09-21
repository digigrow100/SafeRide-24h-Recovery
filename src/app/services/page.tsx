import type { Metadata } from "next";
import HowItWorks from "@/components/services/HowItWorks";
import ServiceDetails from "@/components/services/ServiceDetails";
import ServicesCta from "@/components/services/ServicesCta";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServicesStatStrip from "@/components/services/ServicesStatStrip";

export const metadata: Metadata = {
  title: "Services | SafeRide 24h Recovery Bradford",
  description:
    "24/7 car recovery, breakdown recovery, vehicle transportation and roadside assistance across Bradford and West Yorkshire. Call +44 7466 354550 for immediate dispatch.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesStatStrip />
      <ServicesIntro />
      <ServiceDetails />
      <HowItWorks />
      <ServicesCta />
    </>
  );
}
