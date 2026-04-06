import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 pt-24 pb-8 text-center px-4">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base tracking-[0.05em] uppercase text-muted-foreground mb-6 flex-wrap">
          <span>{t("hero.date")}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>{t("hero.location")}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>{t("hero.time")}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <span>{t("hero.inviteOnly")}</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-gradient leading-[1.05] mb-6">
          {t("hero.title")}
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-sm md:text-base text-foreground/90 tracking-wide">
              {t("hero.tagline")}
            </span>
          </div>
          <a
            href="#request-invite"
            className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity border border-foreground/20"
          >
            {t("hero.requestInvite")}
          </a>
        </div>
      </div>

      <div className="relative flex-1 flex items-end justify-center mt-auto">
        <img
          src={heroBg}
          alt="Drone dock operations facility"
          width={1920}
          height={1080}
          className="w-full max-w-[1400px] mx-auto h-auto object-contain"
        />
        <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 -mt-8 pb-0 pt-16">
        <div className="absolute inset-0 dot-pattern pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)' }} />
        <div className="relative px-4 md:px-0 max-w-2xl mx-auto pb-24">
          <div className="glass-strong rounded-xl p-6 md:p-8">
            <p className="text-base md:text-lg text-foreground/80 leading-loose">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
