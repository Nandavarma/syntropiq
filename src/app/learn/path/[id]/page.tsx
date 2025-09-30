"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";

export default function PathPage() {
  const { id } = useParams();
  const pathList = useSelector((state: RootState) => state.path.paths);
  const path = pathList.find((p) => p.id === id);

  if (!path) return notFound();

  return (
    <div className="min-h-screen w-full pb-10">
      <div className="relative mx-4 mt-8 min-h-[200px] rounded-3xl overflow-hidden shadow-lg md:mx-8 md:min-h-[500px]">
        <Image
          src="/images/goals-image.png"
          alt={path.name}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex h-full flex-col justify-center m-6 p-6 rounded-2xl text-white md:w-2/5 bg-gradient-to-r from-black/70 via-black/60 to-black/40">
          <h1 className="text-2xl font-bold leading-tight md:text-4xl">
            {path.name}
          </h1>
          <p className="mt-3 hidden max-w-prose text-gray-300 md:block md:text-lg">
            {path.description}
          </p>
          <h4 className="pt-3 pb-1 text-xl font-bold">
            Prerequisites : Javascript, RESTful API
          </h4>
        </div>
      </div>
      <div className="my-10 w-full md:my-8">
        <h1 className="mx-auto max-w-fit text-center text-3xl font-bold md:text-4xl">
          Small Steps, Big Gains
        </h1>
      </div>
    </div>
  );
}
