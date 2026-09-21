import type { Metadata } from "next";
import ContactCoverage from "@/components/contact/ContactCoverage";
import ContactFinalCta from "@/components/contact/ContactFinalCta";
import ContactHero from "@/components/contact/ContactHero";
import DispatchInfoCard from "@/components/contact/DispatchInfoCard";
import EmergencyStrip from "@/components/contact/EmergencyStrip";
import IntakeForm from "@/components/contact/IntakeForm";
import ReassuranceTriad from "@/components/contact/ReassuranceTriad";

export const metadata: Metadata = {
  title: "Contact Us | SafeRide 24H Recovery Bradford",
  description:
    "Contact SafeRide 24h Recovery for vehicle recovery, breakdown assistance, transportation or roadside help in Bradford. Call +44 7466 354550, available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <EmergencyStrip />
      <section className="w-full bg-secondaryBg py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <DispatchInfoCard />
            <IntakeForm />
          </div>
        </div>
      </section>
      <ContactCoverage />
      <ReassuranceTriad />
      <ContactFinalCta />
    </>
  );
}
