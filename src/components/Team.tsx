"use client";
import { LinkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  website: string;
  image?: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    name: "Amilcar Rey",
    role: "Co Founder / CTO",
    website: "amilcarrey.ar",
    image: "amilcar.jpeg",
  },
  {
    name: "Matias Bojko",
    role: "Co Founder / CEO",
    website: "matiasbojko.com",
    image: "mati.png",
  },
  {
    name: "Nicolas Horn",
    role: "Co Founder / CFO",
    website: "nicohorn.com",
    image: "nicolas.jpg",
  },
];

export default function Team() {
  const memberDetails = ({
    name = "default",
    image,
    role,
    website,
  }: TeamMember) => {
    return (
      <div className="flex flex-col items-center justify-around gap-4">
        <div className={`rounded-full border-4 border-dashed h-48 w-48`}>
          <Image
            src={`/images/${image}`}
            width={200}
            height={200}
            className={`aspect-square w-full rounded-full object-cover`}
            alt={""}
          />
        </div>
        <p className="font-serif text-3xl">{name}</p>
        <span className="bg-black px-2 text-orange uppercase text-xl">
          {role}
        </span>
        <span className="mb-4 rounded-full px-4 py-1 bg-gray-300/20 ring-1 ring-gray-300/60 flex w-fit items-center gap-3">
          <LinkIcon className="h-4 w-4 mt-px" />
          {website}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="flex flex-col justify-center items-center text-center gap-4 md:items-start max-w-7xl mx-auto my-24">
        <div className="container">
          <h1 className="text-black font-outline-2">the papirrines,</h1>
          <h2>The ones who do the crafting.</h2>
          <h3>We are a group of engineers, who love solving problems.</h3>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8 w-full border-4 border-dashed rounded-2xl">
          <div className="h-[35rem] bg-[url('https://basement.studio/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fobjective-02.8c048b12.jpg&w=3840&q=75')] bg-cover" />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around my-24">
          {TEAM_DATA.map((member) => memberDetails(member))}
        </div>
      </div>
    </div>
  );
}
