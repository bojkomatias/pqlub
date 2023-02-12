"use client";

import { gsap, Power2 } from "gsap";
import { useEffect } from "react";

export default function FeatureTwo({
  dictionary,
}: {
  dictionary: {
    title: string;
    subtitle: string;
    action: string;
  };
}) {
  useEffect(() => {
    gsap.utils.toArray("#second").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
          once: true,
          anticipatePin: 1,
        },
        defaults: { ease: Power2.easeInOut },
      });
      tl.fromTo(
        section.querySelector("#text1"),
        { xPercent: 50, scale: 1.2 },
        { xPercent: 0, scale: 1 }
      ).fromTo(
        section.querySelector("#ft1out"),
        { xPercent: -100, yPercent: -40, opacity: 0, scale: 2 },
        { xPercent: 0, yPercent: 0, opacity: 1, scale: 1 },
        0
      );
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#second",
          start: "top-=200 top",
        },
        defaults: { ease: Power2.easeIn },
      })
      .fromTo("#ft1in", { yPercent: -100 }, { yPercent: 0, duration: 1.3 })
      .fromTo("#img1", { yPercent: 100 }, { yPercent: 0, duration: 1.3 }, 0);
  }, []);
  return (
    <div
      id="second"
      className="overflow-hidden w-full h-fit relative isolate bg-gradient-to-tl from-black to-navy"
    >
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F8A70" />
            <stop offset={1} stopColor="#BFDB38" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-6 sm:py-32 lg:flex lg:py-40 lg:px-8">
        <div
          id="text1"
          className="flex flex-col mt-6 md:justify-start mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 px-4"
        >
          <h1 className="mt-10 text-green md:text-black font-outline-2">
            {dictionary.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {dictionary.subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <h2 className="hover:bg-orange border-black text-black py-2 uppercase border-2 transition-bg duration-500 ease-in-out transform hover:text-white hover:border-black hover:lowercase hover:font-serif bg-green hover:tracking-wider hover:text-2xl transition text-xl cursor-pointer px-4">
              {dictionary.action}
            </h2>
          </div>
        </div>
        <div
          id="ft1out"
          className="relative overflow-hidden mx-auto mt-16 flex sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32 bg-black/10 backdrop-saturate-0 backdrop-contrast-200 rounded-2xl ring-1 ring-offset-8 ring-teal/20 ring-offset-navy/50 shadow-white/10 shadow-xl max-w-3xl flex-none mb-4 sm:max-w-5xl w-[76rem] h-[38rem]"
        >
          <div
            id="ft1in"
            className="absolute inset-0 overflow-hidden ring-8 ring-teal/50"
          >
            <div
              id="img1"
              className="ring-8 ring-teal/50 absolute-inset-0 h-full bg-[url('https://www.wendyzhou.se/ezoimgfmt/i0.wp.com/www.wendyzhou.se/blog/wp-content/uploads/2019/08/Financial.png?w=1600&ssl=1&ezimgfmt=ngcb1/notWebP')] bg-cover bg-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
