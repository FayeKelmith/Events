import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
const AboutUs = () => {
  return (
    <div className="">
      <section className="h-[40rem] mb-10 items-center flex justify-center">
        <h2 className=" text-3xl md:text-7xl  mx-auto text-center">
          Our Story
        </h2>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="my-10">
        <div className="grid md:grid-cols-2 grid-rows-1 gap-4">
          <div className="text-xl p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl my-4 w-fit">
              Lorem, ipsum dolor.
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quidem exercitationem odit, maiores accusantium neque deserunt
              similique, veritatis, repellat dignissimos ipsam quibusdam cumque
              suscipit delectus laudantium esse laboriosam! Omnis, delectus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              minus aliquid temporibus aperiam repellat amet nulla laboriosam ex
              voluptatem. Deleniti?
            </p>
          </div>
          <div>
            <WobbleCard>
              <Image
                src="/media/photos/vusi.jpg"
                width={1160}
                height={960}
                alt="about"
                className="rounded-sm shadow-xl"
              />
            </WobbleCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
