import { useTranslation } from "react-i18next";
import logo from "@/assets/nestgen-logo.avif";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl pt-2">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
        <a href="/" className="flex items-center">
          <img src={logo} alt="NestGen" className="h-12 w-auto" />
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#request-invite"
            className="bg-brand-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t("nav.requestInvite")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
