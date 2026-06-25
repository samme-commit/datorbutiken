"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faBars,
  faBolt,
  faCalendarDays,
  faCheck,
  faCircleCheck,
  faClock,
  faDesktop,
  faGlobe,
  faHardDrive,
  faHeadset,
  faKeyboard,
  faLaptop,
  faLocationDot,
  faMapLocationDot,
  faMemory,
  faMicrochip,
  faPhone,
  faShieldHalved,
  faScrewdriverWrench,
  faStore,
  faUsers,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type NavItem = {
  label: string;
  href: string;
};

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

type ContactItem = {
  text: string;
  icon: IconDefinition;
};

type OpeningHour = {
  day: string;
  time: string;
  closed?: boolean;
};

const navItems: NavItem[] = [
  { label: "Hem", href: "#" },
  { label: "Tjänster", href: "#services" },
  { label: "Datorer", href: "#computers" },
  { label: "Om oss", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

const services: Service[] = [
  {
    title: "Reparation",
    text: "Felsökning och reparation av datorer, laptops och vanliga hårdvaruproblem.",
    icon: faScrewdriverWrench,
  },
  {
    title: "Virus & säkerhet",
    text: "Hjälp med virus, säkerhet och datorer som inte längre känns trygga att använda.",
    icon: faShieldHalved,
  },
  {
    title: "Uppgraderingar",
    text: "Mer fart med SSD, mer minne, bättre lagring eller andra smarta uppgraderingar.",
    icon: faMemory,
  },
  {
    title: "Datorer & gaming",
    text: "Skräddarsydda datorer för gaming, arbete, studier och kreativa behov.",
    icon: faDesktop,
  },
  {
    title: "Rådgivning & support",
    text: "Personlig hjälp i butik när du behöver råd, felsökning eller rätt lösning.",
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
    title: "Trygg service",
    text: "PC, Mac & laptop",
    icon: faShieldHalved,
  },
  {
    title: "Personlig hjälp",
    text: "Lokalt och nära",
    icon: faCircleCheck,
  },
  {
    title: "Mitt i Piteå",
    text: "Sundsgatan 31",
    icon: faLocationDot,
  },
];

const computerItems: ComputerItem[] = [
  {
    title: "Skräddarsydda datorer",
    text: "Få hjälp att välja eller bygga en dator som passar gaming, arbete, studier eller kreativa projekt.",
    icon: faDesktop,
  },
  {
    title: "Komponenter",
    text: "Rätt delar för din dator: processor, grafikkort, minne, lagring, kylning och nätaggregat.",
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
    title: "För hem och företag",
    text: "Hjälp för privatpersoner, hemmakontor och företag som behöver fungerande datorer.",
    icon: faUsers,
  },
  {
    title: "Service sedan länge",
    text: "Reparation, support, rådgivning och uppgraderingar för både stationära och bärbara datorer.",
    icon: faScrewdriverWrench,
  },
  {
    title: "Smidigare teknikvardag",
    text: "Målet är att datorn, nätverket och tillbehören ska fungera enkelt i vardagen.",
    icon: faWifi,
  },
];

const contactItems: ContactItem[] = [
  {
    text: "070-327 29 36",
    icon: faPhone,
  },
  {
    text: "Sundsgatan 31, Piteå",
    icon: faLocationDot,
  },
  {
    text: "datamoddy.se",
    icon: faGlobe,
  },
];

const openingHours: OpeningHour[] = [
  { day: "Måndag", time: "10:00 - 18:00" },
  { day: "Tisdag", time: "10:00 - 18:00" },
  { day: "Onsdag", time: "Stängt", closed: true },
  { day: "Torsdag", time: "10:00 - 18:00" },
  { day: "Fredag", time: "10:00 - 18:00" },
];

const brands = ["ASUS", "acer", "MSI", "HP", "Lenovo", "SAMSUNG", "intel"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8 lg:py-4">
          <a href="#" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-2xl border border-lime-400/60 bg-lime-400/10 text-xl font-black text-lime-400 shadow-[0_0_28px_rgba(132,204,22,0.18)] sm:size-12 sm:text-2xl">
              D
            </div>

            <div className="min-w-0 leading-tight text-white">
              <p className="truncate text-base font-black tracking-tight sm:text-xl">
                DATORBUTIKEN
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 sm:text-xs">
                i Piteå
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-white/75 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.href === "#" ? "text-lime-400" : "transition hover:text-white"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0703272936"
              className="hidden items-center gap-2 rounded-2xl border border-lime-400/60 px-5 py-3 text-sm font-black text-lime-400 transition hover:bg-lime-400 hover:text-slate-950 sm:inline-flex"
            >
              <FontAwesomeIcon icon={faPhone} />
              070-327 29 36
            </a>

            <a
              href="tel:0703272936"
              aria-label="Ring Datorbutiken"
              className="grid size-11 place-items-center rounded-2xl border border-lime-400/50 bg-lime-400/10 text-lime-400 sm:hidden"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
              className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-white lg:hidden"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f] px-4 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-black text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[#07111f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(132,204,22,0.14),transparent_32%),radial-gradient(circle_at_8%_20%,rgba(14,165,233,0.13),transparent_26%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-1/2 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px] sm:block" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div className="min-w-0">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-white/75 sm:text-xs">
              <FontAwesomeIcon icon={faLocationDot} className="shrink-0 text-lime-400" />
              <span className="truncate">Lokal datorbutik i hjärtat av Piteå</span>
            </div>

            <h1 className="max-w-3xl text-[2.55rem] font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Datorservice & reparation{" "}
              <span className="text-lime-400">i Piteå</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Vi hjälper dig med reparationer, support, uppgraderingar och nya
              datorer — snabbt, tryggt och personligt.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="tel:0703272936"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_45px_rgba(132,204,22,0.24)] transition hover:-translate-y-0.5 hover:bg-lime-300 sm:text-base"
              >
                <FontAwesomeIcon icon={faPhone} />
                Ring oss
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:text-base"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Hitta hit
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:flex sm:min-w-[135px] sm:items-start sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0"
                >
                  <span className="mb-3 grid size-9 shrink-0 place-items-center rounded-xl bg-lime-400/10 text-sm text-lime-400 sm:mb-0">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-black leading-5">{benefit.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-[2rem] border border-white/15 bg-slate-950/80 p-3 shadow-2xl backdrop-blur sm:p-4 lg:ml-auto lg:w-[88%]">
              <div className="grid aspect-[16/10] place-items-center rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">
                <div className="text-center">
                  <div className="mx-auto mb-4 grid size-16 place-items-center rounded-3xl border border-lime-400/50 bg-lime-400/10 text-4xl font-black text-lime-400 sm:size-20 sm:text-5xl">
                    D
                  </div>

                  <p className="text-xl font-black tracking-tight sm:text-2xl">
                    DATORBUTIKEN
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.28em] text-white/60 sm:text-sm sm:tracking-[0.32em]">
                    i Piteå
                  </p>
                </div>
              </div>

              <div className="mx-auto h-4 w-2/3 rounded-b-2xl bg-slate-800" />
            </div>

            <div className="absolute right-2 top-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur sm:right-3 sm:top-8 sm:p-5">
              <FontAwesomeIcon
                icon={faMicrochip}
                className="text-3xl text-blue-400 sm:text-5xl"
              />
            </div>

            <div className="absolute bottom-8 left-2 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-4 text-lime-400 shadow-2xl backdrop-blur sm:bottom-10 sm:p-5 lg:left-auto lg:right-2">
              <FontAwesomeIcon icon={faLaptop} className="text-3xl sm:text-5xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-12 sm:px-5 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wide text-lime-600">
            Våra tjänster
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Det vi hjälper dig med
            </h2>

            <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Från felsökning till uppgraderingar och nya datorer — tydlig hjälp
              för både privatpersoner och företag.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="computers"
        className="relative overflow-hidden bg-[#07111f] px-4 py-14 text-white sm:px-5 lg:px-8 lg:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,204,22,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-lime-400">
              Datorer & tillbehör
            </p>

            <h2 className="mt-2 max-w-xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Rätt dator, rätt delar och rätt hjälp från början.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Behöver du en ny dator, bättre prestanda eller hjälp att välja
              komponenter? Vi hjälper dig hitta en lösning som passar dina
              behov, din budget och hur du faktiskt använder datorn.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="tel:0703272936"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_18px_45px_rgba(132,204,22,0.22)] transition hover:-translate-y-0.5 hover:bg-lime-300 sm:text-base"
              >
                <FontAwesomeIcon icon={faPhone} />
                Ring och fråga
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:text-base"
              >
                <FontAwesomeIcon icon={faArrowRight} />
                Se kontaktinfo
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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

      <section id="about" className="px-4 py-14 sm:px-5 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-lime-700 sm:text-xs">
              <FontAwesomeIcon icon={faLocationDot} />
              Sundsgatan 31, Piteå
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              En lokal datorbutik med personlig service.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Datorbutiken i Piteå hjälper kunder med datorservice,
              reparationer, uppgraderingar, komponenter och rådgivning. Här får
              du hjälp av någon som lyssnar på problemet och försöker hitta en
              lösning som passar dig.
            </p>

            <div className="mt-7 rounded-3xl bg-slate-950 p-5 text-white">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-lime-400/10 text-lime-400">
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

          <div className="grid gap-4 sm:grid-cols-2">
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
                    Ring butiken eller kom in med datorn, så får du hjälp att
                    förstå vad problemet är och vilken lösning som passar bäst.
                  </p>
                </div>

                <a
                  href="tel:0703272936"
                  className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  070-327 29 36
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-14 sm:px-5 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.85fr_0.7fr_1.2fr]">
          <article className="rounded-3xl bg-[#07111f] p-5 text-white shadow-xl sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-white/10 text-lime-400">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <h3 className="font-black uppercase tracking-wide">Öppettider</h3>
            </div>

            <div className="space-y-4 text-sm">
              {openingHours.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between gap-4 ${
                    index !== openingHours.length - 1
                      ? "border-b border-white/10 pb-4"
                      : ""
                  }`}
                >
                  <span className="text-slate-300">{item.day}</span>
                  <span
                    className={`font-black ${
                      item.closed ? "text-lime-400" : "text-white"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-lime-400/20 bg-lime-400/10 px-4 py-3 text-sm font-black text-lime-400">
              <FontAwesomeIcon icon={faCheck} />
              Välkommen in!
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-black uppercase tracking-wide text-slate-950">
              Kontakt & info
            </h3>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-lime-400/10 text-lime-600">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className="min-w-0 text-sm font-semibold text-slate-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="tel:0703272936"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <FontAwesomeIcon icon={faPhone} />
              Ring butiken
            </a>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="font-black uppercase tracking-wide text-slate-950">
              Hitta hit
            </h3>

            <div className="relative mt-5 h-72 overflow-hidden rounded-3xl bg-slate-100 lg:h-full lg:min-h-72">
              <iframe
                title="Karta till Datorbutiken i Piteå"
                src="https://www.google.com/maps?q=Sundsgatan%2031%2C%20Pite%C3%A5&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute left-4 top-4 hidden rounded-2xl bg-[#07111f] p-4 text-white shadow-xl sm:block">
                <div className="flex items-center gap-2 text-sm font-black">
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-lime-400"
                  />
                  Datorbutiken i Piteå
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Sundsgatan 31
                  <br />
                  Piteå
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sundsgatan%2031%2C%20Pite%C3%A5"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100"
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
              Öppna i Google Maps
            </a>
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-5 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-base font-black text-slate-400 sm:gap-x-12 sm:text-lg">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}

            <span className="basis-full text-center text-sm font-bold text-slate-500 sm:basis-auto">
              Vi arbetar med ledande varumärken
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}