import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const partnerLogos = [
  {
    text: "Logooipsum",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-6.svg",
  },
  {
    text: "Logooipsum",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-9.svg",
  },
  {
    text: "Logooipsum",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-10.svg",
  },
  {
    text: "Logooipsum",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-7.svg",
  },
];

const highlightCards = [
  {
    title: "Our Vision",
    description: "Loren ipsum dolor sit amet, consectur adipiscing edit.",
    action: "Reard More",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-3.svg",
    iconClassName: "h-10 w-10",
  },
  {
    title: "Our Mission",
    description: "Loren ipsum dolor sit amet, consectur adipiscing edit.",
    action: "Reard More",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-4.svg",
    iconClassName: "h-12 w-8",
  },
  {
    title: "Award Wining",
    description: "Loren ipsum dolor sit amet, consectur adipiscing edit.",
    action: "Reard More",
    icon: "https://c.animaapp.com/motcjwiaEWelI3/img/vector-3.svg",
    iconClassName: "h-10 w-10",
  },
];

export const ServiceHighlightsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[1169px] flex-col gap-10 px-4 py-8 sm:px-6 lg:px-0">
        <header className="w-full">
          <Card className="overflow-hidden rounded-[20px] border-0 bg-transparent shadow-none -mt-[60px] relative z-10">
            <CardContent className="rounded-[20px] bg-[linear-gradient(90deg,rgba(255,255,255,1)_9%,rgba(141,255,249,1)_13%,rgba(71,255,245,1)_22%,rgba(71,255,245,1)_27%,rgba(12,249,236,1)_100%)] px-6 py-6 sm:px-8 lg:px-12">
              <nav aria-label="Partners" className="w-full">
                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
                  {partnerLogos.map((logo, index) => (
                    <li
                      key={`${logo.text}-${index}`}
                      className="flex items-center justify-center sm:justify-start"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          className="h-[18px] w-[18px] object-contain"
                          alt={logo.text}
                          src={logo.icon}
                        />
                        <span className="[font-family:'Inter',Helvetica] text-[15px] font-extrabold leading-[normal] tracking-[0] text-black whitespace-nowrap">
                          {logo.text}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,569px)_minmax(0,541px)] lg:items-start lg:gap-5">
          <article className="flex flex-col justify-between">
            <div className="space-y-4">
              <Badge className="h-auto w-fit rounded-none bg-transparent p-0 [font-family:'Inter',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-[#47fff5] shadow-none hover:bg-transparent">
                WE ARE THE BEST
              </Badge>
              <h2 className="[font-family:'Inter',Helvetica] text-[42px] font-extrabold leading-[1.05] tracking-[0] text-white sm:text-[52px] lg:text-[64px]">
                Trust the professionals for Car Wash
              </h2>
              <p className="max-w-[514px] [font-family:'Inter',Helvetica] text-lg font-medium leading-[1.15] tracking-[0] text-white sm:text-xl">
                E-learning Adventure is commited to transforming the traditional
                landscape. With a blend of engaging contenent, interactive
                exercices, and cutting-edge technology, we ensure every learner
                finds their path to success
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="h-auto min-w-44 rounded-[50px] bg-[#47fff5] px-8 py-[11px] [font-family:'Inter',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-black hover:bg-[#47fff5]/90">
                Learn More
              </Button>
              <Button
                variant="secondary"
                className="h-auto min-w-44 rounded-[50px] bg-white px-8 py-[11px] [font-family:'Inter',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-black hover:bg-white/90"
              >
                Contact Us
              </Button>
            </div>
          </article>
          <div className="flex flex-col gap-5">
            {highlightCards.map((card, index) => (
              <Card
                key={`${card.title}-${index}`}
                className="rounded-[30px] border-0 bg-[#47fff5] shadow-none"
              >
                <CardContent className="flex items-start gap-5 px-4 py-4 sm:px-5 sm:py-4">
                  <div className="flex h-full shrink-0 items-start pt-1">
                    <img
                      className={`${card.iconClassName} object-contain`}
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="[font-family:'Inter',Helvetica] text-[15px] font-black leading-[normal] tracking-[0] text-black">
                      {card.title}
                    </h3>
                    <p className="mt-2 max-w-[318px] [font-family:'Inter',Helvetica] text-[15px] font-medium leading-[normal] tracking-[0] text-black">
                      {card.description}
                    </p>
                    <button
                      type="button"
                      className="mt-3 w-fit [font-family:'Inter',Helvetica] text-[13px] font-black leading-[normal] tracking-[0] text-black [text-shadow:0px_4px_4px_#00000040]"
                    >
                      {card.action}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
