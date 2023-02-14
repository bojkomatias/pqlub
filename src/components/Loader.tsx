"use client";

import { gsap, Power2 } from "gsap";
import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    gsap.fromTo(
      "#load",
      { yPercent: 0 },
      { yPercent: -100, duration: 0.4, delay: 1.3, ease: Power2.easeIn }
    );
    gsap.fromTo(
      "#loadtxt",
      { yPercent: 5, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.6,
        delay: 0,
        ease: Power2.easeOut,
      }
    );
    gsap.fromTo(
      "#implies",
      { opacity: 0, scale: 0.8, xPercent: -20 },
      {
        opacity: 1,
        scale: 1,
        xPercent: 0,
        duration: 0.2,
        delay: 0.7,
        ease: Power2.easeIn,
      }
    );
    gsap.fromTo(
      "#implies",
      { backgroundColor: "#fff" },
      {
        backgroundColor: "#BFDB38",
        duration: 0.3,
        delay: 0.8,
        ease: Power2.easeIn,
      }
    );
    gsap.fromTo(
      "#p",
      { opacity: 0, yPercent: 10, scale: 0.8 },
      {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        duration: 0.4,
        delay: 0,
        ease: Power2.easeInOut,
      }
    );
    gsap.fromTo(
      "#q",
      { opacity: 0, scale: 0.8, yPercent: 10, xPercent: -40 },
      {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        duration: 0.4,
        delay: 0.3,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div
      id="load"
      className="z-50 fixed h-screen w-screen flex items-center justify-center bg-black"
    >
      <h1
        id="loadtxt"
        className="opacity-0   flex items-center h-full drop-shadow text-[16rem]"
      >
        <span id="p">p</span>
        <span
          id="implies"
          className="text-[8rem] mt-60  text-transparent bg-clip-text"
        >
          {"->"}
        </span>
        <span id="q">q</span>
      </h1>
    </div>
  );
}
