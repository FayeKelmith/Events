"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex justify-between px-8">
      <div className="">
        <h2>Events Logo</h2>
      </div>
      <div className="flex">
        <ul className="flex justify-between">
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
      </div>
      <div className="">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
          <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
