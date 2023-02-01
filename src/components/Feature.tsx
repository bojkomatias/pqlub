import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="w-full bg-gradient-to-tl from-[#034f6a] to-[#002837] text-slate-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl mt-24">
          P implies Q, <br /> as precision leads to quality results.
        </h2>
        <h3 className="text-2xl font-thin font-serif">
          Our software factory uses precision to drive performance, ensuring
          every solution delivered meets the highest standards of quality.
        </h3>
        <div className="w-full grid-cols-3 grid gap-8 mx-auto my-24">
          <div className="col-span-2 rounded-lg h-96 text-center ring-1 hover:ring-[#bfdb38] ring-[#fc7300]/50 p-12">
            <h3 className="text-xl">Architect your solution</h3>
          </div>
          <div className="col-span-1 rounded-lg h-96 text-center ring-1 ring-slate-50/5 hover:ring-slate-100/30 p-12">
            <h3 className="text-xl">Consult on software technologies</h3>
          </div>
          <div className="col-span-1 rounded-lg h-96 text-center ring-1 ring-slate-50/5 hover:ring-slate-100/30 p-12">
            <h3 className="text-xl">Coach your team</h3>
          </div>
          <div className="col-span-2 rounded-lg h-96 text-center ring-1 ring-slate-50/5 hover:ring-slate-100/30 p-12">
            <h3 className="text-xl">Build a brand new business</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
