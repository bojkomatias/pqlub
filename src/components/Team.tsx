import { LinkIcon } from "@heroicons/react/20/solid";

export default function Team() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="max-w-7xl mx-auto my-24">
        <h1>the papirrines,</h1>
        <h2>The ones who do the crafting.</h2>
        <h3>We are a group of engineers, who love solving problems.</h3>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-4 border-dashed rounded-2xl">
          <div className="h-[35rem]" />
        </div>

        <div className="flex items-center justify-around my-24">
          <div>
            <div className="rounded-full border-4 border-dashed h-48 w-48" />
            <h1>Amilcar Rey</h1>
            <span className="bg-black px-2 text-orange uppercase text-xl">
              Co Founder / CTO
            </span>
          </div>
          <div>
            <div className="rounded-full border-4 border-dashed h-48 w-48" />
            <h1>Matias Bojko</h1>
            <span className="bg-black px-2 text-orange uppercase text-xl">
              Co Founder / CEO
            </span>
          </div>
          <div>
            <div className="rounded-full border-4 border-dashed h-48 w-48" />
            <h1>Nicolas Horn</h1>
            <span className="ml-24 -mt-6 mb-4 rounded-full px-4 py-1 bg-gray-300/20 ring-1 ring-gray-300/60 flex w-fit items-center gap-3">
              <LinkIcon className="h-4 w-4 mt-px" />
              nicohorn.com
            </span>
            <span className="bg-black px-2 text-orange uppercase text-xl">
              Co Founder / CFO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
