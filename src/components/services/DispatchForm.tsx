"use client";

import { useState, type FormEvent } from "react";

const INCIDENT_TYPES = [
  "Mechanical Breakdown (Tow to Garage/Home)",
  "Motorway Breakdown (M606 / M62 Emergency)",
  "Road Traffic Accident Recovery",
  "Flat Battery / No-Start Diagnostics",
  "Puncture / Damaged Wheel Replacement",
  "Intercity Logistics / Auction Vehicle Transport",
] as const;

export default function DispatchForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputClasses =
    "h-12 w-full rounded-lg border border-secondaryNeon/30 bg-secondaryBg px-3.5 font-sans text-sm text-bodyText placeholder-mutedText outline-none transition-colors focus:border-primaryNeon";

  return (
    <section id="dispatch-request" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="rounded-3xl border border-secondaryNeon/15 bg-panel p-8 shadow-lg lg:p-14">
        <div className="mb-4">
          <span className="mb-2 inline-block rounded-full bg-primaryNeon px-3 py-1 font-mono text-[10px] font-bold uppercase text-white">
            Rapid Intake Console
          </span>
          <h2 className="font-display text-2xl font-bold uppercase text-bodyText sm:text-3xl">
            Initiate Roadside Dispatch
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-mutedText">
            Submit your breakdown coordinates or registration for immediate routing. For urgent
            motorway breakdowns with safety risks, call our 24/7 hotline directly.
          </p>
        </div>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesReg">
                UK Registration Plate
              </label>
              <div className="flex h-12 overflow-hidden rounded-lg border border-secondaryNeon/30">
                <span className="flex w-10 items-center justify-center bg-primaryNeon font-mono text-[10px] font-bold text-white">
                  GB
                </span>
                <input
                  id="servicesReg"
                  name="servicesReg"
                  type="text"
                  required
                  placeholder="e.g. BD24 RYD"
                  className="w-full bg-[#FACC15] px-3 font-display text-base font-extrabold uppercase tracking-wider text-black placeholder-black/40 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesIncident">
                Incident Classification
              </label>
              <select id="servicesIncident" name="servicesIncident" required className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select Incident Type...
                </option>
                {INCIDENT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesLocation">
              Incident Location / Coordinates
            </label>
            <div className="relative">
              <input
                id="servicesLocation"
                name="servicesLocation"
                type="text"
                required
                placeholder="Street name, postcode, or what3words"
                className={`${inputClasses} pl-10`}
              />
              <span className="material-symbols-outlined absolute left-3 top-3 text-mutedText">location_on</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesDropoff">
                Delivery Destination (Optional)
              </label>
              <input
                id="servicesDropoff"
                name="servicesDropoff"
                type="text"
                placeholder="Preferred garage, dealership or home postcode"
                className={inputClasses}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesPhone">
                Driver Contact Telephone
              </label>
              <input
                id="servicesPhone"
                name="servicesPhone"
                type="tel"
                required
                placeholder="+44 7XXX XXXXXX"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs font-bold uppercase text-mutedText" htmlFor="servicesNotes">
              Vehicle Condition &amp; Access Notes
            </label>
            <textarea
              id="servicesNotes"
              name="servicesNotes"
              rows={3}
              placeholder="e.g. Electric vehicle in Park, underground multi-storey, lowered suspension, steering locked..."
              className={`${inputClasses} h-auto resize-none py-3`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primaryNeon to-secondaryNeon px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-neon-magenta transition-all hover:brightness-110"
          >
            <span className="material-symbols-outlined">send</span>
            Submit for Rapid Dispatch Confirmation
          </button>

          {submitted ? (
            <div className="mt-2 flex items-start gap-3 rounded-xl bg-secondaryBg p-4 text-secondaryNeon">
              <span className="material-symbols-outlined text-xl">check_circle</span>
              <p className="text-sm">
                Incident logged to Bradford Operations Desk. A controller is reviewing telemetry
                and will call with an exact unit ETA.
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
