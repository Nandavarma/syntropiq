"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
type Path = {
  id: string;
  name: string;
  description: string;
};
const pathData: Path[] = [
  { id: "1", name: "Web development", description: "this is a good course." },
  {
    id: "2",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "3",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "4",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "5",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "6",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "7",
    name: "Python development",
    description: "this is a good python course.",
  },
  {
    id: "8",
    name: "Python development",
    description: "this is a good python course.",
  },
];
export default function LearnPage() {
  const [pathList, setPathList] = useState<Path[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPathList(pathData);
    }, 2000);
    console.log("useeff");
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="w-full md:my-8 my-6">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-wrap max-w-prose">
          Choose your path. Explore with ease.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-auto">
        {pathList &&
          pathList.map((value) => (
            <Link href={`/learn/path`} key={value.id}>
              <div className="flex flex-col justify-between rounded-3xl p-6 h-64 w-full bg-white/10 border border-white/10 backdrop-blur-md shadow-lg hover:scale-[1.02] transition">
                <div className="flex items-center justify-center h-1/2">
                  <h1 className="text-xl md:text-2xl font-bold text-center text-white">
                    {value.name}
                  </h1>
                </div>
                <div className="flex items-end justify-center h-1/2">
                  <p className="text-sm text-gray-300 text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
