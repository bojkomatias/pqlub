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
      className="h-screen w-full relative bg-gradient-to-tr from-navy to-[#034f6a]"
    >
      <div
        id="outer"
        className="shadow-lg border-orange border-r-2 bg-teal absolute inset-x-0 inset-y-60 -translate-x-1/2 overflow-hidden w-full z-10 justify-center flex items-center"
      >
        <div
          id="inner"
          className="translate-x-1/2 w-full h-full justify-center flex items-center bg-cover bg-1 bg-center"
        >
          <p className="max-w-4xl mx-auto text-center z-10 drop-shadow text-6xl uppercase">
            You will get{" "}
            <span className="font-bold font-serif tracking-widest">wet</span>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden w-full justify-center flex items-center bg-cover bg-gradient-to-b from-transparent via-teal/10 to-transparent">
        <div className="bg-2 bg-cover bg-center absolute inset-0 opacity-50" />
        <p className="max-w-4xl mx-auto text-center drop-shadow text-6xl uppercase">
          If it&apos;s{" "}
          <span className="font-bold tracking-widest font-serif">raining</span>
        </p>
      </div>
    </div>
  );
}
