import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full antialiased flex flex-col items-center">
      <Hero />
      <Divider />
      <Feature />
      <Team />
    </main>
  );
}
