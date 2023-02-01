"use client";
import { useEffect } from "react";

export default function SectionOne() {
  useEffect(() => {
    const outer = document.getElementById("outer")!;
    const inner = document.getElementById("inner")!;
    const handleMove = (e: any) => {
      const p = (e.clientX / window.innerWidth) * 100;
      inner.style.translate = `${-p + 50}%`;
      outer.style.translate = `${p - 50}%`;
    };
    document.onmousemove = (e) => handleMove(e);
    document.ontouchmove = (e) => handleMove(e.touches[0]);
  }, []);
  return (
    <div
      id="sape"
      className="h-screen w-full relative bg-gradient-to-tr from-[#002837] to-[#034f6a]"
    >
      <div
        id="outer"
        className="shadow-lg border-[#fc7300] bg-[#1F8A70]  absolute inset-x-0 inset-y-48 -translate-x-1/2 overflow-hidden w-full z-10 justify-center flex items-center"
      >
        <div
          id="inner"
          className="translate-x-1/2 w-full h-full justify-center flex items-center bg-cover bg-1 bg-center"
        >
          <p className="max-w-4xl mx-auto text-center z-10 drop-shadow text-6xl font-thin uppercase">
            You will get{" "}
            <span className="font-bold font-serif tracking-widest">wet</span>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden w-full justify-center flex items-center bg-neutral-900">
        <div className="bg-2 bg-cover bg-center absolute inset-0 opacity-30" />
        <p className="max-w-4xl mx-auto text-center drop-shadow text-6xl font-thin uppercase">
          If it's{" "}
          <span className="font-bold tracking-widest font-serif">raining</span>
        </p>
      </div>
    </div>
  );
}
