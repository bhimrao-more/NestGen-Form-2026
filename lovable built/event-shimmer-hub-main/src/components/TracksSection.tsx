import { useTranslation } from "react-i18next";

const TracksSection = () => {
  const { t } = useTranslation();

  const tracks = [
    {
      nameKey: "tracks.visionary.name",
      audienceKey: "tracks.visionary.audience",
      descriptionKey: "tracks.visionary.description",
      accent: "primary" as const,
    },
    {
      nameKey: "tracks.operator.name",
      audienceKey: "tracks.operator.audience",
      descriptionKey: "tracks.operator.description",
      accent: "secondary" as const,
    },
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="absolute inset-0 dot-pattern pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }} />
      <div className="relative max-w-6xl mx-auto">
        <p className="text-brand-orange text-sm uppercase tracking-[0.2em] mb-3">{t("tracks.label")}</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-12">
          {t("tracks.heading1")}
          <br />
          {t("tracks.heading2")}
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          {t("tracks.description")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.nameKey}
              className={`glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-transform shadow-none ${
                track.accent === "primary" ? "glow-primary" : "glow-secondary"
              }`}
            >
              <h3 className="font-display text-2xl font-bold mb-2 text-gradient">
                {t(track.nameKey)}
              </h3>
              <p className="text-foreground/70 text-sm font-medium mb-4">{t(track.audienceKey)}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(track.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
