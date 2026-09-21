"use client";

import { useState, type FormEvent } from "react";
import { SITE_PHONE_DISPLAY, SITE_PHONE_HREF } from "@/lib/site";

const INCIDENT_TYPES = [
  "Engine Breakdown / Non-Runner",
  "Accident / Collision Damage",
  "Flat Battery / Electrical Failure",
  "Puncture / Flat Tyre",
  "Pre-booked Logistics Transport",
] as const;

export default function DispatchTerminal() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputClasses =
    "h-12 w-full rounded-lg border border-secondaryNeon/30 bg-panel px-4 font-sans text-sm text-bodyText placeholder-mutedText outline-none transition-colors focus:border-primaryNeon";

  return (
    <section id="dispatch-terminal" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="rounded-3xl border border-primaryNeon/30 bg-secondaryBg p-8 shadow-2xl lg:p-14">
        <div className="mb-10 max-w-xl">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-primaryNeon">
            Rapid Intervention Module
          </span>
          <h2 className="mb-2 font-display text-3xl font-black uppercase tracking-tight text-bodyText sm:text-4xl">
            Initiate Rapid Response Dispatch.
          </h2>
          <p className="text-sm text-mutedText">
            Fill in your breakdown telemetry or dial the emergency desk directly. A controller
            will confirm your unit assignment right away.
          </p>
        </div>

        <form className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="terminalReg">
              UK Vehicle Registration
            </label>
            <div className="flex h-12 overflow-hidden rounded-lg border border-secondaryNeon/30 bg-panel focus-within:border-primaryNeon">
              <span className="flex w-10 items-center justify-center bg-primaryNeon font-mono text-[10px] font-bold text-white">
                GB
              </span>
              <input
                id="terminalReg"
                name="terminalReg"
                type="text"
                required
                placeholder="e.g. BD24 VXL"
                className="w-full bg-transparent px-3 font-display text-sm font-bold uppercase text-bodyText outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="terminalLocation">
              Current Breakdown Location
            </label>
            <div className="relative">
              <input
                id="terminalLocation"
                name="terminalLocation"
                type="text"
                required
                placeholder="Postcode, road, or landmark"
                className={inputClasses}
              />
              <span className="material-symbols-outlined absolute right-3 top-3 text-mutedText">my_location</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="terminalIncident">
              Incident Classification
            </label>
            <select id="terminalIncident" name="terminalIncident" className={inputClasses} defaultValue={INCIDENT_TYPES[0]}>
              {INCIDENT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="terminalPhone">
              Your Contact Number
            </label>
            <input
              id="terminalPhone"
              name="terminalPhone"
              type="tel"
              required
              placeholder="+44 7..."
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="terminalDestination">
              Destination / Drop-off Postcode
            </label>
            <input
              id="terminalDestination"
              name="terminalDestination"
              type="text"
              placeholder="Home, garage, or dealership"
              className={inputClasses}
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primaryNeon to-secondaryNeon font-mono text-xs font-bold uppercase tracking-widest text-white shadow-neon-magenta transition-all hover:brightness-110"
            >
              <span className="material-symbols-outlined text-lg">send</span>
              Transponder Callout
            </button>
          </div>
        </form>

        {submitted ? (
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-panel p-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primaryNeon/40 text-primaryNeon">
                <span className="material-symbols-outlined">satellite_alt</span>
              </div>
              <div>
                <p className="font-display text-base font-bold text-bodyText">Telemetry Dispatched to Patrol 04</p>
                <p className="text-sm text-mutedText">
                  A controller is verifying truck allocation now. Expect a call to confirm.
                </p>
              </div>
            </div>
            <a
              href={SITE_PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primaryNeon px-5 py-2.5 font-mono text-xs font-bold uppercase text-white"
            >
              Speed Up: Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
