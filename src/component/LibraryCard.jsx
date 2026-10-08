
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LibraryCard = ({ library }) => {
  if (!library) return null;

  return (
    <Link
      href={`/workout/${library.id}`}
      className="group block w-full max-w-[380px] overflow-hidden rounded-2xl border border-slate-800/60 bg-[#14161d] font-sans text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#ccff00]/40 hover:shadow-2xl"
    >
      {/* Banner Image */}
      <div className="relative h-80 w-full overflow-hidden bg-slate-900">
        <Image
          src={library.image}
          alt={library.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* View Details */}
        <div className="absolute bottom-4 right-4 translate-y-3 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase tracking-wide text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Details →
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Group Badges */}
        <div className="flex flex-wrap gap-2">
          {library.muscleGroups?.map((muscle, idx) => (
            <span
              key={idx}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-sm"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-black uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#ccff00]">
          {library.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-slate-400">
          {library.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-slate-800/80" />

        {/* Metrics */}
        <div className="space-y-2 text-sm font-medium text-slate-300">

          {/* Duration */}
          <div className="flex items-center gap-2 rounded-lg px-1 py-2 transition-colors group-hover:text-white">
            <svg
              className="h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>{library.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2 rounded-lg px-1 py-2">
            <svg
              className="h-4 w-4 text-slate-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.431.67-.654 1.484-.777 2.219-.133.794-.133 1.583-.133 2.372 0 .1 0 .2.002.3a10.97 10.97 0 00-1.125-1.157 1 1 0 00-1.472 1.34c.725.798 1.432 1.625 1.765 2.684.343 1.092.176 2.333-.374 3.328-.567 1.026-1.554 1.782-2.656 2.08a6.994 6.994 0 01-2.91-.082 1 1 0 00-1.157.854 7.002 7.002 0 001.378 4.793 1 1 0 001.34.22c.983-.655 1.968-1.31 2.952-1.965a12.032 12.032 0 002.668-2.316c1.077-1.258 1.747-2.825 1.747-4.52 0-1.232-.387-2.42-1.012-3.414a1 1 0 00-.098-.135z"
                clipRule="evenodd"
              />
            </svg>

            <span>{library.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 rounded-lg px-1 py-2">
            <svg
              className="h-4 w-4 text-[#ccff00]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.838 1.688l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>

            <span className="font-semibold text-white">
              {library.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;

