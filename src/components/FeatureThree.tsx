import {
  CogIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  WindowIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Tech consulting.",
    description:
      "We will help your business stay ahead in technology and reach their goals by assessing current systems, identifying areas for improvement, and recommending solutions.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Team growth.",
    description:
      "We will build and expand successful teams by hiring top talent, training and developing employees for your business.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Software engineering.",
    description:
      "We cover the entire development lifecycle and create custom solutions that meet clients unique needs to ensure project success.",
    icon: CommandLineIcon,
  },
  {
    name: "UI/UX design.",
    description:
      "We will create engaging and intuitive user experiences for software and websites through wireframing, prototyping, and visually stunning designs.",
    icon: WindowIcon,
  },
  {
    name: "DevOps and maintenance.",
    description:
      "We integrate development and operations teams, automate processes, and provide ongoing support to ensure the reliability and performance of software systems.",
    icon: ServerStackIcon,
  },
  {
    name: "Systems engineering.",
    description:
      "We will provide end-to-end solutions for complex systems, improving efficiency and effectiveness through assessment, recommendations, and integration. ",
    icon: CogIcon,
  },
];

import gsap, { Power2 } from "gsap";
import { useEffect } from "react";

export default function FeatureThree() {
  useEffect(() => {
    gsap.utils.toArray("#third").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "top top",
          scrub: true,
          anticipatePin: 1,
          once: true,
        },
        defaults: { ease: Power2.easeInOut },
      });
      tl.fromTo(
        section.querySelector("#text2"),
        { yPercent: -20, scale: 1.2 },
        { yPercent: 0, scale: 1 }
      ).fromTo(
        section.querySelector("#ft2out"),
        { yPercent: 50, opacity: 0, scale: 2 },
        { yPercent: 0, opacity: 1, scale: 1 },
        0
      );
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#third",
          start: "top-=200 top",
        },
        defaults: { ease: Power2.easeIn },
      })
      .fromTo(
        "#ft2in",
        { yPercent: 100, xPercent: -100 },
        { yPercent: 0, xPercent: 0, duration: 1.1 }
      )
      .fromTo(
        "#img2",
        { yPercent: -100, xPercent: 100 },
        { yPercent: 0, xPercent: 0, duration: 1.1 },
        0
      );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#third",
          start: "top center",
          end: "center center",
          scrub: true,
          once: true,
        },
        defaults: { ease: Power2.easeInOut },
      })
      .fromTo(
        "#ftsection",
        { opacity: 0, yPercent: 60, scale: 1.2 },
        { opacity: 1, yPercent: 0, scale: 1 }
      );
  }, []);
  return (
    <div
      id="third"
      className="relative w-full bg-white isolate overflow-hidden"
    >
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-[100px] sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".3"
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
            <stop stopColor="#BFDB38" />
            <stop offset={1} stopColor="#BFDB38" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative w-full py-16 sm:py-24">
        <div id="text2" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-green px-4">
            <h1>
              <span className="bg-white invert text-black">{"p -> q,"}</span>
              <br />
              <p className="mt-4">turning projects into quality products.</p>
            </h1>

            <h2 className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to quality ensures every project is delivered with
              precision and to the highest standards. Partner with us, quality
              is rest assured.
            </h2>
          </div>
        </div>
        <div
          id="ft2out"
          className="relative overflow-hidden mt-16 h-96 max-w-6xl -mx-1 lg:mx-auto lg:rounded-2xl ring-1 ring-offset-8 border-dashed ring-gray-300/80 ring-offset-green/30 bg-navy shadow-2xl shadow-green/50"
        >
          <div
            id="ft2in"
            className="absolute inset-0 overflow-hidden ring-8 ring-green/30 rounded-2xl"
          >
            <div
              id="img2"
              className="rounded-2xl ring-8 ring-green/30 absolute-inset-0 h-full bg-[url('/dashboard.png')] bg-contain bg-top"
            />
          </div>
        </div>

        <div
          id="ftsection"
          className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
        >
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-navy">
                  <feature.icon
                    className="absolute top-1 left-1 h-5 w-5 text-orange"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline font-light text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
