"use client";
import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="w-full antialiased flex flex-col items-center">
      <Hero />
      <Divider />
      {/* <Feature /> */}
      <FeatureTwo />
      <FeatureThree />
      <Team />
      <Cta />
    </main>
  );
}
