"use client";

import { useState, type FormEvent } from "react";

const RECOVERY_TYPES = [
  { value: "247-car-recovery", label: "24/7 Car Recovery" },
  { value: "breakdown-recovery", label: "Breakdown Recovery" },
  { value: "vehicle-transportation", label: "Vehicle Transportation" },
  { value: "roadside-assistance", label: "Roadside Assistance" },
  { value: "other", label: "Other" },
];

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputClasses =
    "w-full rounded bg-secondaryBg px-4 py-3 font-sans text-base text-bodyText placeholder-mutedText shadow-inner outline-none transition-colors border border-secondaryNeon/30 focus:border-primaryNeon sm:text-sm";

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-panel p-6 shadow-xl lg:col-span-7 lg:p-8">
      <div className="flex items-center justify-between pb-1">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primaryNeon">
            NON-CRITICAL TRANSMISSION
          </span>
          <h2 className="font-display text-xl font-bold text-bodyText">Digital Incident Intake</h2>
        </div>
        <span className="font-mono text-xs text-mutedText">SEC // INTAKE_04</span>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="callerName">
              Your Name
            </label>
            <input
              className={inputClasses}
              id="callerName"
              name="callerName"
              placeholder="Driver / Fleet Manager"
              required
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="callerPhone">
              Phone Number
            </label>
            <input
              className={inputClasses}
              id="callerPhone"
              name="callerPhone"
              placeholder="+44 7..."
              required
              type="tel"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="callerEmail">
              Email Address
            </label>
            <input
              className={inputClasses}
              id="callerEmail"
              name="callerEmail"
              placeholder="driver@example.co.uk"
              required
              type="email"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="recoveryType">
              What Do You Need Help With?
            </label>
            <select className={inputClasses} id="recoveryType" name="recoveryType" defaultValue={RECOVERY_TYPES[0].value}>
              {RECOVERY_TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs uppercase tracking-wider text-mutedText" htmlFor="messageBody">
            Your Message / Incident Location
          </label>
          <textarea
            className={`${inputClasses} resize-none`}
            id="messageBody"
            name="messageBody"
            placeholder="Provide breakdown context, vehicle make/model, or specific marker post details..."
            required
            rows={4}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
          <span className="flex items-center gap-2 font-sans text-sm text-mutedText">
            <span className="material-symbols-outlined text-[16px] text-secondaryNeon">lock</span>
            Strictly encrypted driver data telemetry
          </span>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-primaryNeon px-8 py-3.5 font-mono text-sm uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110 sm:w-auto"
            type="submit"
          >
            <span>SEND MESSAGE</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>

        {submitted ? (
          <div className="mt-1 flex items-center gap-2 rounded bg-secondaryBg p-4 text-secondaryNeon">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span className="text-sm">Telemetry transmission logged. SafeRide dispatch operative notified.</span>
          </div>
        ) : null}
      </form>
    </div>
  );
}
