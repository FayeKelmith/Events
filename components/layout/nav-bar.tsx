"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link"
const Nav = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex w-full justify-between px-8">
      
      <div className="px-12 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Link href="/">
        <h1 className="font-bold text-center dark:text-white relative z-20">
          CreativeWing
        </h1>
        </Link>
        <div className="w-[16rem] h-8 relative">
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
          <li className="mx-4 py-2 hover:font-bold hover:border-b-2 hover:shadow-lg duration-300 rounded-md px-8">
            Home
          </li>
          <li className="mx-4 py-2 hover:font-bold hover:border-b-2 hover:shadow-lg duration-300 rounded-md px-8">
            Events
          </li>
          <li className="mx-4 py-2 hover:font-bold hover:border-b-2 hover:shadow-lg duration-300 rounded-md px-8">
            Blog
          </li>
          <li className="mx-4 py-2 hover:font-bold hover:border-b-2 hover:shadow-lg duration-300 rounded-md px-8">
            Sign In
          </li>
          <li className="mx-4 py-2 hover:font-bold hover:border-b-2 hover:shadow-lg duration-300 rounded-md px-8">
            Sign Up
          </li>
        </ul>
        <div className="">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
