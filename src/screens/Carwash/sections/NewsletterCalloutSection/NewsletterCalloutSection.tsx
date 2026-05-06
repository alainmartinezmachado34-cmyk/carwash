import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const newsletterContent = {
  title: "Get the lastest update!",
  description: "Loren ipsum dolor sit amet, consectur adipiscing edit.",
  placeholder: "Your email",
  cta: "Sign Up",
};

export const NewsletterCalloutSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full max-w-[730px] flex-col px-4 sm:pl-16 sm:pr-4">
        <header className="flex flex-col">
          <h2 className="[font-family:'Inter',Helvetica] text-4xl font-extrabold leading-[1.05] tracking-[0] text-white sm:text-5xl">
            {newsletterContent.title}
          </h2>
          <p className="mt-4 [font-family:'Inter',Helvetica] text-[15px] font-medium leading-[normal] tracking-[0] text-white">
            {newsletterContent.description}
          </p>
        </header>
        <form className="mt-8 flex w-full flex-col gap-3 sm:max-w-[480px] sm:flex-row sm:items-center sm:gap-4 sm:-translate-x-8">
          <label htmlFor="newsletter-email" className="sr-only">
            {newsletterContent.placeholder}
          </label>
          <Input
            id="newsletter-email"
            type="email"
            defaultValue=""
            placeholder={newsletterContent.placeholder}
            className="h-[52px] rounded-[50px] border-0 bg-white px-5 [font-family:'Inter',Helvetica] text-xl font-medium tracking-[0] text-neutral-400 placeholder:text-neutral-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            className="h-[52px] rounded-[50px] bg-[#47fff5] px-10 [font-family:'Inter',Helvetica] text-xl font-medium tracking-[0] text-black hover:bg-[#47fff5]/90"
          >
            {newsletterContent.cta}
          </Button>
        </form>
      </div>
    </section>
  );
};
