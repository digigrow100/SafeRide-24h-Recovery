const FAQS = [
  {
    icon: "timer",
    question: "How quickly can a recovery unit reach me?",
    answer:
      "Our average urban dispatch response time is between 20 to 35 minutes, subject to live traffic conditions. For motorway incidents, our dedicated highway patrol trucks operate with rapid priority deployment.",
  },
  {
    icon: "ev_station",
    question: "Can you tow lowered sports cars or electric vehicles (EVs)?",
    answer:
      "Yes. Our fleet incorporates ultra-low approach hydraulic tilt-and-slide beds designed specifically to protect low front splitters and carbon bodywork. For EVs and AWD vehicles unable to engage neutral gear, we utilise specialised free-rolling skates so the transmission is never spun while moving.",
  },
  {
    icon: "airline_seat_recline_normal",
    question: "Can passengers ride inside the recovery truck?",
    answer:
      "Yes, our recovery truck cabs comfortably accommodate up to 2 passengers alongside the driver to accompany your vehicle to the chosen drop-off location or garage. For a larger travelling party, notify our controller so we can organise auxiliary escort transport.",
  },
  {
    icon: "contactless",
    question: "What payment methods do you accept at the roadside?",
    answer:
      "Every recovery vehicle is equipped with an encrypted roadside card terminal. We accept all major UK debit and credit cards, Apple Pay, Google Pay, direct bank transfer, and cash. Fully itemised receipts are issued digitally upon payment.",
  },
] as const;

export default function ContactFaq() {
  return (
    <section className="w-full bg-slate-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="mb-1 block font-sans text-xs font-bold uppercase tracking-widest text-blue-800">
            Incident FAQs
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
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
