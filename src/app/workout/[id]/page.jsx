
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

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

  const library = libraryData.find(
    (item) => String(item.id) === String(id)
  );

  if (!library) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4 py-10 md:py-14">

      <div className="container mx-auto max-w-6xl">

        {/* Main Card */}
        <div className="overflow-hidden rounded-[2rem] border border-base-300/70 bg-base-100 shadow-2xl">

          <div className="grid lg:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[620px]">

              <Image
                src={library.image}
                alt={library.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Difficulty Badge */}
              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/20 bg-black/50 px-5 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-xl">
                  {library.difficulty}
                </span>
              </div>

              {/* Image Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">

                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                  Workout
                </p>

                <h1 className="text-3xl font-black tracking-tight md:text-4xl">
                  {library.name}
                </h1>

              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">

              {/* Heading */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Workout Details
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  {library.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-base-content/60 sm:text-base">
                  {library.description}
                </p>
              </div>

              {/* Muscle Groups */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-base-content/50">
                  Target Muscles
                </p>

                <div className="flex flex-wrap gap-2">
                  {library.muscleGroups?.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/20"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

                {/* Duration */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium text-base-content/50">
                    Duration
                  </p>

                  <p className="mt-2 text-lg font-black">
                    {library.duration}
                  </p>

                  <p className="text-xs text-base-content/50">
                    minutes
                  </p>
                </div>

                {/* Calories */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium text-base-content/50">
                    Calories
                  </p>

                  <p className="mt-2 text-lg font-black">
                    {library.caloriesBurned}
                  </p>

                  <p className="text-xs text-base-content/50">
                    kcal
                  </p>
                </div>

                {/* Sets */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium text-base-content/50">
                    Sets
                  </p>

                  <p className="mt-2 text-lg font-black">
                    {library.sets}
                  </p>

                  <p className="text-xs text-base-content/50">
                    total
                  </p>
                </div>

                {/* Rating */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-medium text-base-content/50">
                    Rating
                  </p>

                  <p className="mt-2 text-lg font-black">
                    ⭐ {library.rating}
                  </p>

                  <p className="text-xs text-base-content/50">
                    excellent
                  </p>
                </div>

              </div>

              {/* Equipment */}
              <div className="mt-5 rounded-2xl border border-base-300 bg-base-200/50 p-5">
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                      Equipment
                    </p>

                    <p className="mt-2 font-bold">
                      {library.equipment}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl">
                    🏋️
                  </div>

                </div>
              </div>

              {/* Instructions */}
              <div className="mt-5 rounded-2xl border border-base-300 bg-base-200/50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
                  Instructions
                </p>

                <p className="mt-2 text-sm leading-7 text-base-content/70">
                  {library.instructions}
                </p>

              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button className="btn btn-primary h-12 flex-1 rounded-xl border-0 px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  Add to today&apos;s plan
                </button>

                <button className="btn btn-outline h-12 flex-1 rounded-xl px-6 font-bold transition-all duration-300 hover:-translate-y-0.5">
                  Save for later
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Page;

