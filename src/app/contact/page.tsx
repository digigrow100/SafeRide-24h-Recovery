import type { Metadata } from "next";
import ContactCoverage from "@/components/contact/ContactCoverage";
import ContactFaq from "@/components/contact/ContactFaq";
import ContactFinalCta from "@/components/contact/ContactFinalCta";
import ContactHero from "@/components/contact/ContactHero";
import DispatchInfoCard from "@/components/contact/DispatchInfoCard";
import EmergencyStrip from "@/components/contact/EmergencyStrip";
import ReassuranceTriad from "@/components/contact/ReassuranceTriad";

export const metadata: Metadata = {
  title: "Contact Us | SafeRide 24H Recovery",
  description:
    "Contact SafeRide 24h Recovery for vehicle recovery, breakdown assistance, transportation or roadside help. Call +44 7466 354550, available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <EmergencyStrip />
      <section className="w-full bg-slate-100 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <DispatchInfoCard />
        </div>
      </section>
      <ContactCoverage />
      <ReassuranceTriad />
      <ContactFaq />
      <ContactFinalCta />
    </>
  );
}
