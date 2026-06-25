import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBolt,
  faCalendarDays,
  faCheck,
  faDesktop,
  faEnvelope,
  faGlobe,
  faHeadset,
  faLocationDot,
  faMemory,
  faMicrochip,
  faPhone,
  faShieldHalved,
  faScrewdriverWrench,
  faArrowRight,
  faMapLocationDot,
  faLaptop,
  faCircleCheck,
  faKeyboard,
  faHardDrive,
  faWifi,
  faStore,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

type Service = {
  title: string;
  text: string;
  icon: IconDefinition;
};

type Benefit = {
  title: string;
  text: string;
  icon: IconDefinition;
};

type ContactItem = {
  text: string;
  icon: IconDefinition;
};

type ComputerItem = {
  title: string;
  text: string;
  icon: IconDefinition;
};

type AboutPoint = {
  title: string;
  text: string;
  icon: IconDefinition;
};

const services: Service[] = [
  {
    title: "Reparation",
    text: "Vi felsöker och reparerar datorer, laptops och vanliga hårdvaruproblem.",
    icon: faScrewdriverWrench,
  },
  {
    title: "Virus & säkerhet",
    text: "Ta bort virus, skydda din dator och få den att fungera tryggt igen.",
    icon: faShieldHalved,
  },
  {
    title: "Uppgraderingar",
    text: "Mer fart? Vi hjälper med minne, lagring och andra uppgraderingar.",
    icon: faMemory,
  },
  {
    title: "Datorer & gaming",
    text: "Skräddarsydda datorer för gaming, arbete och kreativa behov.",
    icon: faDesktop,
  },
  {
    title: "Rådgivning & support",
    text: "Behöver du hjälp eller råd? Vi finns här både på plats och distans.",
    icon: faHeadset,
  },
];

const benefits: Benefit[] = [
  {
    title: "Snabb hjälp",
    text: "Service i butik",
    icon: faBolt,
  },
  {
    title: "Tryggt & säkert",
    text: "PC, Mac och laptops",
    icon: faShieldHalved,
  },
  {
    title: "Personlig service",
    text: "Lokalt och nära",
    icon: faCircleCheck,
  },
  {
    title: "Lokalt i Piteå",
    text: "Sundsgatan 31",
    icon: faLocationDot,
  },
];

const contactItems: ContactItem[] = [
  {
    text: "070-327 29 36",
    icon: faPhone,
  },
  {
    text: "Sundsgatan 31, 941 32 Piteå",
    icon: faLocationDot,
  },
  {
    text: "datamoddy.se",
    icon: faGlobe,
  },
];

const brands = ["ASUS", "acer", "MSI", "HP", "Lenovo", "SAMSUNG", "intel"];

const computerItems: ComputerItem[] = [
  {
    title: "Skräddarsydda datorer",
    text: "Få hjälp att välja eller bygga en dator som passar gaming, arbete, studier eller kreativa projekt.",
    icon: faDesktop,
  },
  {
    title: "Komponenter",
    text: "Vi hjälper dig med rätt delar som processor, grafikkort, minne, lagring och nätaggregat.",
    icon: faMicrochip,
  },
  {
    title: "Tillbehör",
    text: "Tangentbord, möss, skärmar, kablar, nätverk och andra tillbehör för hem och kontor.",
    icon: faKeyboard,
  },
  {
    title: "Uppgradering",
    text: "Ge din nuvarande dator nytt liv med SSD, mer RAM, bättre kylning eller nyare komponenter.",
    icon: faHardDrive,
  },
];

const aboutPoints: AboutPoint[] = [
  {
    title: "Lokal butik i Piteå",
    text: "Personlig hjälp på plats, utan krångliga supportköer eller anonyma webbsidor.",
    icon: faStore,
  },
  {
    title: "Hjälp för både privatpersoner och företag",
    text: "Oavsett om det gäller hemmadatorn, jobbdatorn eller kontorets utrustning hjälper vi dig vidare.",
    icon: faUsers,
  },
  {
    title: "Service, support och rådgivning",
    text: "Vi felsöker, reparerar, uppgraderar och guidar dig till rätt lösning.",
    icon: faScrewdriverWrench,
  },
  {
    title: "Enklare teknikvardag",
    text: "Målet är att din dator, ditt nätverk och dina tillbehör ska fungera smidigt i vardagen.",
    icon: faWifi,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl border border-lime-400/60 bg-lime-400/10 text-2xl font-black text-lime-400 shadow-[0_0_28px_rgba(132,204,22,0.18)]">
              D
            </div>

            <div className="leading-tight text-white">
              <p className="text-lg font-black tracking-tight sm:text-xl">
                DATORBUTIKEN
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
                i Piteå
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-white/75 lg:flex">
            <a className="text-lime-400" href="#">
              Hem
            </a>
            <a className="transition hover:text-white" href="#services">
              Tjänster
            </a>
            <a className="transition hover:text-white" href="#computers">
              Datorer & tillbehör
            </a>
            <a className="transition hover:text-white" href="#about">
              Om oss
            </a>
            <a className="transition hover:text-white" href="#contact">
              Kontakt
            </a>
          </nav>

          <a
            href="tel:0703272936"
            className="hidden items-center gap-2 rounded-2xl border border-lime-400/60 px-5 py-3 text-sm font-black text-lime-400 transition hover:bg-lime-400 hover:text-slate-950 sm:inline-flex"
          >
            <FontAwesomeIcon icon={faPhone} />
            070-327 29 36
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(132,204,22,0.14),transparent_32%),radial-gradient(circle_at_8%_20%,rgba(14,165,233,0.13),transparent_26%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-wide text-white/75">
              <FontAwesomeIcon icon={faLocationDot} className="text-lime-400" />
              Lokal datorbutik i hjärtat av Piteå
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Datorservice & reparation{" "}
              <span className="text-lime-400">i Piteå</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Vi hjälper dig med reparationer, support, uppgraderingar och nya
              datorer — snabbt, tryggt och personligt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0703272936"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-black text-slate-950 shadow-[0_18px_45px_rgba(132,204,22,0.24)] transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                <FontAwesomeIcon icon={faPhone} />
                Ring oss 070-327 29 36
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Hitta hit
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-start gap-x-7 gap-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex min-w-[135px] items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-lime-400/10 text-sm text-lime-400">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </span>

                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-sm font-black leading-5">
                      {benefit.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[330px] lg:min-h-[360px]">
            <div className="absolute right-0 top-0 hidden h-80 w-64 rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-2xl lg:block">
              <div className="h-full rounded-[1.5rem] border border-blue-400/20 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.5),transparent_25%),#020617]" />
            </div>

            <div className="absolute bottom-0 left-0 w-full rounded-[2rem] border border-white/15 bg-slate-950/80 p-4 shadow-2xl backdrop-blur sm:w-[88%] lg:bottom-8">
              <div className="grid aspect-[16/10] place-items-center rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">
                <div className="text-center">
                  <div className="mx-auto mb-4 grid size-20 place-items-center rounded-3xl border border-lime-400/50 bg-lime-400/10 text-5xl font-black text-lime-400">
                    D
                  </div>
                  <p className="text-2xl font-black tracking-tight">
                    DATORBUTIKEN
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.32em] text-white/60">
                    i Piteå
                  </p>
                </div>
              </div>

              <div className="mx-auto h-4 w-2/3 rounded-b-2xl bg-slate-800" />
            </div>

            <div className="absolute right-3 top-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="text-5xl text-blue-400"
              />
            </div>

            <div className="absolute bottom-10 right-2 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-5 text-lime-400 shadow-2xl backdrop-blur">
              <FontAwesomeIcon icon={faLaptop} className="text-5xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wide text-lime-600">
            Våra tjänster
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Det vi hjälper dig med
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-lime-400/10 text-2xl text-lime-600 transition group-hover:bg-lime-400 group-hover:text-slate-950">
                  <FontAwesomeIcon icon={service.icon} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.text}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600"
                >
                  Läs mer
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="computers"
        className="relative overflow-hidden bg-[#07111f] px-5 py-16 text-white lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-lime-400">
              Datorer & tillbehör
            </p>

            <h2 className="mt-2 max-w-xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Rätt dator, rätt delar och rätt hjälp från början.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Behöver du en ny dator, bättre prestanda eller hjälp att välja rätt
              komponenter? Vi hjälper dig hitta en lösning som passar dina behov,
              din budget och hur du faktiskt använder datorn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0703272936"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-400 px-7 py-4 font-black text-slate-950 shadow-[0_18px_45px_rgba(132,204,22,0.22)] transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                <FontAwesomeIcon icon={faPhone} />
                Ring och fråga
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Se kontaktinfo
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {computerItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="mb-5 grid size-14 place-items-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-2xl text-lime-400 transition group-hover:bg-lime-400 group-hover:text-slate-950">
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3 className="text-lg font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-lime-700">
              <FontAwesomeIcon icon={faLocationDot} />
              Sundsgatan 31, Piteå
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              En lokal datorbutik med personlig service.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Datorbutiken i Piteå hjälper kunder med datorservice, reparationer,
              uppgraderingar, komponenter och rådgivning. Här får du hjälp av någon
              som faktiskt lyssnar på problemet och försöker hitta en lösning som
              passar dig.
            </p>

            <div className="mt-7 rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-lime-400/10 text-lime-400">
                  <FontAwesomeIcon icon={faClock} />
                </span>

                <div>
                  <p className="text-sm font-black uppercase tracking-wide">
                    Öppettider
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Mån, tis, tors, fre · 10:00 - 18:00
                  </p>
                  <p className="mt-1 text-sm font-bold text-lime-400">
                    Onsdagar stängt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-lime-400/10 text-2xl text-lime-600">
                  <FontAwesomeIcon icon={point.icon} />
                </div>

                <h3 className="text-lg font-black text-slate-950">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.text}
                </p>
              </article>
            ))}

            <article className="rounded-3xl border border-slate-900 bg-slate-950 p-6 text-white shadow-xl sm:col-span-2">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    Osäker på vad du behöver?
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    Ring butiken eller kom in med datorn, så får du hjälp att förstå
                    vad problemet är och vilken lösning som passar bäst.
                  </p>
                </div>

                <a
                  href="tel:0703272936"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  070-327 29 36
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_0.7fr_1.2fr]">
          <article className="rounded-3xl bg-[#07111f] p-6 text-white shadow-xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-white/10 text-lime-400">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <h3 className="font-black uppercase tracking-wide">
                Öppettider
              </h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-300">Måndag</span>
                <span className="font-black">10:00 - 18:00</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-300">Tisdag</span>
                <span className="font-black">10:00 - 18:00</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-300">Onsdag</span>
                <span className="font-black text-lime-400">Stängt</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-slate-300">Torsdag</span>
                <span className="font-black">10:00 - 18:00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-300">Fredag</span>
                <span className="font-black">10:00 - 18:00</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-lime-400/20 bg-lime-400/10 px-4 py-3 text-sm font-black text-lime-400">
              <FontAwesomeIcon icon={faCheck} />
              Välkommen in!
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-black uppercase tracking-wide text-slate-950">
              Kontakt & info
            </h3>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-lime-400/10 text-lime-600">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-black uppercase tracking-wide text-slate-950">
              Hitta hit
            </h3>

            <div className="relative mt-5 h-52 overflow-hidden rounded-3xl bg-slate-100">
              <iframe
                title="Karta till Datorbutiken i Piteå"
                src="https://www.google.com/maps?q=Sundsgatan%2031%2C%20941%2032%20Pite%C3%A5&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute left-5 top-5 rounded-2xl bg-[#07111f] p-4 text-white shadow-xl">
                <div className="flex items-center gap-2 text-sm font-black">
                  <FontAwesomeIcon icon={faMapLocationDot} className="text-lime-400" />
                  Datorbutiken i Piteå
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Sundsgatan 31
                  <br />
                  941 32 Piteå
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-lg font-black text-slate-400">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}

            <span className="text-sm font-bold text-slate-500">
              Vi arbetar med ledande varumärken
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}