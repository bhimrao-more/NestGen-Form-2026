import Image from "next/image";
import { event } from "@/config/event";
import { Navbar } from "@/components/Navbar";
import { AccordionList } from "@/components/AccordionList";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { RequestInviteForm } from "@/components/RequestInviteForm";

// --- Hero ---
function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Top meta info + headline */}
      <div className="relative z-10 px-4 pt-24 pb-8 text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.05em] text-primary-400 md:text-base">
          <span>{event.date}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <span>{event.location}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <span>{event.time}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <span>{event.inviteOnly}</span>
        </div>

        <h1 className="display-xl text-gradient mx-auto leading-[1.05]">
          {event.hero.headline}
        </h1>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="glass rounded-full px-6 py-3">
            <span className="text-sm tracking-wide text-primary-100/90 md:text-base">
              {event.hero.subheadline}
            </span>
          </div>
          <a
            href="#request-invite"
            className="rounded-full border border-primary-100/20 bg-primary-100 px-6 py-3 text-sm font-semibold text-primary-950 transition-opacity hover:opacity-90"
          >
            {event.hero.cta.primary.label}
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-auto flex flex-1 items-end justify-center">
        <Image
          src="/assets/hero-bg.webp"
          alt="Drone dock operations facility"
          width={1920}
          height={1080}
          className="mx-auto h-auto w-full max-w-[1400px] object-contain"
          priority
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-950 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary-950 to-transparent" />
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48 bg-gradient-to-t from-primary-950 to-transparent" />

      {/* Description box with dot pattern */}
      <div className="relative z-20 -mt-8 pt-16 pb-0">
        <div
          className="dot-pattern pointer-events-none absolute inset-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-4 pb-24 md:px-0">
          <div className="glass-strong rounded-xl p-6 md:p-8">
            <p className="text-base leading-loose text-primary-100/80 md:text-lg">
              {event.hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Agenda ---
function TrackSection({
  title,
  items,
  imageSrc,
  imageAlt,
  imagePosition,
}: {
  title: string;
  items: readonly { title: string; desc: string }[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col items-start gap-8 ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div className="flex-1">
        <h2 className="text-gradient mb-2 text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <AccordionList items={items} />
      </div>
      <div className="w-full flex-1 md:sticky md:top-24">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="h-auto w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_20px_hsl(220_20%_6%/0.4)]" />
        </div>
      </div>
    </div>
  );
}

function AgendaSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-orange">
          {event.agenda.label}
        </p>
        <h2 className="display-lg text-gradient mb-4">
          {event.agenda.heading1}
          <br />
          {event.agenda.heading2}
        </h2>

        {/* Opening session */}
        <div className="glass-purple mt-12 rounded-2xl p-6 md:p-8">
          <h3 className="mb-2 text-lg font-semibold text-primary-100">
            {event.agenda.opening.title}
          </h3>
          <p className="text-sm leading-relaxed text-primary-400">
            {event.agenda.opening.desc}
          </p>
        </div>

        {/* Visionary Track */}
        <div className="mt-16">
          <TrackSection
            title={event.agenda.visionary.trackTitle}
            items={event.agenda.visionary.items}
            imageSrc="/assets/visionary-track.webp"
            imageAlt="Drone docking station with autonomous fleet"
            imagePosition="right"
          />
        </div>

        {/* Operator Track */}
        <div className="mt-24">
          <TrackSection
            title={event.agenda.operator.trackTitle}
            items={event.agenda.operator.items}
            imageSrc="/assets/operator-track.webp"
            imageAlt="Drone operations center with monitoring screens"
            imagePosition="left"
          />
        </div>

        {/* Closing session */}
        <div className="glass-purple mt-16 rounded-2xl p-6 md:p-8">
          <h3 className="mb-2 text-lg font-semibold text-primary-100">
            {event.agenda.closing.title}
          </h3>
          <p className="text-sm leading-relaxed text-primary-400">
            {event.agenda.closing.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Tracks (Who Should Join) ---
function TracksSection() {
  const tracks = [
    {
      name: event.tracks.visionary.name,
      audience: event.tracks.visionary.audience,
      description: event.tracks.visionary.description,
      accent: "primary" as const,
    },
    {
      name: event.tracks.operator.name,
      audience: event.tracks.operator.audience,
      description: event.tracks.operator.description,
      accent: "secondary" as const,
    },
  ];

  return (
    <section className="relative px-4 py-24">
      <div
        className="dot-pattern pointer-events-none absolute inset-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-orange">
          {event.tracks.label}
        </p>
        <h2 className="display-lg text-gradient mb-12">
          {event.tracks.heading1}
          <br />
          {event.tracks.heading2}
        </h2>
        <p className="mb-12 max-w-2xl leading-relaxed text-primary-400">
          {event.tracks.description}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.name}
              className={`glass-strong rounded-2xl p-8 transition-transform hover:scale-[1.02] ${
                track.accent === "primary" ? "glow-primary" : "glow-secondary"
              }`}
            >
              <h3 className="text-gradient mb-2 text-2xl font-bold">
                {track.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary-100/70">
                {track.audience}
              </p>
              <p className="text-sm leading-relaxed text-primary-400">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Gallery ---
function GallerySection() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto mb-10 max-w-6xl px-4">
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-brand-orange">
          {event.gallery.label}
        </span>
        <h2 className="text-3xl font-bold text-primary-100 md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          {event.gallery.heading}
        </h2>
      </div>
      <GalleryCarousel images={event.gallery.images} />
    </section>
  );
}

// --- Registration ---
function RequestInviteSection() {
  return (
    <section id="request-invite" className="px-4 py-24 shadow-md">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-orange">
          {event.registration.label}
        </p>
        <h2 className="display-md text-gradient mb-4">
          {event.registration.heading}
        </h2>
        <p className="mb-10 leading-relaxed text-primary-400">
          {event.registration.description}
        </p>
        <RequestInviteForm />
      </div>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t border-primary-700 py-8 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-primary-400">
          <span>{event.footer.initiative}</span>
          <span className="rounded-full border border-primary-700 px-3 py-1 font-medium text-primary-100/80">
            FlytBase
          </span>
        </div>
        <p className="text-sm text-primary-400">{event.footer.copyright}</p>
      </div>
    </footer>
  );
}

// --- Page ---
export default function EventPage() {
  return (
    <main className="min-h-screen bg-primary-950">
      <Navbar />
      <HeroSection />
      <AgendaSection />
      <TracksSection />
      <GallerySection />
      <RequestInviteSection />
      <Footer />
    </main>
  );
}
