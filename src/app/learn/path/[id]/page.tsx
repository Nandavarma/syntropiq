"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { notFound, useParams } from "next/navigation";

export default function PathPage() {
  const { id } = useParams();
  const pathList = useSelector((state: RootState) => state.path.paths);
  const path = pathList.find((p) => p.id === id);

  if (!path) return notFound();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">{path.name}</h1>
      <p className="mt-2 text-gray-300">{path.description}</p>
    </div>
  );
}
