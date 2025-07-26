"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { pathData } from "@/lib/data";
import type { RootState, AppDispatch } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { setPath } from "@/store/slices/pathSlice";
export default function LearnPage() {
  const dispatch = useDispatch<AppDispatch>();
  const pathList = useSelector((state: RootState) => state.path.paths);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(setPath(pathData));
    setLoading(false);
  }, [dispatch]);
  if (loading) return <h1>Loading.....</h1>;
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
            <Link href={`/learn/path/${value.id}`} key={value.id}>
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
