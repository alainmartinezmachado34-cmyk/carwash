import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const otherPages = ["Home", "About us", "Service", "Contract", "Team"];
const quickLinks = ["FAQ", "News", "Coming Soon", "404", "Credit"];
const socialIcons = [
  {
    alt: "Facebook",
    src: "https://c.animaapp.com/motcjwiaEWelI3/img/frame-9.svg",
  },
];

export const FooterBrandingSection = (): JSX.Element => {
  return (
    <>
      <footer className="relative w-full overflow-hidden bg-transparent text-white">
        <div className="relative mx-auto w-full max-w-[1398px]">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            alt="Footer background"
            src="https://c.animaapp.com/motcjwiaEWelI3/img/rectangle-13.png"
          />
          <div className="relative z-10 grid min-h-[423px] grid-cols-1 gap-10 px-6 py-10 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.2fr] lg:px-[74px] lg:py-12">
            <section className="flex max-w-[247px] flex-col gap-6">
              <img
                className="h-6 w-[158px] object-cover"
                alt="Car shop logo"
                src="https://c.animaapp.com/motcjwiaEWelI3/img/car-shop-logo-1-1-2.png"
              />
              <p className="text-xl [font-family:'Inter',Helvetica] font-medium tracking-[0] leading-[normal] text-white">
                Loren ipsum dolor sit amet, consectur adipiscing edit.
              </p>
              <div className="flex items-center gap-3">
                {socialIcons.map((icon, index) => (
                  <img
                    key={`social-icon-${index}`}
                    className="h-4 w-[108px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </div>
            </section>
            <nav aria-label="Other Page" className="flex flex-col gap-6">
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-medium tracking-[0] leading-[normal] text-white whitespace-nowrap">
                Other Page
              </h2>
              <ul className="space-y-4">
                {otherPages.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="flex items-center gap-3 text-left [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] leading-[normal] text-white transition-opacity hover:opacity-80"
                    >
                      <span aria-hidden="true" className="text-base">
                        &gt;
                      </span>
                      <span className="whitespace-nowrap">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Quick Links" className="flex flex-col gap-6">
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-medium tracking-[0] leading-[normal] text-white whitespace-nowrap">
                Quick Links
              </h2>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="flex items-center gap-3 text-left [font-family:'Inter',Helvetica] text-base font-medium tracking-[0] leading-[normal] text-white transition-opacity hover:opacity-80"
                    >
                      <span aria-hidden="true" className="text-base">
                        &gt;
                      </span>
                      <span className="whitespace-nowrap">{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <section className="flex max-w-[336px] flex-col gap-6">
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-medium tracking-[0] leading-[normal] text-white whitespace-nowrap">
                Newsletter
              </h2>
              <p className="[font-family:'Inter',Helvetica] text-base font-medium tracking-[0] leading-[normal] text-white">
                Subscribe to newsletter
              </p>
              <form className="flex w-full max-w-[278px] flex-col gap-4">
                <Input
                  type="email"
                  defaultValue=""
                  placeholder="Email"
                  className="h-[43px] rounded-full border-0 bg-white px-5 text-sm text-black placeholder:text-[#b5b5b5] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  className="h-auto min-h-[43px] rounded-full bg-[#46e0e0] px-6 py-3 text-center [font-family:'Inter',Helvetica] text-sm font-semibold text-black shadow-none transition-colors hover:bg-[#3ad0d0]"
                >
                  Subscribe
                </Button>
              </form>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};
