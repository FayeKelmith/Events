import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { conferences } from "@/components/utils/conference-data";
import ContactUs from "@/components/layout/contact-us";
import ContactPage from "../contact/page";
const Conferences = () => {
  return (
    <div className="section">
      <section className="h-[40rem] mb-10 items-center flex justify-center">
        <h2 className=" text-3xl md:text-7xl  mx-auto text-center">
          Conferences
        </h2>
        <ShootingStars />
        <StarsBackground />
      </section>
      <section className="conferences my-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {conferences.map((conferences) => (
            <Card key={conferences.id} className="">
              <CardHeader>
                <img
                  src={conferences.image}
                  alt={conferences.name}
                  className="rounded-sm h-60 object-cover w-full hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
              <CardContent className="h-48">
                <CardTitle className="text-2xl">{conferences.name}</CardTitle>
                <CardDescription>{conferences.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-center font-semibold bg-red-500">
                <Link
                  href={conferences.url}
                  className="text-center w-full text-xl "
                  target="_blank"
                >
                  {" "}
                  Check it out &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="my-4">
        <ContactPage />
      </section>
    </div>
  );
};

export default Conferences;
