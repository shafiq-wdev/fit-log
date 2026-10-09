import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

export const instant = false;

const getLibrary = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error("Error fetching library data:", error);
    return null;
  }
};

const Page = async ({ params }) => {
  const resolvedParams = await params;

  if (!resolvedParams?.id) {
    notFound();
  }

  const { id } = resolvedParams;

  const libraryData = await getLibrary();

  if (!libraryData || !Array.isArray(libraryData)) {
    notFound();
  }

  const library = libraryData.find((item) => String(item.id) === String(id));

  if (!library) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-3 py-6 text-white sm:px-5 sm:py-8">
      <div className="mx-auto max-w-7xl p-2 sm:p-4">
        {/* Main Card */}
        <div className="grid gap-5 p-3 sm:p-4 lg:grid-cols-[1fr_1fr] lg:gap-7">
          {/* Workout Image */}
          <div className="relative min-h-[300px] overflow-hidden rounded-lg bg-[#171a20] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src={library.image}
              alt={library.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Workout Details */}
          <div className="flex min-w-0 flex-col gap-4 py-1">
            {/* Heading */}
            <div>
              <h1 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                {library.name}
              </h1>

              <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
                {library.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-3 flex flex-wrap gap-2">
                {library.muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#b7ff00] px-3 py-1 text-[10px] font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* Workout Information */}
            <div className="overflow-hidden rounded-lg border border-[#252933] bg-[#151820]">
              {[
                { label: "Equipment", value: library.equipment },
                { label: "Difficulty", value: library.difficulty },
                { label: "Sets", value: library.sets },
                { label: "Duration", value: `${library.duration} min` },
                { label: "Calories", value: `${library.caloriesBurned} kcal` },
                { label: "Rating", value: library.rating },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`flex min-h-9 items-center justify-between gap-4 px-3 py-2 ${
                    index !== 0 ? "border-t border-[#252933]" : ""
                  }`}
                >
                  <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                    {item.label}
                  </span>

                  <span className="text-right text-xs font-medium text-gray-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              {Array.isArray(library.instructions) ? (
                <ol className="mt-2 list-inside list-decimal space-y-2 text-xs leading-5 text-gray-400">
                  {library.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              ) : (
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {library.instructions}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
              <button

                type="button"
                
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#b7ff00] px-4 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#caff36]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                Add to today's plan
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#303541] px-4 py-2.5 text-[11px] font-medium text-gray-300 transition hover:border-[#b7ff00] hover:text-[#b7ff00]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z" />
                </svg>
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
