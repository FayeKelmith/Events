"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SpeakerCard from "@/components/speaker-card";
import { ubuntuMono } from "./fonts/font";

const page = () => {
  return (
    <main className="py-8 p-4">
      <section className="flex justify-between my-8">
        <div className="w-3/5">
          <p className="text-xl mt-4">Jalandhar, Punjab</p>
          <p className="text-xl my-4">September 19th and 20th</p>
          <h1 className="my-4">Techfluence AI Special Season</h1>
          <h2 className="my-4">Fine-tuning the future of AI</h2>
          <p className="text-xl my-4">
            Techfluence AI Special Season is a two-day event that brings
            together the brightest minds in AI to discuss the latest trends and
            innovations in the field.
          </p>
          <p className="text-xl mt-4">
            Thank you in advance for making this event a success
          </p>
        </div>

        <div className="flex justify-around my-auto ">
          <Button className="mx-4 px-8 border py-8 text-xl rounded-none hover:bg-slate-900 hover:font-semibold duration-300">
            2024 Info
          </Button>
          <Button className="mx-4 px-8 border py-8 text-xl rounded-none hover:bg-slate-900 hover:font-semibold duration-300">
            Speakers
          </Button>
        </div>
      </section>
      <section className="bg-slate-900 my-8 mx-auto py-8 px-12">
        <div className="space-y-4 ">
          <h2 className={`${ubuntuMono} antialiased text-4xl`}>
            Spend 2 days with the brightest minds in AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Join passionate engineers, researchers, and like-minded individuals
            in exploring AI and fostering connections at the forefront of
            innovation.
          </p>
        </div>

        <div className="flex h-5 items-center space-x-4 text-3xl text-center container my-4">
          <div>2 Days</div>
          <Separator orientation="vertical" />
          <div>3 Tracks</div>
          <Separator orientation="vertical" />
          <div>12+ Speakers</div>
        </div>
      </section>
      <section className="mx-auto my-8">
        <h1 className="font-bold text-center">Speakers</h1>
        <SpeakerCard />
      </section>
    </main>
  );
};

export default page;
