import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import visionaryImg from "@/assets/visionary-track.webp";
import operatorImg from "@/assets/operator-track.webp";

const CYCLE_DURATION = 10000;

const AccordionList = ({ items }: { items: { title: string; desc: string }[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { goToNext(); return 0; }
        return prev + (100 / (CYCLE_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsPaused(false);
  };

  return (
    <div>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => isActive && setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full text-left group cursor-pointer block"
          >
            <div className="py-5 flex items-start gap-3">
              <ChevronRight
                className={`w-4 h-4 mt-1 shrink-0 transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}
                style={{ color: isActive ? "#BBB6FD" : undefined }}
              />
              <div className="flex-1">
                <h4 className={`font-body font-medium text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`} style={isActive ? { color: "#BBB6FD" } : undefined}>
                  {item.title}
                </h4>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
            <div className="relative h-px w-full bg-border overflow-hidden">
              {isActive && (
                <div className="absolute inset-y-0 left-0 transition-none" style={{ width: `${progress}%`, backgroundColor: "#BBB6FD" }} />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

const TrackSection = ({
  title,
  items,
  image,
  imageAlt,
  imagePosition,
}: {
  title: string;
  items: { title: string; desc: string }[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}) => (
  <div className={`flex flex-col gap-8 items-start ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}>
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">{title}</h2>
      <AccordionList items={items} />
    </div>
    <div className="flex-1 w-full md:sticky md:top-24">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={image} alt={imageAlt} width={800} height={600} loading="lazy" className="w-full h-auto object-cover rounded-2xl" />
        <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_60px_20px_hsl(220_20%_6%/0.4)]" />
      </div>
    </div>
  </div>
);

const AgendaSection = () => {
  const { t } = useTranslation();

  const visionaryItems = t("agenda.visionary.items", { returnObjects: true }) as { title: string; desc: string }[];
  const operatorItems = t("agenda.operator.items", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-orange text-sm uppercase tracking-[0.2em] mb-3">{t("agenda.label")}</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-4">
          {t("agenda.heading1")}
          <br />
          {t("agenda.heading2")}
        </h2>

        <div className="glass-purple rounded-2xl p-6 md:p-8 mt-12">
          <h3 className="font-body text-lg font-semibold text-foreground mb-2">{t("agenda.opening.title")}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("agenda.opening.desc")}</p>
        </div>

        <div className="mt-16">
          <TrackSection
            title={t("agenda.visionary.trackTitle")}
            items={visionaryItems}
            image={visionaryImg}
            imageAlt="Drone docking station with autonomous fleet"
            imagePosition="right"
          />
        </div>

        <div className="mt-24">
          <TrackSection
            title={t("agenda.operator.trackTitle")}
            items={operatorItems}
            image={operatorImg}
            imageAlt="Drone operations center with monitoring screens"
            imagePosition="left"
          />
        </div>

        <div className="glass-purple rounded-2xl p-6 md:p-8 mt-16">
          <h3 className="font-body text-lg font-semibold text-foreground mb-2">{t("agenda.closing.title")}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{t("agenda.closing.desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
