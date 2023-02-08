"use client";
import { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, useScroll } from "framer-motion";

export default function SectionOne() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("#first").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
        defaults: { ease: Power1.easeInOut },
      });
      tl.fromTo(
        section.querySelector("#outer"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 }
      ).fromTo(
        section.querySelector("#inner"),
        { xPercent: 100, x: 0 },
        { xPercent: 0 },
        0
      );
    });
  }, []);

  return (
    <div id="first" className="h-screen w-full bg-navy">
      <div
        id="outer"
        className="shadow-lg bg-teal absolute inset-x-0 inset-y-60 overflow-hidden w-full z-10 justify-center flex items-center"
      >
        <div
          id="inner"
          className="w-full h-full justify-center flex items-center bg-cover bg-1 bg-center absolute inset-0"
        >
          <p className="max-w-4xl text-center mx-auto z-10 drop-shadow text-4xl lg:text-7xl uppercase leading-[5rem]">
            into a
            <span className="px-16 font-bold tracking-widest font-serif text-black bg-[url('/brush1.svg')] bg-cover bg-center">
              quality
            </span>
            <br />
            masterpiece
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden w-full justify-center flex items-center bg-cover bg-gradient-to-b from-transparent via-teal/10 to-transparent">
        <div className="bg-2 bg-cover bg-center absolute inset-0 opacity-50" />
        <p className="max-w-4xl mx-auto text-center drop-shadow text-4xl lg:text-7xl uppercase leading-[5rem]">
          we turn your <br />
          <span className="px-16 font-bold tracking-widest font-serif text-black bg-[url('/brush2.svg')] bg-cover bg-center">
            project
          </span>
        </p>
      </div>
    </div>
  );
}
