import React, { useState } from "react";
import WesternStandings from "../components/WesternStandings";
import EasternStandings from "../components/EasternStandings";
import { Trophy } from "lucide-react";

const Standings = () => {
  const [conference, setConference] = useState("west");

  return (
    <section className="mt-28 sm:mt-32 md:mt-36 lg:mt-40 w-full flex justify-center px-3 sm:px-6">
      <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:max-w-5xl">
        <div className="rounded-xl bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] border border-gray-400/20 p-4 sm:p-5 md:p-6 w-full">

          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <p className="font-bold text-lg sm:text-xl md:text-2xl">
                Standings
              </p>
            </div>

            <div className="flex bg-slate-700/50 rounded-xl p-1 w-full sm:w-auto">
              <button
                onClick={() => setConference("west")}
                className={`flex-1 sm:flex-none font-semibold px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base transition-colors ${
                  conference === "west"
                    ? "bg-blue-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Western
              </button>
              <button
                onClick={() => setConference("east")}
                className={`flex-1 sm:flex-none font-semibold px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base transition-colors ${
                  conference === "east"
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Eastern
              </button>
            </div>
          </div>

          {/* Table header */}
          <div className="mt-3">
            <hr className="border-gray-400/20" />

            <div className="mt-2 flex justify-between items-center text-[15px] md:text-md">
              <div className="ml-2 flex gap-3 sm:gap-5 items-center">
                <p className="font-bold text-gray-400 uppercase">Rank</p>
                <p className="font-bold text-gray-400 uppercase">Team</p>
              </div>

              <div className="flex mr-2 gap-2 sm:gap-4 md:gap-5 items-center">
                <p className="font-bold text-gray-400 uppercase">W-L</p>
                <p className="font-bold text-gray-400 uppercase">PCT</p>

                <p className="hidden md:block font-bold text-gray-400 uppercase">
                  Home
                </p>
                <p className="hidden md:block font-bold text-gray-400 uppercase">
                  Away
                </p>

                <p className="hidden lg:block font-bold text-gray-400 uppercase">
                  Streak
                </p>
                <p className="hidden lg:block font-bold text-gray-400 uppercase">
                  PPG
                </p>
                <p className="hidden lg:block font-bold text-gray-400 uppercase">
                  OPPG
                </p>
              </div>
            </div>

            <hr className="border-gray-400/20 mt-2 mb-2" />
          </div>

          {/* Standings */}
          <div className="mt-2">
            {conference === "west" ? (
              <WesternStandings />
            ) : (
              <EasternStandings />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standings;
