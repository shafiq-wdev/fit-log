
import Image from "next/image";
import Link from "next/link";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#0b0c0f] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#15171c]">

        <div className="grid min-h-[350px] grid-cols-1 items-center md:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 px-6 py-12 sm:px-10 md:px-12 lg:px-14">

            {/* Small Label */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff00]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b7ff00]">
                Workout Library
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[550px] text-4xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-5xl lg:text-[52px]">
              Train with intent.
              <br />
              Log every set.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[470px] text-sm leading-6 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <Link
              href="/workouts"
              className="group mt-6 inline-flex items-center gap-2 rounded-md bg-[#b7ff00] px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-[#c7ff40] hover:shadow-[0_0_25px_rgba(183,255,0,0.2)]"
            >
              Browse Workouts

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6"
                />
              </svg>
            </Link>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-[280px] items-center justify-center md:h-full">

            {/* Background Glow */}
            <div className="absolute right-[20%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#b7ff00]/[0.04] blur-3xl" />

            <Image
              src={bannerImage}
              alt="Workout"
              priority
              className="relative z-10 h-full max-h-[320px] w-auto object-contain object-center transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
