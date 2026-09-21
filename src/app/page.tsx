import BrandStatement from "@/components/home/BrandStatement";
import CoverageMatrix from "@/components/home/CoverageMatrix";
import DispatchTerminal from "@/components/home/DispatchTerminal";
import FinalCta from "@/components/home/FinalCta";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
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
      <BrandStatement />
      <TransportBanner />
      <CoverageMatrix />
      <DispatchTerminal />
      <Gallery />
      <FinalCta />
    </>
  );
}
