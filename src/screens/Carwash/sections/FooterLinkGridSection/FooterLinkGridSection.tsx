import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const footerColumns = [
  {
    links: ["Home", "About us", "Service", "Contract", "Terms"],
  },
  {
    links: ["FAQ", "News", "Coming Soon", "404", "Credits"],
  },
];

export const FooterLinkGridSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[740px] flex-col gap-6 px-4 sm:px-0 md:flex-row md:items-start md:justify-between">
        <div className="flex shrink-0 items-start gap-10">
          <img
            className="mt-2 h-[219px] w-[182px] shrink-0 object-contain"
            alt="Group"
            src="https://c.animaapp.com/motcjwiaEWelI3/img/group-13.png"
          />
          <nav aria-label="Footer links" className="pt-1">
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {footerColumns.map((column, columnIndex) => (
                <ul key={`footer-column-${columnIndex}`} className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        className="h-auto text-left [font-family:'Inter',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white transition-opacity hover:opacity-80"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex w-full max-w-[247px] flex-col items-start md:pt-0">
          <h2 className="mb-12 pl-8 [font-family:'Inter',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
            Subscribe to newsietter
          </h2>
          <form className="flex w-full flex-col gap-4">
            <label htmlFor="footer-email" className="sr-only">
              email
            </label>
            <Input
              id="footer-email"
              type="email"
              defaultValue=""
              placeholder="email"
              className="h-[52px] rounded-[50px] border-0 bg-white px-[27px] [font-family:'Inter',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-black placeholder:text-neutral-300 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              className="h-[52px] rounded-[50px] bg-[#47fff5] [font-family:'Inter',Helvetica] text-base font-bold leading-[normal] tracking-[0] text-black hover:bg-[#47fff5]/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
