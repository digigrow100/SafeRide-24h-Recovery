import FinalCta from "@/components/home/FinalCta";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import HomeFaq from "@/components/home/HomeFaq";
import Protocol from "@/components/home/Protocol";
import ServiceSpectrum from "@/components/home/ServiceSpectrum";
import SpecStrip from "@/components/home/SpecStrip";
import TechGrid from "@/components/home/TechGrid";
import TransportBanner from "@/components/home/TransportBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecStrip />
      <ServiceSpectrum />
      <TechGrid />
      <Protocol />
      <TransportBanner />
      <Gallery />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
