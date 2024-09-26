"use client";

import { CreativeLandingUI } from "@/components/gemini-effect";
import { ServiceCard } from "@/components/layout/service-cards";
import ContactUs from "@/components/layout/contact-us";

const page = () => {
  return (
    <main className="py-8 p-4">
      <section className="my-4">
        <CreativeLandingUI />
      </section>
      <section className="my-4">
        <ServiceCard />
      </section>
      <section className="my-4">
        <ContactUs />
      </section>
    </main>
  );
};

export default page;
