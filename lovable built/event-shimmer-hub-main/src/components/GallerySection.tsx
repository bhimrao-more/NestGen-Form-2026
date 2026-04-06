import { useTranslation } from "react-i18next";
import gallery1 from "@/assets/gallery/CCTP0415.JPG";
import gallery2 from "@/assets/gallery/IMG_9009.jpeg";
import gallery3 from "@/assets/gallery/PXL_20250902_215632650.jpg";
import gallery4 from "@/assets/gallery/PXL_20240903_162321591.jpg";
import gallery5 from "@/assets/gallery/Screenshot_2025-12-02_at_4.24.35_PM.png";
import gallery6 from "@/assets/gallery/Energy_AI_Forum.jpg";

const galleryImages = [
  { id: 1, src: gallery1, label: "NestGen Retreat" },
  { id: 2, src: gallery2, label: "Networking at NGR" },
  { id: 3, src: gallery3, label: "Boostcamp at CUAV " },
  { id: 4, src: gallery4, label: "Discussions" },
  { id: 5, src: gallery5, label: "NestGen Social" },
  { id: 6, src: gallery6, label: "Discussions at Boostcamp" },
];

const GallerySection = () => {
  const { t } = useTranslation();
  const doubled = [...galleryImages, ...galleryImages];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <span className="inline-block text-sm font-medium text-brand-orange tracking-wider uppercase mb-3">
          {t("gallery.label")}
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          {t("gallery.heading")}
        </h2>
      </div>

      <div className="group relative">
        <div className="flex gap-5 animate-filmstrip-scroll group-hover:[animation-play-state:paused] w-max">
          {doubled.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              className="relative w-64 h-44 md:w-80 md:h-56 rounded-lg overflow-hidden shadow-lg shadow-background/50 flex-shrink-0 border border-border/40"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-sm font-medium text-foreground/90 bg-background/60 backdrop-blur-sm rounded px-2 py-1">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
