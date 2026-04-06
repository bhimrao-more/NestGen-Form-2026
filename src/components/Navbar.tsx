import Image from "next/image";
import { event } from "@/config/event";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-950/70 backdrop-blur-xl pt-2">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center">
          <Image
            src="/assets/nestgen-logo.avif"
            alt="NestGen"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>
        <a
          href="#request-invite"
          className="rounded-full bg-brand-orange px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {event.hero.cta.primary.label}
        </a>
      </div>
    </nav>
  );
}
