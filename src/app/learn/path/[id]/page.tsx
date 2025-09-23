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
    <div className="relative mt-8 mx-4 md:mx-8 min-h-[400px] rounded-3xl overflow-hidden shadow-lg">
      <Image
        src="/images/goals-image.png"
        alt={path.name}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-center p-6 md:w-3/5 text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {path.name}
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-300 max-w-prose">
          {path.description}
        </p>
      </div>
    </div>
  );
}
