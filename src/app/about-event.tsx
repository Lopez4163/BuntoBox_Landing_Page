"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "My Portfolio",
    description:
      "Explore my portfolio to see my projects, skills, and experiences that showcase my journey in the tech world.",
    subTitle: "Portfolio",
    siteUrl: "http://nicholaslopez.work/#projects",
    bgImage : "/image/port-pic.png"
  },
  {
    title: "Queens Tech Bros",
    description:
      "Check out my IT solutions company, Queens Tech Bros, where we provide innovative tech solutions for businesses.",
    subTitle: "IT Solutions",
    siteUrl: "https://queenstechbros.com",
    bgImage : "/image/qtb-pic.png"
  },
  {
    title: "Joses Motorcycle Repairs",
    description:
      "Discover Joses Motorcycle Repairs, where we offer expert motorcycle repair services to keep your ride in top shape.",
    subTitle: "Motorcycle Repairs",
    siteUrl: "https://josemoto.netlify.app",
    bgImage : "/image/jm-pic.png"
  },
  {
    title: "JellyFin",
    description:
      "Stream Tv shows, movies, and music with JellyFin, the open-source media server.",
    subTitle: "Media Server",
    siteUrl: "https://nicosmediajelly.duckdns.org",
    bgImage : "/image/jelly-pic.png"
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
    <Typography variant="h3" className="text-center mb-2 text-white" {...({} as any)}>
      SERVICES
    </Typography>


      {/* <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography> */}
      {/* <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography> */}
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        {/* <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div> */}
      </div>
    </section>
  );
}

export default AboutEvent;
