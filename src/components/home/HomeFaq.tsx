const FAQS = [
  {
    icon: "schedule",
    question: "Do you provide 24/7 car recovery in Bradford?",
    answer:
      "Yes. SafeRide provides 24/7 car recovery in Bradford and nearby areas. Call us with your location and vehicle details to check availability.",
  },
  {
    icon: "checklist",
    question: "What information should I provide when calling?",
    answer:
      "Tell us your exact location, vehicle make and model, the problem you are experiencing and where you would like the vehicle taken.",
  },
  {
    icon: "car_repair",
    question: "Can you recover a vehicle that will not start?",
    answer:
      "Yes. We provide breakdown recovery for vehicles that cannot be driven. Explain the problem when you call so we can arrange suitable assistance.",
  },
  {
    icon: "home_pin",
    question: "Where can you take my vehicle?",
    answer:
      "We can transport your vehicle to your home, a garage, a dealership or another agreed destination.",
  },
  {
    icon: "local_shipping",
    question: "Do you provide long-distance vehicle transportation?",
    answer:
      "Yes. Local and long-distance vehicle transportation can be arranged. Provide the collection and delivery postcodes to request a quote.",
  },
  {
    icon: "map",
    question: "Do you cover areas outside Bradford?",
    answer:
      "Yes. We serve Bradford and surrounding areas across West Yorkshire. Longer-distance transport may also be available.",
  },
  {
    icon: "payments",
    question: "How much does vehicle recovery cost?",
    answer:
      "The price depends on your location, vehicle type, distance and the service required. Call us with the details to receive a quote.",
  },
  {
    icon: "directions_car",
    question: "Can you transport a vehicle bought from another location?",
    answer:
      "Yes. We can collect and deliver vehicles purchased from private sellers, garages, dealerships and other locations.",
  },
] as const;

export default function HomeFaq() {
  return (
    <section className="w-full bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="mb-1 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">Car Recovery Questions</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.question} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-800">{faq.icon}</span>
                <h3 className="font-display text-base font-bold text-slate-900">{faq.question}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
