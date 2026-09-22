const ITEMS = [
  {
    icon: "schedule",
    title: "Available 24 Hours",
    description:
      "Vehicle problems do not follow normal working hours. You can contact us during the day, at night, on weekends and during public holidays.",
  },
  {
    icon: "location_on",
    title: "Local Area Coverage",
    description:
      "We serve our local area and nearby towns. Our local knowledge helps us understand major roads, residential areas and common travel routes.",
  },
  {
    icon: "verified_user",
    title: "Careful Vehicle Handling",
    description:
      "Your vehicle is handled carefully during loading, transport and unloading. We take suitable precautions to help protect the vehicle throughout the journey.",
  },
  {
    icon: "forum",
    title: "Clear Communication",
    description:
      "Tell us where you are, what happened and where the vehicle needs to go. We will explain the service clearly before arranging assistance.",
  },
  {
    icon: "route",
    title: "Local and Long-Distance Transport",
    description:
      "We can help with short local journeys and planned vehicle transportation to destinations further away.",
  },
  {
    icon: "groups",
    title: "Help for Different Customers",
    description:
      "Our services are available to private drivers, vehicle owners, garages, dealerships and businesses that need dependable vehicle transportation.",
  },
] as const;

export default function TechGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mb-12 max-w-2xl space-y-3">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
          Why SafeRide?
        </span>
        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl">
          Professional Help When Your Vehicle Stops
        </h2>
        <p className="text-sm text-slate-500">
          Our aim is to make vehicle recovery simple and less stressful. From your first call to
          the final delivery, we keep you informed and handle your vehicle with care.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-100 p-6 transition-colors hover:border-blue-800"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue-800/30 bg-white text-blue-800">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
