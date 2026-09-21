"use client";

import { useState, type FormEvent } from "react";

const SERVICE_TYPES = [
  "Emergency Breakdown & Rapid Tow",
  "Accident Recovery & Safe Winching",
  "Scheduled Intercity Vehicle Haulage",
  "Auction Collection / Delivery",
  "Roadside Jump-Start / Battery Testing",
  "Tyre Replacement / Wheel Support",
  "Light Commercial Van Recovery",
] as const;

const CONDITIONS = [
  "Electric / Hybrid (EV)",
  "Locked / Stuck Wheels",
  "Lowered Suspension",
  "4x4 / AWD Powertrain",
  "No Key / Steering Locked",
  "Live Motorway Shoulder",
] as const;

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pickup, setPickup] = useState("");
  const [gpsStatus, setGpsStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    setPickup("");
    setGpsStatus(null);
  }

  function detectGPS() {
    setGpsStatus("Locating...");
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPickup(`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)} (GPS Locked)`);
          setGpsStatus("GPS Active");
        },
        () => {
          setPickup("BD1 (Bradford City Centre)");
          setGpsStatus("City Approx");
        },
        { timeout: 5000 },
      );
    } else {
      setPickup("BD1 (Bradford)");
      setGpsStatus("Manual Pin");
    }
  }

  const inputClasses =
    "w-full rounded bg-slate-100 px-4 py-3 font-sans text-base text-slate-900 placeholder-slate-500 shadow-inner outline-none transition-colors border border-slate-700/30 focus:border-blue-800 sm:text-sm";

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-xl lg:col-span-7 lg:p-8">
      <div className="flex items-center justify-between pb-1">
        <div>
          <span className="font-sans text-xs uppercase tracking-widest text-blue-800">
            RAPID BOOKING &amp; QUOTATION ENGINE
          </span>
          <h2 className="font-display text-xl font-bold text-slate-900">Vehicle Dispatch Details</h2>
        </div>
        <span className="hidden items-center gap-1 rounded-full bg-slate-100 px-3 py-1 font-sans text-xs text-slate-500 sm:flex">
          <span className="material-symbols-outlined text-sm text-blue-800">lock</span> Secure Intake
        </span>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="callerName">
              Full Name
            </label>
            <input className={inputClasses} id="callerName" name="callerName" placeholder="Driver / Fleet Manager" required type="text" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="callerPhone">
              Phone Number
            </label>
            <input className={inputClasses} id="callerPhone" name="callerPhone" placeholder="+44 7..." required type="tel" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="callerEmail">
            Email Address
          </label>
          <input className={inputClasses} id="callerEmail" name="callerEmail" placeholder="driver@example.co.uk" required type="email" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="pickupPostcode">
                Pickup Postcode
              </label>
              <button
                type="button"
                onClick={detectGPS}
                className="flex items-center gap-1 font-sans text-[10px] font-bold uppercase text-blue-800 hover:underline"
              >
                <span className="material-symbols-outlined text-sm">my_location</span> Detect GPS
              </button>
            </div>
            <div className="relative">
              <input
                className={`${inputClasses} uppercase`}
                id="pickupPostcode"
                name="pickupPostcode"
                placeholder="e.g. BD4 7PW"
                required
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
              {gpsStatus ? (
                <span className="absolute right-3 top-3 font-sans text-[10px] text-blue-800">{gpsStatus}</span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="dropoffPostcode">
              Destination Postcode
            </label>
            <input className={`${inputClasses} uppercase`} id="dropoffPostcode" name="dropoffPostcode" placeholder="e.g. Garage, Home, BCA Brighouse" required type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="flex flex-col gap-1.5 md:col-span-5">
            <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="vrm">
              UK Vehicle Reg Plate
            </label>
            <div className="flex h-[46px] overflow-hidden rounded border border-slate-700/30 focus-within:border-blue-800">
              <span className="flex w-10 items-center justify-center bg-blue-800 font-sans text-[10px] font-bold text-white">UK</span>
              <input
                id="vrm"
                name="vrm"
                maxLength={8}
                required
                placeholder="BD24 VXL"
                className="w-full bg-slate-100 px-3 font-display text-sm font-extrabold uppercase tracking-widest text-slate-900 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-7">
            <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="makeModel">
              Vehicle Make &amp; Model
            </label>
            <input className={inputClasses} id="makeModel" name="makeModel" placeholder="e.g. BMW 330e, Ford Transit Custom" required type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="recoveryType">
            Service Type Required
          </label>
          <select className={inputClasses} id="recoveryType" name="recoveryType" defaultValue={SERVICE_TYPES[0]}>
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs uppercase tracking-wider text-slate-500">Vehicle Condition Factors</span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {CONDITIONS.map((condition) => (
              <label
                key={condition}
                className="flex cursor-pointer items-center gap-2 rounded bg-slate-100 p-2.5 text-xs text-slate-900 transition-colors hover:bg-slate-100/70"
              >
                <input type="checkbox" name="condition" value={condition} className="accent-blue-800" />
                <span>{condition}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-slate-500" htmlFor="messageBody">
            Additional Situation or Access Details
          </label>
          <textarea
            className={`${inputClasses} resize-none`}
            id="messageBody"
            name="messageBody"
            placeholder="Provide breakdown context, narrow access, or specific marker post details..."
            rows={3}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-1 sm:flex-row">
          <span className="flex items-center gap-2 font-sans text-sm text-slate-500">
            <span className="material-symbols-outlined text-[16px] text-slate-700">lock</span>
            Strictly encrypted driver data telemetry
          </span>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded bg-blue-800 px-8 py-3.5 font-sans text-sm uppercase tracking-wider text-white shadow-md transition-all  sm:w-auto"
            type="submit"
          >
            <span>SEND MESSAGE</span>
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </div>

        {submitted ? (
          <div className="mt-1 flex items-center gap-2 rounded bg-slate-100 p-4 text-slate-700">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            <span className="text-sm">Telemetry transmission logged. SafeRide dispatch operative notified.</span>
          </div>
        ) : null}
      </form>
    </div>
  );
}
