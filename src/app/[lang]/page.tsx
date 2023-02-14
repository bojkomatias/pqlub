import { getDictionary } from "../../../dictionaries/get-dictionary";
import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
import Cta from "@/components/Cta";
import Loader from "@/components/Loader";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="w-screen antialiased flex flex-col items-center">
      <Loader />
      <Hero dictionary={dictionary.hero} />
      <Divider />
      <FeatureTwo dictionary={dictionary["feature-2"]} />
      <FeatureThree dictionary={dictionary["feature-3"]} />
      <Team dictionary={dictionary.team} />
      <Cta dictionary={dictionary.cta} />
    </main>
  );
}
