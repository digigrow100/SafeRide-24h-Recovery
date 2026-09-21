import BrandStatement from "@/components/home/BrandStatement";
import FinalCta from "@/components/home/FinalCta";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Protocol from "@/components/home/Protocol";
import ServiceSpectrum from "@/components/home/ServiceSpectrum";
import SpecStrip from "@/components/home/SpecStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecStrip />
      <ServiceSpectrum />
      <BrandStatement />
      <Protocol />
      <Gallery />
      <FinalCta />
    </>
  );
}
