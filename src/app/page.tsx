'use client'
import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Logo3d from "@/components/Logo3d";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="w-full antialiased flex flex-col items-center">
      {/* <Logo3d clasName='h-screen w-screen' /> */}
      <Hero />
      <Divider />
      <Feature />
      <Team />
      <Cta />
    </main>
  );
}
