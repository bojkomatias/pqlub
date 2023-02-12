"use client";
import { useEffect } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export default function SectionOne({
  dictionary,
}: {
  dictionary: {
    text1:string;
    specialWord1:string;
    text2:string;
    specialWord2:string;
  };
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("#first").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => "+=" + section.offsetWidth / 2,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
        defaults: { ease: Power1.easeInOut },
      });
      tl.fromTo(
        section.querySelector("#outer"),
        { yPercent: -100, x: 0 },
        { yPercent: 0 }
      ).fromTo(
        section.querySelector("#inner"),
        { yPercent: 100, x: 0 },
        { yPercent: 0 },
        0
      );
    });
  }, []);

  return (
    <div id="first" className="h-screen w-screen bg-navy">
      <div
        id="outer"
        className=" ring-2 ring-green/50 bg-teal absolute inset-x-0 inset-y-0 overflow-hidden w-full z-10 justify-center flex items-center"
      >
        <div
          id="inner"
          className=" ring-2 ring-green/50 w-full h-full justify-center flex items-center bg-1 bg-no-repeat bg-center lg:bg-cover absolute inset-0"
        >
          <p className="max-w-4xl text-center mx-auto z-10 drop-shadow text-4xl lg:text-7xl uppercase leading-[5rem]">
            {dictionary.text2.split(dictionary.specialWord2)[0]}
            <br />
            <span className="px-16 font-bold tracking-widest font-serif text-black bg-[url('/assets/brush1.svg')] bg-cover bg-center">
              {dictionary.specialWord2}
            </span>
            <br />
            {dictionary.text2.split(dictionary.specialWord2)[1]}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden w-full justify-center flex items-center bg-cover bg-gradient-to-b from-transparent via-teal/10 to-transparent">
        <div className="bg-2 bg-no-repeat bg-center lg:bg-cover absolute inset-0 opacity-50" />
        <p className="max-w-4xl mx-auto text-center drop-shadow text-4xl lg:text-7xl uppercase leading-[5rem]">
          {dictionary.text1.split(dictionary.specialWord1)[0]} <br />
          <span className="px-16 font-bold tracking-widest font-serif text-black bg-[url('/assets/brush2.svg')] bg-cover bg-center">
            {dictionary.specialWord1}
          </span>
        </p>
      </div>
      <ChevronDoubleDownIcon className="h-6 w-6 stroke-white/50 animate-pulse inset-1/2 absolute bottom-10" />
    </div>
  );
}
