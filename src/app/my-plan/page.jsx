import Link from "next/link";
import React from "react";

const PlanPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="font-oswald font-bold text-2xl mt-7">MY PLAN</h1>
        <p className="text-inter text-mauve-500 mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="mt-7">calories</div>

      <div className="w-full text-white mt-10">
        {/* Tabs */}
        <div className="tabs tabs-lift w-full">
          {/* Today's Plan Tab */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab !h-10 !px-5 !text-xs !font-medium
        !text-gray-500 transition-all duration-300
        checked:!border-[#252832]
        checked:!bg-[#1a1c23]
        checked:!text-[#b7ff00]"
            aria-label="Today's Plan"
            defaultChecked
          />

          <div
            className="tab-content flex min-h-[300px] flex-col
        items-center justify-center rounded-b-xl
        rounded-tr-xl border border-dashed
        border-[#252832] bg-[#101115] p-6 text-center
        md:min-h-[380px]"
          >
            {/* Empty State Icon */}
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center
        rounded-xl border border-[#252832] bg-[#15171d]"
            >
             
            </div>

            <h2 className="text-sm font-extrabold tracking-wide text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/workouts"
              className="mt-6 inline-flex items-center justify-center
          rounded-full bg-[#b7ff00] px-6 py-2.5
          text-[11px] font-bold text-black
          shadow-[0_0_18px_rgba(183,255,0,0.15)]
          transition-all duration-300
          hover:scale-105 hover:bg-[#caff36]"
            >
              Go to Workouts
            </Link>
          </div>

          {/* Saved Tab */}
          <input
            type="radio"
            name="my_tabs_3"
            className="tab !h-10 !px-5 !text-xs !font-medium
        !text-gray-500 transition-all duration-300
        checked:!border-[#252832]
        checked:!bg-[#1a1c23]
        checked:!text-[#b7ff00]"
            aria-label="Saved"
          />

         
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
