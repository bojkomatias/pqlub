"use client";
import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import Cta from "@/components/Cta";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main className="w-full antialiased flex flex-col items-center">
      <Loader />
      <Hero />
      <Divider />
      <FeatureTwo />
      <FeatureThree />
      <Team />
      <Cta />
    </main>
  );
}
