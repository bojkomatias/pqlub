"use client";
import { useEffect } from "react";

export default function SectionOne() {
  useEffect(() => {
    const outer = document.getElementById("outer")!;
    const inner = document.getElementById("inner")!;
    document.onmousemove = (e) => {
      const p = (e.clientX / window.innerWidth) * 100;
      inner.style.translate = `${-p + 50}%`;
      outer.style.translate = `${p - 50}%`;
    };
  }, []);
  return (
    <div id="sape" className="h-screen w-full relative ">
      <div
        id="outer"
        className="border-r bg-slate-900 absolute inset-x-0 inset-y-48 -translate-x-1/2 overflow-hidden w-full z-10 justify-center font-bold uppercase text-4xl flex items-center"
      >
        <div id="inner" className="translate-x-1/2 w-full">
          <p className="max-w-4xl mx-auto">
            Welcome to PQLUB, where performance and quality go hand in hand. Our
            team of experts leverages the latest technology to streamline your
            processes, ensuring efficiency and quick results. At PQLUB, we
            believe that{" "}
            <span className="tracking-widest font-bold font-serif">
              Quickness
            </span>{" "}
            and quality are intrinsically linked. When performance is at its
            best, so is the outcome. That&apos;s why we guarantee that your
            business will see improved results, with no delays.
          </p>
        </div>
      </div>
      <div className="invert absolute inset-x-0 inset-y-48 overflow-hidden w-full justify-center font-bold uppercase text-4xl flex items-center">
        <p className="max-w-4xl">
          {" "}
          Welcome to PQLUB, where performance and quality go hand in hand. Our
          team of experts leverages the latest technology to streamline your
          processes, ensuring efficiency and quick results. At PQLUB, we believe
          that{" "}
          <span className="font-bold tracking-tighter font-serif">
            Performance
          </span>{" "}
          and quality are intrinsically linked. When performance is at its best,
          so is the outcome. That&apos;s why we guarantee that your business
          will see improved results, with no delays.
        </p>
      </div>
    </div>
  );
}
