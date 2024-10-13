"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "../ui/sparkles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const Nav = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex w-full justify-between p-8">
      <div className="px-12 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Link href="/">
          <h1 className="font-bold text-center dark:text-white relative z-20">
            Creative Wing 🕊
          </h1>
        </Link>
        <div className="w-[18rem] h-8 relative">
          {/* Gradients */}
          <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute  top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-slate-200 dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex ">
        <ul className="flex justify-between text-xl">
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/about">About Us</Link>
          </li>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4 ">
                Courses
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-xl text-center bg-primary py-2">
                <Link href="/courses" className=" hover:underline">
                  All Courses
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-lg">
                <Link href="/courses#ongoing">Ongoing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg">
                <Link href="/courses#upcoming">Upcoming</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg">
                <Link href="/courses#past">Completed</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/conferences">Conferences</Link>
          </li>
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/workshop">Workshop</Link>
          </li>
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/books">Books</Link>
          </li>
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/journal">Journals</Link>
          </li>
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/register">Join Us</Link>
          </li>
          <li className="ml-2 py-2 h-fit hover:font-bold hover:shadow-lg duration-300 rounded-md px-4">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="ml-4">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center"
            size="icon"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
