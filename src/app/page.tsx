"use client";

import React, {useEffect} from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ArrowDownCircleIcon } from "@heroicons/react/24/solid";

// ---- Data (keep these up-to-date) ---------------------------------------
const LINKS = [
  { label: "Portfolio", href: "http://nicholaslopez.work/#projects" },
  { label: "Queens Tech Bros", href: "https://queenstechbros.com" },
  { label: "Jose's Motorcycle Repairs", href: "https://josemoto.netlify.app" },
  { label: "Jellyfin (Media)", href: "https://nicosmediajelly.duckdns.org" },
  { label: "Drone Tracker (Rust)", href: "https://lopez4163.github.io/drone_tracker/" },

  
];

const STACK_TOOLS = [
  { name: "React", logoType: "svg", logoSrc: "../logos/react.svg" },
  { name: "Vite", logoType: "svg", logoSrc: "/logos/vite.svg" },
  { name: "Tailwind", logoType: "gradient" },
  { name: "Docker", logoType: "img", logoSrc: "/logos/docker.svg" },
  { name: "Ubuntu", logoType: "img", logoSrc: "/logos/ubuntu.svg" },
  { name: "NGINX", logoType: "img", logoSrc: "/logos/nginx.svg" },
  { name: "WireGuard", logoType: "img", logoSrc: "/logos/wireguard.svg" },
  { name: "DuckDNS", logoType: "img", logoSrc: "/logos/duckdns.svg" },
  { name: "Jellyfin", logoType: "img", logoSrc: "/logos/jellyfin.svg" },
  { name: "GitHub", logoType: "img", logoSrc: "/logos/github.svg" },
  { name: "Cloudflare", logoType: "img", logoSrc: "/logos/cloudflare.svg" },
];


const SERVICE_CARDS: Array<{
  title: string;
  description: string;
  subTitle: string;
  siteUrl: string;
  bgImage?: string;
}> = [
  {
    title: "My Portfolio",
    description: "Explore projects, skills, and experiments.",
    subTitle: "Portfolio",
    siteUrl: "http://nicholaslopez.work/#projects",
    bgImage: "/image/port-pic.png",
  },
  {
    title: "Queens Tech Bros",
    description: "IT solutions: networking, cameras, and support.",
    subTitle: "IT Solutions",
    siteUrl: "https://queenstechbros.com",
    bgImage: "/image/qtb-pic.png",
  },
  {
    title: "Jose's Motorcycle Repairs",
    description: "Custom builds & maintenance for NYC riders.",
    subTitle: "Motorcycle Repairs",
    siteUrl: "https://josemoto.netlify.app",
    bgImage: "/image/jm-pic.png",
  },
  {
    title: "Jellyfin",
    description: "Self‑hosted streaming for TV, movies, and music.",
    subTitle: "Media Server",
    siteUrl: "https://nicosmediajelly.duckdns.org",
    bgImage: "/image/jelly-pic.png",
  },
  {
    title: "Drone Tracker",
    description: "Track drones in real-time with this Rust web app.",
    subTitle: "Rust App",
    siteUrl: "https://lopez4163.github.io/drone_tracker/",
    bgImage: "/image/drone-pic.png",
  }
];

// ---- UI ------------------------------------------------------------------
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("container mx-auto px-6", className)}>{children}</div>;
}

function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
      {children}
    </span>
  );
}

function SolidButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-gray-900 bg-white hover:bg-white/90 active:bg-white/80 transition"
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition"
    >
      {children}
    </a>
  );
}

function CardLink({ item }: { item: (typeof SERVICE_CARDS)[number] }) {
  return (
    <a
      href={item.siteUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_20px_rgba(168,85,247,0.25)] h-[420px] flex items-center justify-center"
    >
      {/* Background image (z-0 so it sits above the black bg, below overlay/content) */}
      {item.bgImage && (
        <img
          src={item.bgImage}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-80 group-hover:opacity-95 transitions"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}

      {/* Overlay (z-10) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

      {/* Content (z-20) */}
      <div className="relative z-20 text-center px-6">
        <div className="mb-2 flex justify-center">
          <Badge>{item.subTitle}</Badge>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
        <p className="mt-3 text-sm text-white/85 max-w-xl mx-auto font-medium">{item.description}</p>
        <div className="mt-8">
          <OutlineButton href={item.siteUrl}>Visit</OutlineButton>
        </div>
      </div>
    </a>
  );
}

function SimpleNavbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#links", label: "Quick Links" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full border-b border-transparent transition-colors",
      scrolled ? "bg-gray-900/90 border-white/10 backdrop-blur" : "bg-transparent"
    )}>
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="text-white font-bold tracking-tight">Nico's HomeLab</a>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-white/85 hover:text-white transition">
              {i.label}
            </a>
          ))}
        </nav>
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </Container>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-gray-900/95">
          <Container className="py-3 space-y-3">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="block text-white/90 hover:text-white" onClick={() => setOpen(false)}>
                {i.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}

// Lightweight metrics panel — expects /api/metrics to return JSON like:
// {
//   cpu: 23.5,            // percent
//   memory: { used: 6.2, total: 16 }, // GB
//   disk:   { used: 120, total: 500 }, // GB
//   uptime:  "3 days 04:12:51"
// }
// You can point this to Netdata, Uptime Kuma, or your own Express endpoint.
function MetricsPanel() {
  type Metrics = {
    cpu: number;
    memory: { used: number; total: number };
    disk: { used: number; total: number };
    uptime: string;
  };

  const [data, setData] = React.useState<Metrics | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;

    async function fetchWithTimeout(resource: string, options: RequestInit = {}) {
      const { signal, ...rest } = options;
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 4000);
      try {
        const res = await fetch(resource, { ...rest, signal: controller.signal });
        clearTimeout(id);
        return res;
      } catch (e) {
        clearTimeout(id);
        throw e;
      }
    }

    async function load() {
      setError(null);
      try {
        const res = await fetchWithTimeout("/api/metrics");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as Metrics;
        if (mounted) setData(json);
      } catch (e: any) {
        if (mounted) setError(e?.message || "Failed to load metrics");
      }
    }

    load();
    const id = setInterval(load, 10000); // refresh every 10s
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  const Card = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-1 text-2xl font-bold tracking-tight">{value}</p>
      {sub && <p className="text-xs text-white/60 mt-1">{sub}</p>}
    </div>
  );

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">System Metrics</h3>
        <span className="text-xs text-white/60">updates every 10s</span>
      </div>

      {!data && !error && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
          <div className="h-20 rounded-2xl bg-white/5" />
          <div className="h-20 rounded-2xl bg-white/5" />
          <div className="h-20 rounded-2xl bg-white/5" />
          <div className="h-20 rounded-2xl bg-white/5" />
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-rose-200">
          <p className="text-sm font-semibold">Metrics API not connected</p>
          <p className="text-xs opacity-80 mt-1">Expose an endpoint at <code>/api/metrics</code> returning cpu/memory/disk/uptime JSON. I can show an Express + Node snippet if you want.</p>
        </div>
      )}

      {data && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card label="CPU" value={`${data.cpu.toFixed(0)}%`} />
          <Card label="Memory" value={`${data.memory.used.toFixed(1)} / ${data.memory.total.toFixed(0)} GB`} />
          <Card label="Disk" value={`${data.disk.used.toFixed(0)} / ${data.disk.total.toFixed(0)} GB`} />
          <Card label="Uptime" value={data.uptime} />
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/80">© {new Date().getFullYear()} Nico's HomeLab</p>
        <div className="flex gap-4 text-white/80 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#links" className="hover:text-white">Links</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </Container>
    </footer>
  );
}

// ---- Page ---------------------------------------------------------------
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white scroll-smooth relative">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        {/* radial glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(closest-side,_rgba(147,51,234,.25),_transparent_70%)]" />
        {/* soft gradient bands */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-fuchsia-500/10 via-sky-400/10 to-transparent" />
        {/* corner blob */}
        <div className="absolute -right-32 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <SimpleNavbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen w-full">
        {/* hero background image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/image/event.jpeg" alt="Homelab background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-[1px]" />
        </div>

        <Container className="relative z-10 flex min-h-screen items-center justify-center text-center">
          <div className="max-w-3xl">
            <div className="mb-4 flex justify-center"><Badge>Welcome to my network</Badge></div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              YOU'VE ENTERED NICO'S HOMELAB
            </h1>
            <p className="mt-4 text-white/85">
              Explore the internal services running on my self-hosted infrastructure. Tools, dashboards, and experiments — available with the right credentials.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <SolidButton href="#services">See Services</SolidButton>
              {/* <a href="#services" className="inline-flex items-center gap-2 text-white/85 hover:text-white">
                <ArrowDownCircleIcon className="h-7 w-7" />
                Scroll
              </a> */}
            </div>

            {/* quick stat chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">Self-hosted</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">DuckDNS</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">Reverse Proxy</span>
            </div>
          </div>
        </Container>

        {/* subtle divider */}
        <div className="mx-auto mt-10 h-px w-11/12 max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* SERVICES */}
     {/* POWERED BY (logos banner) */}
     {/* <section id="powered-by" className="py-10">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-white/80">Powered by</p>
            <div className="flex flex-wrap items-center justify-center gap-6">

              {STACK_TOOLS.map((tool) => (
                <span key={tool.name} className="inline-flex items-center gap-2">
                  {tool.logoType === "gradient" && (
                    <span className="h-3 w-6 rounded bg-gradient-to-r from-sky-400 to-cyan-300 " />
                  )}
                  {tool.logoType === "img" && (
                    <img src={tool.logoSrc} alt={tool.name} className="h-5 w-5" />
                  )}
                  {tool.logoType === "svg" && (
                    <img src={tool.logoSrc} alt={tool.name} className="h-5 w-5" />
                  )}
                  <span className="text-white/90 font-semibold">{tool.name}</span>
                </span>
              ))}

            </div>
          </div>
        </div>
      </Container>
    </section> */}
    <section id="about" className="py-20 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About this HomeLab</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Nico’s HomeLab is a self-hosted environment built on a Lenovo ThinkCentre running
              <span className="text-fuchsia-400 font-semibold"> Ubuntu Server</span>. It’s powered by
              <span className="text-sky-400 font-semibold"> Docker</span> containers and secured
              behind an <span className="text-emerald-400 font-semibold">NGINX</span> reverse proxy.
              Dynamic DNS is handled through <span className="text-yellow-300 font-semibold">DuckDNS</span>,
              making the entire setup accessible remotely with HTTPS encryption.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Operating System</p>
                <p className="mt-1 text-lg font-semibold">Ubuntu Server</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Web Server</p>
                <p className="mt-1 text-lg font-semibold">NGINX Reverse Proxy</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">Containerization</p>
                <p className="mt-1 text-lg font-semibold">Docker Engine</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-white/60">DNS / SSL</p>
                <p className="mt-1 text-lg font-semibold">DuckDNS + Let’s Encrypt</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Ubuntu</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Docker</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">NGINX</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">DuckDNS</span>
            </div>
          </div>

      {/* Right Image Section */}
      {/* <div className="flex justify-center">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg inline-block">
        <Image
          src="/image/thinkcentre.jpg"
          alt="Lenovo ThinkCentre HomeLab Server"
          width={600}
          height={500}
          className="rounded-2xl object-contain"
          priority
        />
      </div>
    </div> */}
        </div>
      </Container>
    </section>


      {/* METRICS */}
      <section id="metrics" className="py-10">
        <Container>
          <MetricsPanel />
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <p className="mt-2 text-white/70">Gateways to public projects and self‑hosted tools.</p>
          </div>

          {/* gradient framed grid */}
          <div className="relative mt-10">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-sky-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICE_CARDS.map((c, i) => (
                  <CardLink key={i} item={c} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* QUICK LINKS */}
      <section id="links" className="py-16 border-t border-white/10">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <p className="mt-2 text-white/70">Fast access to common destinations.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LINKS.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 p-4 text-center bg-white/[0.02] hover:bg-white/[0.05] transition"
              >
                <span className="block text-base font-semibold tracking-tight">{l.label}</span>
                <span className="mt-1 block text-xs text-white/60 group-hover:text-white/80">Open in new tab</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <Container>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-2xl font-bold">Contact</h3>
            <p className="mt-2 text-white/85">
              Need access or have a request? Email
              {" "}
              <a className="underline" href="mailto:nlopez6499@gmail.com">nlopez6499@gmail.com</a>
              {" "}or text{" "}
              <a className="underline" href="sms:+17185292288">(718) 760-2412</a>.
            </p>
          </div>
        </Container>
      </section>

      <Footer />

      {/* Badge (optional) */}
      {/* <a href="https://www.material-tailwind.com" target="_blank" className="fixed bottom-4 right-4">
        <span className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-gray-900 bg-white border border-white/50 shadow">
          <Image src="https://www.material-tailwind.com/favicon.png" alt="Material Tailwind" width={20} height={20} />
          Built with Tailwind
        </span>
      </a> */}
    </main>
  );
}
