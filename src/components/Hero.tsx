"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function SectionOne() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("#sape").forEach((section: any) => {
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
        defaults: { ease: "none" },
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

    // const outer = document.getElementById("outer")!;
    // const inner = document.getElementById("inner")!;
    // const handleMove = (e: any) => {
    //   const p = (e.clientX / window.innerWidth) * 100;
    //   inner.style.translate = `${-p + 50}%`;
    //   outer.style.translate = `${p - 50}%`;
    // };
    // document.onmousemove = (e) => handleMove(e);
    // document.ontouchmove = (e) => handleMove(e.touches[0]);
  }, []);
  return (
    <div
      id="sape"
      className="h-screen w-full bg-gradient-to-tr from-navy to-[#034f6a]"
    >
      <div
        id="outer"
        className="shadow-lg border-orange border-r-2 bg-teal absolute inset-x-0 inset-y-60 overflow-hidden w-full z-10 justify-center flex items-center"
      >
        <div
          id="inner"
          className="w-full h-full justify-center flex items-center bg-cover bg-1 bg-center absolute inset-0"
        >
          <p className="max-w-4xl mx-auto z-10 drop-shadow text-3xl uppercase">
            The statement p is called the hypothesis of the implication, and the
            statement q is called the conclusion of the implication.
            <br />
            <br />
            <span className="font-bold tracking-widest font-serif text-4xl">
              Let us build your next dream project
            </span>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden w-full justify-center flex items-center bg-cover bg-gradient-to-b from-transparent via-teal/10 to-transparent">
        <div className="bg-2 bg-cover bg-center absolute inset-0 opacity-50" />
        <p className="max-w-4xl mx-auto text-right drop-shadow text-3xl uppercase">
          The implication p → q (p implies q, or if p then q) is the statement
          which asserts that if p is true, then q is also true.
          <br />
          <br />
          <span className="font-bold tracking-widest font-serif text-4xl">
            If you want to upgrade your business
          </span>
        </p>
      </div>
    </div>
  );
}
