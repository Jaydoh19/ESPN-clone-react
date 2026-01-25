import React from "react";

export const GameCard = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md transition-transform ease-out cursor-pointer md:hover:scale-105">
      <div className="rounded-2xl border border-white/10 bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] p-3 sm:p-4 text-white shadow-lg">
        
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-blue-500/15 px-2.5 sm:px-3 py-1">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500" />
            <p className="text-xs font-bold text-blue-200 whitespace-nowrap">
              9:00 PM ET
            </p>
          </div>
          <p className="text-xs text-gray-500 whitespace-nowrap">ESPN</p>
        </div>

        {/* Teams */}
        <div className="mt-3 space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/lakers.png"
                alt="Home-Team"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0"
              />
              <div className="leading-tight min-w-0">
                <p className="font-semibold truncate">Los Angeles</p>
                <p className="text-sm text-gray-400 truncate">Lakers</p>
              </div>
            </div>
            <p className="text-gray-600 shrink-0">-</p>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src="/clippers.svg"
                alt="Away Team"
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0"
              />
              <div className="leading-tight min-w-0">
                <p className="font-semibold truncate">Los Angeles</p>
                <p className="text-sm text-gray-400 truncate">Clippers</p>
              </div>
            </div>
            <p className="text-gray-600 shrink-0">-</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-3 h-px w-full bg-white/10" />

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-500">
          Washington Arena
        </p>
      </div>
    </div>
  );
};
