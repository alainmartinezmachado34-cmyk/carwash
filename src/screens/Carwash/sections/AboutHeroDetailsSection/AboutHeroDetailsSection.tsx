import { Card, CardContent } from "../../../../components/ui/card";

export const AboutHeroDetailsSection = (): JSX.Element => {
  return (
    <section
      className="w-full px-4 py-10 sm:px-6 lg:px-0"
      aria-labelledby="about-hero-title"
    >
      <div className="mx-auto grid w-full max-w-[1100px] items-center gap-8 lg:grid-cols-[507px_minmax(0,533px)] lg:gap-[41px]">
        {/* ── Image collage ── */}
        <div className="relative mx-auto w-full max-w-[507px]">
          {/* Fixed-height container so absolute children have reference */}
          <div className="relative w-full" style={{ height: 480 }}>
            {/* 1. rectangle-3 — main mechanic photo, big, fills most of the box */}
            <img
              src="https://c.animaapp.com/motcjwiaEWelI3/img/rectangle-3.png"
              alt="Car wash service"
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "82%",
                height: 400,
                objectFit: "cover",
                borderRadius: "16px 50px 16px 16px",
                zIndex: 1,
              }}
            />

            {/* 2. ellipse-1 — circle photo, upper-left, overlapping the main image */}
            <img
              src="https://c.animaapp.com/motcjwiaEWelI3/img/ellipse-1.png"
              alt="Mechanic detail"
              style={{
                position: "absolute",
                top: 10,
                left: 0,
                width: 148,
                height: 148,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #000",
                zIndex: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
              }}
            />

            {/* 3. rectangle-4 — bottom-right small photo, slightly rotated */}
            <img
              src="https://c.animaapp.com/motcjwiaEWelI3/img/rectangle-4.png"
              alt="Technician working"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 220,
                height: 160,
                objectFit: "cover",
                borderRadius: 16,
                transform: "rotate(-5deg)",
                zIndex: 3,
                boxShadow: "0 6px 24px rgba(0,0,0,0.7)",
              }}
            />
          </div>
        </div>

        {/* ── Text content ── */}
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="flex flex-col items-start px-0 py-0">
            {/* Badge: Mostly clients happy */}
            <div className="mb-5 inline-flex w-fit items-center rounded-[50px] border border-white bg-[#0f1d26] pl-[18px] pr-7 py-[7px]">
              <div className="flex items-center">
                {[
                  {
                    src: "https://c.animaapp.com/motcjwiaEWelI3/img/ellipse-2.png",
                    alt: "Happy client 1",
                  },
                  {
                    src: "https://c.animaapp.com/motcjwiaEWelI3/img/ellipse-3.png",
                    alt: "Happy client 2",
                  },
                  {
                    src: "https://c.animaapp.com/motcjwiaEWelI3/img/ellipse-4.png",
                    alt: "Happy client 3",
                  },
                ].map((image, index) => (
                  <img
                    key={image.src}
                    className={`h-[26.98px] w-[27.25px] rounded-full border border-solid border-white object-cover ${index > 0 ? "-ml-1" : ""}`}
                    alt={image.alt}
                    src={image.src}
                  />
                ))}
              </div>
              <p className="ml-3 [font-family:'Inter',Helvetica] text-[15px] font-normal leading-[normal] tracking-[0] text-white whitespace-nowrap">
                Mostly clients happy!
              </p>
            </div>

            <p className="mb-4 [font-family:'Inter',Helvetica] text-xl font-semibold leading-[normal] tracking-[0] text-[#47fff5]">
              ABOUT US
            </p>

            <h2
              id="about-hero-title"
              className="max-w-[517px] [font-family:'Inter',Helvetica] text-[40px] font-extrabold leading-[1.05] tracking-[0] text-white sm:text-[52px] lg:text-[64px]"
            >
              More than Just a Car Wash
            </h2>

            <p className="mt-6 max-w-[482px] [font-family:'Inter',Helvetica] text-lg font-medium leading-[1.25] tracking-[0] text-white sm:text-xl">
              E-Learning Adventures is committed to transforming the traditional
              learning landscape. With a blend of engaging content, interactive
              exercises, and cutting-edge technology, we ensure every learner
              finds their path to success
            </p>

            {/* Learn More button */}
            <button
              type="button"
              className="mt-8 h-auto rounded-[50px] bg-[#47fff5] px-8 py-[11px] text-xl font-medium text-black hover:bg-[#47fff5]/90 [font-family:'Inter',Helvetica]"
            >
              Learn More
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
