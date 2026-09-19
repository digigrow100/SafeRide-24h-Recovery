import Image from "next/image";

const FRAMES = [
  {
    span: "md:col-span-7",
    height: "h-[420px]",
    hoverBorder: "hover:border-primaryNeon",
    frame: "FRAME 01 // M62 VERGE",
    frameColor: "text-primaryNeon",
    title: "Rain-Slicked Urban Extraction",
    time: "02:40 AM",
    alt: "Recovery truck at night on a wet UK road",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VP9Vsc8dLog3XjlBD68nRO_Hj1MnMeYm6EFrB-9FyN3veesAp-4cNu7tCObvRV9lSeJkX2J6M4_VeJnA3MNwK9XtM1Z9QTeFhD8vwktPb7uraf4DAd5Lt70bjDK6eJsPlt_H067H4UNIHEgtfv9fgNpJnPajbbqwtOUOBI53GO_YtjP4tnGmxc5tVCbpsYkTC8w_84_Bz4cIwHMNbbYcCuhXQxKPwI_U_IH0YB8K-ho4HSUApYWGUMQD8",
  },
  {
    span: "md:col-span-5",
    height: "h-[420px]",
    hoverBorder: "hover:border-secondaryNeon",
    frame: "FRAME 02 // ENGINE BAY",
    frameColor: "text-secondaryNeon",
    title: "Suburban Diagnostic Scan",
    time: "03:15 AM",
    alt: "Breakdown engineer working under the bonnet at night",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UtZT8j61zwj1JyUQgwgKj7zzeIFLSb3Gxrti2tCEv6lfwnHOzkIb17tFeJ6-fY5NDGBDJz9DLmQn12mVJ6JgsUh8m5T6KYwT_AZvvdA44vMX0rQupLaL_FihP6om66h-vrLyve-m6qPQOsTOCRp0CmbOIbsBxreeLiNjfsNWEGVRKOIi9RzE7B_ExSJRMmePeAZbTCfQfsxzekmt7c-TosZqVnr9OwVPkhWlbdgTMkXwbNgb1JUEAKqQ",
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-accentCyan",
    frame: "FRAME 03 // MOTORWAY RELAY",
    frameColor: "text-accentCyan",
    title: "Long-Distance Transit",
    time: undefined,
    alt: "Car transporter driving on the motorway",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTNg_u6lmHUceqpIPKZiXdHDwttrSv1VnJGQcu_bFV8Vo4I_mL2TiW2TYgRvTAZZHuW2iUezu84TrvTF00SSM2UeGhsXK4DBhEMrr9sVeDUutY_6WCfgtUTl4im88knLKH27DI4CV4Khv3lKZA0lfue9X86eQKj8vS9SfSCu0Ts8wWtDz4VhmEpeCdmNlDA1uTMT6ZM_YVvEhk0o56u18qBS_7B-0xnGuX3AfM427_AJLuU1Wcwuzd",
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-primaryNeon",
    frame: "FRAME 04 // HARDWARE",
    frameColor: "text-primaryNeon",
    title: "High-Tension Steel Couplers",
    time: undefined,
    alt: "Close-up of a heavy-duty steel recovery winch hook",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XR4ZkjTfOMjF7PzrXj--Uj4XksdLQJDnSxMKcLWpfUik2auPLKmsHRTC5gNBBJ9-kyTxxYxkHgyl02AOwCNXtWtRVAMd3RqvrkV4XjccMNi2OMyi6b0k2dBzVC0JbAQRhq3CUT28T0xRKGdWGxkTFVrTCyknUMaP7PJobyM1YlJudfezx7xcAHHRJ83AWB9ZP4-X6Cptruv2SyU1kqN8PZ10-691SdjkUQyp14RZE-nLETKGUGZGLpCw",
  },
  {
    span: "md:col-span-4",
    height: "h-72",
    hoverBorder: "hover:border-secondaryNeon",
    frame: "FRAME 05 // LOW ANGLE DECK",
    frameColor: "text-secondaryNeon",
    title: "Zero-Splitter Loading",
    time: undefined,
    alt: "Car being tilt-slide loaded onto a flatbed",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UgAcwBjl9Sy7eQvMRaqmdThCOGD6yxoeSGXt8ygCK7GtYk9hqgv9lI06tvuEbDCh2xiuTwyC1dmrWN10cxMmX9G0lLN2gfKwxrWH1X6nPkRpv4cd1XcXoUAKMEcJ6wWGgGPBQ0E45SKZpCXZ-6LYtZQa9U10jBcv--moeYed78CyXnUwQU5bCxAVtGmeboqub0uJzhAFkWip6TVJjQrXO4mSaJ9zwN3hevn-_oRatakia3l3AQQp-cKzU",
  },
] as const;

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="gallery">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-primaryNeon">
            // 03 CAMPAIGN SPREAD
          </span>
          <h2 className="font-display text-4xl font-black uppercase text-bodyText sm:text-5xl">
            NOCTURNAL DOCUMENTARY
          </h2>
        </div>
        <p className="max-w-md text-sm text-mutedText">
          Unfiltered captures of SafeRide fleet units navigating rainfall, motorway interchanges,
          and night breakdowns across Bradford and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        {FRAMES.map((item) => (
          <div
            key={item.frame}
            className={`group relative overflow-hidden rounded-2xl border border-subtleBorder transition-all ${item.span} ${item.height} ${item.hoverBorder}`}
          >
            <Image
              alt={item.alt}
              src={item.image}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${item.frameColor}`}>
                  {item.frame}
                </span>
                <h4 className="font-display text-lg font-bold text-bodyText">{item.title}</h4>
              </div>
              {item.time ? <span className="font-mono text-xs text-mutedText">{item.time}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
