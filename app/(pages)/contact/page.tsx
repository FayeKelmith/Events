import ContactUs from "@/components/layout/contact-us";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const ContactPage = () => {
  return (
    <div>
      <section className="h-[20rem] items-center flex justify-center">
        <h2 className=" text-3xl md:text-7xl  mx-auto text-center">
          Let&apos;s{"  "}
          <span className="bg-gradient-to-r from-primary to-[#f09819] inline-block bg-clip-text text-transparent">
            Talk
          </span>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section>
        <ContactUs />
      </section>
    </div>
  );
};

export default ContactPage;
