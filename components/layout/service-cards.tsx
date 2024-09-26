"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function ServiceCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        What do we do?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
const contextStyle = {
  bg: "bg-[#F5F5F7] dark:bg-neutral-800 p-6 rounded-3xl mb-4",
  text: "text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto py-4",
  highlightedText: "font-bold text-neutral-700 dark:text-neutral-200",
};

const LinkButton = ({ text }: { text: string }) => {
  return (
    <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      <Link href="/register">
        <span className="text-xl font-semibold">{text}</span>
      </Link>
    </button>
  );
};
const data = [
  {
    category: "Research",
    title: "Publish a research paper.",
    src: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            Get your research work to the world.
          </span>{" "}
          Thorough review and publication of your research paper in a reputed
          journal
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },
  {
    category: "Research",
    title: "Publish a Journal",
    src: "https://images.unsplash.com/photo-1513542992587-cd39ba97057c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            Can we read your Journal?{" "}
          </span>
          Submit your journal for publication in a well-reputated journal or
          conference.
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },
  {
    category: "Research",
    title: "Publish a Conference Paper",
    src: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            Get pumped for your Conference Paper{" "}
          </span>
          Submit your conference paper for publication in a well-reputated
          conference.
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },

  {
    category: "Intellectual Property",
    title: "File a Patent",
    src: "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            You&apos;ve got a new invention?{" "}
          </span>
          Get your patent filed and protected, and get your invention to the
          world.
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },
  {
    category: "Intellectual Property",
    title: "File a Trademark",
    src: "https://plus.unsplash.com/premium_photo-1677269465630-4f34f8c63a1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            Let us get your Trademark Protected{" "}
          </span>
          Get your trademark filed and protected, and let&apos;s make your brand
          a house-hold name.
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },
  {
    category: "Intellectual Property",
    title: "File a Copyright",
    src: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className={contextStyle.bg}>
        <p className={contextStyle.text}>
          <span className={contextStyle.highlightedText}>
            Your artistic work deserve sole proprietorship{" "}
          </span>
          Get your copyright filed and protected. Own your work and yield your
          hardwork.
        </p>
        <LinkButton text="Submit" />
      </div>
    ),
  },
];
