import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgendaSection from "@/components/AgendaSection";
import TracksSection from "@/components/TracksSection";
import GallerySection from "@/components/GallerySection";
import RequestInviteSection from "@/components/RequestInviteSection";

const Index = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AgendaSection />
      <TracksSection />
      <GallerySection />
      <RequestInviteSection />
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>{t("footer.initiative")}</span>
            <span className="border border-border rounded-full px-3 py-1 text-foreground/80 font-medium">FlytBase</span>
          </div>
          <p className="text-muted-foreground text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
