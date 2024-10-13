import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { PingAnimation } from "@/components/ui/common";
import { courses } from "@/components/utils/course-data";
import Image from "next/image";
const Courses = () => {
  return (
    <div>
      <h1 className="mb-4">Our Courses</h1>
      <div id="ongoing">
        <h2 className="flex ">
          <span className="mr-3">Ongoing</span>
          <PingAnimation className="bg-yellow-400" />
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {courses
            .filter((course) => course.category === "ongoing")
            .map((course) => (
              <Card key={course.id} className="">
                <CardHeader>
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={800}
                    width={450}
                    className="rounded-sm h-60 object-cover w-full hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="h-40">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter className="text-center font-semibold bg-red-500">
                  <p className="text-center w-full text-xl ">
                    {" "}
                    Check it out &rarr;
                  </p>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
      <div id="upcoming">
        <h2 className="flex">
          <span className="mr-2">Upcoming</span>
          <PingAnimation className="bg-green-400" />
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {courses
            .filter((course) => course.category === "upcoming")
            .map((course) => (
              <Card key={course.id} className="">
                <CardHeader>
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={800}
                    width={450}
                    className="rounded-sm h-60 object-cover w-full hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="h-40">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter className="text-center font-semibold bg-red-500">
                  <p className="text-center w-full text-xl ">
                    {" "}
                    Sign our Now &rarr;
                  </p>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
      <div id="past">
        <h2 className="flex">
          <span className="mr-2">Past</span>
          <PingAnimation className="bg-red-400" />
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
          {courses
            .filter((course) => course.category === "past")
            .map((course) => (
              <Card key={course.id} className="">
                <CardHeader>
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={800}
                    width={450}
                    className="rounded-sm h-60 object-cover w-full hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="h-40">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter className="text-center font-semibold bg-red-500">
                  <p className="text-center w-full text-xl ">
                    {" "}
                    Visit course &rarr;
                  </p>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
