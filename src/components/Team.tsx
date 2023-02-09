"use client";
import { LinkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect } from "react";
import { gsap, Power2 } from "gsap";

interface TeamMember {
  name: string;
  role: string;
  website: string;
  image?: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    name: "Amilcar Rey",
    role: "Co Founder / CTO",
    website: "amilcarrey.ar",
    image: "amilcar.jpeg",
  },
  {
    name: "Matias Bojko",
    role: "Co Founder / CEO",
    website: "matiasbojko.com",
    image: "mati.png",
  },
  {
    name: "Nicolas Horn",
    role: "Co Founder / CFO",
    website: "nicohorn.com",
    image: "nicolas.png",
  },
];
const memberDetails = ({
  name = "default",
  image,
  role,
  website,
}: TeamMember) => {
  return (
    <div className="flex flex-col items-center justify-around gap-4">
      <div className={`rounded-full border-4 border-dashed h-48 w-48`}>
        <Image
          src={`/images/${image}`}
          width={200}
          height={200}
          className={`aspect-square w-full rounded-full object-cover`}
          alt={""}
        />
      </div>
      <p className="font-serif text-3xl">{name}</p>
      <span className="bg-black px-2 text-orange uppercase text-xl">
        {role}
      </span>
      <span className="mb-4 rounded-full px-4 py-1 bg-gray-300/20 ring-1 ring-gray-300/60 flex w-fit items-center gap-3">
        <LinkIcon className="h-4 w-4 mt-px" />
        {website}
      </span>
    </div>
  );
};
export default function Team() {
  useEffect(() => {
    gsap.utils.toArray("#four").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: () => "-=20+=" + section.offsetWidth,
          scrub: true,
          anticipatePin: 1,
          once: true,
        },
        defaults: { ease: Power2.easeInOut },
      });
      tl.fromTo(
        section.querySelector("#teamtxt"),
        { yPercent: 50, scale: 1.3 },
        { yPercent: 0, scale: 1 }
      ).fromTo(
        section.querySelector("#teamout"),
        { yPercent: -90, opacity: 0, scale: 0.7 },
        { yPercent: 0, opacity: 1, scale: 1 },
        0
      );
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#four",
          start: "top-=200 top",
        },
        defaults: { ease: Power2.easeIn },
      })
      .fromTo(
        "#teamin",
        { xPercent: -100, yPercent: -100 },
        { xPercent: 0, yPercent: 0, duration: 1 }
      )
      .fromTo(
        "#teampic",
        { xPercent: 100, yPercent: 100 },
        { xPercent: 0, yPercent: 0, duration: 1 },
        0
      );
  }, []);

  return (
    <div id="four" className="relative isolate min-h-screen w-full bg-black">
      <div className="overflow-hidden relative flex flex-col justify-center items-center text-center gap-4 md:items-start max-w-7xl mx-auto py-24">
        <div id="teamtxt" className="container z-10">
          <h1 className="text-black font-outline-2">the papirrines,</h1>
          <h2>The ones who do the crafting.</h2>
          <h3>We are a group of engineers, who love solving problems.</h3>
        </div>

        <div
          id="teamout"
          className="relative overflow-hidden w-full mt-6 h-[36rem] max-w-6xl -mx-1 lg:mx-auto lg:rounded-2xl shadow-white/10 shadow-2xl ring-white/5 ring-offset-8 ring-offset-white/5 ring-1 bg-white/15 -backdrop-hue-rotate-30 z-10"
        >
          <div
            id="teamin"
            className="absolute inset-0 overflow-hidden rounded-2xl ring-8 ring-white/40"
          >
            <div
              id="teampic"
              className="ring=8 ring-white/40 absolute-inset-0 rounded-2xl h-full bg-[url('https://basement.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobjective-02.8c048b12.jpg&w=3840&q=75')] bg-cover bg-left-top"
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around my-24">
          {TEAM_DATA.map((member) => memberDetails(member))}
        </div>
      </div>
    </div>
  );
}
