import { event } from "@/config/event";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  CalendarDots,
  MapPin,
  ArrowRight,
  User,
  Clock,
  LinkedinLogo,
  XLogo,
  Microphone,
  Lightning,
  Coffee,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

// --- Hero ---
function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(44,123,242,0.15)_0%,_transparent_60%)]" />
      <Container className="relative z-10 py-20 text-center">
        <Badge>{event.date}</Badge>
        <h1 className="display-lg mx-auto mt-6 max-w-4xl text-white">
          {event.hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-300">
          {event.hero.subheadline}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-primary-400">
          <span className="flex items-center gap-1.5">
            <CalendarDots size={16} weight="duotone" />
            {event.date}
          </span>
          <span className="text-primary-600">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={16} weight="duotone" />
            {event.location}
          </span>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={event.hero.cta.primary.href} size="lg">
            {event.hero.cta.primary.label}
            <ArrowRight size={20} weight="bold" />
          </Button>
          <Button href={event.hero.cta.secondary.href} variant="secondary" size="lg">
            {event.hero.cta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

// --- About ---
function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>About</Badge>
          <h2 className="display-md mt-4 text-white">{event.about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-300">
            {event.about.description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {event.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-primary-700 bg-primary-800/50 p-6 text-center"
            >
              <div className="text-3xl font-bold text-secondary-400">{stat.value}</div>
              <div className="mt-1 text-sm text-primary-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Speakers ---
function SpeakersSection() {
  return (
    <Section id="speakers" dark>
      <Container>
        <div className="text-center">
          <Badge>Speakers</Badge>
          <h2 className="display-md mt-4 text-white">Meet the Speakers</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {event.speakers.map((speaker) => (
            <div
              key={speaker.name + speaker.role}
              className="rounded-xl border border-primary-700 bg-primary-800/50 p-6 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-700">
                <User size={32} weight="duotone" className="text-primary-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{speaker.name}</h3>
              <p className="text-sm text-primary-400">{speaker.role}</p>
              <p className="mt-3 text-sm text-secondary-300">{speaker.topic}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Agenda ---
const sessionIcons = {
  keynote: Microphone,
  talk: Lightning,
  demo: Lightning,
  workshop: Wrench,
  break: Coffee,
};

function AgendaSection() {
  return (
    <Section id="agenda">
      <Container>
        <div className="text-center">
          <Badge>Agenda</Badge>
          <h2 className="display-md mt-4 text-white">Event Schedule</h2>
        </div>
        <div className="mt-12 space-y-10">
          {event.agenda.map((day) => (
            <div key={day.day}>
              <h3 className="mb-4 text-xl font-bold text-secondary-400">{day.day}</h3>
              <div className="space-y-2">
                {day.sessions.map((session) => {
                  const Icon = sessionIcons[session.type] || Lightning;
                  return (
                    <div
                      key={session.time + session.title}
                      className="flex items-center gap-4 rounded-lg border border-primary-700 bg-primary-800/50 px-5 py-4"
                    >
                      <Icon size={20} weight="duotone" className="shrink-0 text-secondary-400" />
                      <span className="flex items-center gap-1.5 text-sm text-primary-400 w-24 shrink-0">
                        <Clock size={14} weight="duotone" />
                        {session.time}
                      </span>
                      <span className="font-medium text-primary-100">{session.title}</span>
                      <span className="ml-auto rounded-full bg-primary-700 px-2.5 py-0.5 text-xs capitalize text-primary-300">
                        {session.type}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// --- Registration ---
function RegistrationSection() {
  return (
    <Section id="register" dark>
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Badge>Register</Badge>
          <h2 className="display-md mt-4 text-white">{event.registration.title}</h2>
          <p className="mt-3 text-primary-300">{event.registration.subtitle}</p>
          <form className="mt-8 space-y-4 text-left">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-primary-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-3 text-white placeholder:text-primary-500 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-primary-300">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-3 text-white placeholder:text-primary-500 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-primary-300">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-3 text-white placeholder:text-primary-500 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
                placeholder="Company name"
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-1 block text-sm font-medium text-primary-300">
                Job Title
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-3 text-white placeholder:text-primary-500 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
                placeholder="Your role"
              />
            </div>
            <Button type="submit" size="lg" className="w-full mt-2">
              {event.registration.submitLabel}
              <ArrowRight size={20} weight="bold" />
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t border-primary-700 bg-primary-950 py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold text-white">FlytBase</div>
            <p className="mt-1 text-sm text-primary-400">
              {event.name} &middot; {event.date} &middot; {event.location}
            </p>
          </div>
          <div className="flex items-center gap-6">
            {event.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={event.footer.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-white transition-colors"
            >
              <LinkedinLogo size={24} weight="duotone" />
            </a>
            <a
              href={event.footer.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-white transition-colors"
            >
              <XLogo size={24} weight="duotone" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// --- Page ---
export default function EventPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <AgendaSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
