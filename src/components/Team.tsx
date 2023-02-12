"use client";
import { LinkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect } from "react";
import { gsap, Power2 } from "gsap";
import Link from "next/link";

interface TeamMember {
  name: string;
  lastName: string;
  role: string;
  website: string;
  image?: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    name: "Amilcar",
    lastName: "Rey",
    role: "Co Founder / CTO",
    website: "amilcarrey.ar",
    image: "amilcar.jpeg",
  },
  {
    name: "Matías",
    lastName: "Bojko",
    role: "Co Founder / CEO",
    website: "matiasbojko.com",
    image: "mati.png",
  },
  {
    name: "Nicolás",
    lastName: "Horn",
    role: "Co Founder / CFO",
    website: "nicohorn.com",
    image: "nicolas.png",
  },
];
const memberDetails = ({
  name = "default",
  lastName,
  image,
  role,
  website,
}: TeamMember) => {
  return (
    <div key={name} className="flex flex-col items-center justify-around gap-3">
      <div
        className={`rounded-full ring-white/20 ring-4 ring-offset-8 ring-offset-black h-48 w-48 mb-3`}
      >
        <Image
          src={`/images/${image}`}
          width={200}
          height={200}
          className={`aspect-square w-full rounded-full object-cover`}
          alt={""}
        />
      </div>
      <p className="font-sans font-light text-3xl -rotate-1">
        {name} <span className="font-bold">{lastName}</span>
      </p>
      <span className="bg-black px-2 text-orange text-xs self-end -mt-3">
        {role}
      </span>
      <Link
        href={`https://${website}`}
        target={"_blank"}
        className="mb-4 rounded-full px-4 py-1 bg-white/5 hover:bg-white/20 ring-1 ring-white/10 hover:ring-white/30 flex w-fit items-center gap-3"
      >
        <LinkIcon className="h-4 w-4 mt-px" />
        {website}
      </Link>
    </div>
  );
};
export default function Team({
  dictionary,
}: {
  dictionary: {
    title: string;
    subtitle: string;
    subtitle2: string;
  };
}) {
  useEffect(() => {
    gsap.utils.toArray("#four").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
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
          <h1 className="text-green md:text-black font-outline-2">
            {dictionary.title}
          </h1>
          <h2>{dictionary.subtitle}</h2>
          <h3>{dictionary.subtitle2}</h3>
        </div>

        <div
          id="teamout"
          className="relative overflow-hidden w-full mt-6 h-[36rem] max-w-6xl -mx-1 lg:mx-auto md:rounded-2xl shadow-white/10 shadow-2xl ring-white/5 ring-offset-8 ring-offset-white/5 ring-1 bg-white/15 -backdrop-hue-rotate-30 z-10"
        >
          <div
            id="teamin"
            className="absolute inset-0 overflow-hidden md:rounded-2xl ring-8 ring-white/40"
          >
            <div
              id="teampic"
              className="ring=8 ring-white/40 absolute-inset-0 md:rounded-2xl h-full bg-papirrines bg-cover bg-center"
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
