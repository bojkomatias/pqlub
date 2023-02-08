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
      "We cover the entire development lifecycle and create custom solutions that meet clients' unique needs to ensure project success.",
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

import gsap, { Power2, Power1 } from "gsap";
import { useEffect } from "react";

export default function FeatureThree() {
  useEffect(() => {
    gsap.utils.toArray("#third").forEach((section: any) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: () => "+=100+=" + section.offsetWidth,
          scrub: true,
          anticipatePin: 1,
          // once: true,
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
          start: "top top",
          end: () => "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          markers: true,
        },
        defaults: { ease: Power1.easeInOut },
      })
      .fromTo("#ft2in", { yPercent: 100 }, { yPercent: 0 })
      .fromTo("#img2", { yPercent: -100 }, { yPercent: 0 }, 0);
  }, []);
  return (
    <div id="third" className="relative w-full bg-green py-16 sm:py-24">
      <div id="text2" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1>
            <span className="bg-white invert text-black">{"p -> q,"}</span>
            <br />
            as precision leads to quality results.
          </h1>

          <h2 className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </h2>
        </div>
      </div>
      <div
        id="ft2out"
        className="relative overflow-hidden mt-16 h-[30rem] max-w-6xl w-full mx-auto rounded-2xl ring-1 ring-offset-8 border-dashed ring-black/20 ring-offset-green/50 bg-navy shadow-lg"
      >
        <div id="ft2in" className="absolute inset-0 overflow-hidden">
          <div
            id="img2"
            className=" absolute-inset-0 h-full bg-[url('https://linear.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero%404x.15e3a396.jpg&w=3840&q=75')] bg-cover bg-center"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
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
  );
}
