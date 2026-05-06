import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { AboutHeroDetailsSection } from "./sections/AboutHeroDetailsSection";
import { FooterBrandingSection } from "./sections/FooterBrandingSection/FooterBrandingSection";
import { FooterLinkGridSection } from "./sections/FooterLinkGridSection/FooterLinkGridSection";
import { NewsletterCalloutSection } from "./sections/NewsletterCalloutSection";
import { ServiceHighlightsSection } from "./sections/ServiceHighlightsSection";

const navigationItems = [
  { label: "Home", active: false, hasDropdown: false },
  { label: "About", active: true, hasDropdown: false },
  { label: "Service", active: false, hasDropdown: true },
  { label: "Pague", active: false, hasDropdown: true },
];

export const Carwash = (): JSX.Element => {
  return (
    <main className="w-full bg-black text-white" data-model-id="1:2">
      <header className="sticky top-0 z-50 bg-black">
        <div className="mx-auto flex min-h-[84px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[60px]">
          <a href="#" className="shrink-0">
            <img
              className="h-6 w-[158px] object-cover"
              alt="Car shop logo"
              src="https://c.animaapp.com/motcjwiaEWelI3/img/car-shop-logo-1-1-2.png"
            />
          </a>
          <div className="flex items-center gap-4 lg:gap-10">
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-[57px]">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={`flex items-center gap-1 whitespace-nowrap text-xl font-bold tracking-[0] [font-family:'Inter',Helvetica] ${
                        item.active ? "text-[#47fff5]" : "text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <ChevronDownIcon className="h-4 w-4" />
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <Button
              type="button"
              className="h-auto rounded-[50px] bg-[#47fff5] px-[15px] py-[7px] text-xl font-medium text-black hover:bg-[#47fff5]/90 [font-family:'Inter',Helvetica]"
            >
              Contact
            </Button>
          </div>
        </div>
      </header>
      {/* ── FONDO 1: Galaxias — título + lorem ipsum ── */}
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/motcjwiaEWelI3/img/rectangle-5.png')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-10 pb-10 text-center sm:px-10 lg:px-[88px]">
          <h1 className="text-5xl font-extrabold tracking-[0] text-white [font-family:'Inter',Helvetica]">
            About
          </h1>
          <p className="mt-2 text-[15px] font-medium tracking-[0] text-white [font-family:'Inter',Helvetica]">
            Loren ipsum dolor sit amet, consectur adipiscing edit.
          </p>
        </div>
      </section>

      {/* ── FONDO 2: Degradado desde esquinas hacia el centro + textura ── */}
      <section
        style={{
          position: "relative",
          background:
            "radial-gradient(ellipse 120% 60% at 50% 50%, #062840 0%, #041a2e 30%, #000000 70%)",
        }}
      >
        {/* Capa superior: negro desde arriba hacia el centro */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, #000000 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        {/* Capa inferior: negro desde abajo hacia el centro */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #000000 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        {/* Textura de ruido en el centro */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.06,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-24 pt-10 text-center sm:px-10 lg:px-[88px] lg:pb-[130px]">
          <div className="relative z-10 mt-4 w-full">
            <AboutHeroDetailsSection />
          </div>
        </div>
      </section>

      <section className="relative bg-[#0e5b61]">
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-0 pb-16 sm:px-10 lg:px-[58px] lg:pb-[74px]">
          <ServiceHighlightsSection />
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://c.animaapp.com/motcjwiaEWelI3/img/rectangle-6.png')",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 pb-16 pt-20 sm:px-10 lg:px-[88px] lg:pb-[68px]">
          <div className="w-full max-w-[820px]">
            <NewsletterCalloutSection />
          </div>
          <p className="mt-8 w-full text-left text-xl font-medium tracking-[0] text-white [font-family:'Inter',Helvetica]">
            www.DownloadNewThemes.com
          </p>
        </div>
      </section>
      <footer className="bg-black">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-0">
          <FooterBrandingSection />
        </div>
      </footer>
    </main>
  );
};
