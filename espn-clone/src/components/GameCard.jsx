import React from "react";

export const GameCard = ({ game }) => {
  const home = game.home_team;
  const away = game.visitor_team;

  const homeScore = game.home_team_score;
  const awayScore = game.visitor_team_score;
  const homeWinning = homeScore > awayScore;
  const awayWinning = awayScore > homeScore;


  const NBA_TEAM_LOGOS = {
    ATL: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
    BOS: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
    BKN: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
    CHA: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
    CHI: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
    CLE: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
    DAL: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    DEN: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
    DET: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
    GSW: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    HOU: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    IND: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
    LAC: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    LAL: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    MEM: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    MIA: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
    MIL: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
    MIN: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
    NOP: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
    NYK: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
    OKC: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
    ORL: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
    PHI: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
    PHX: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
    POR: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
    SAC: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
    SAS: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
    TOR: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
    UTA: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
    WAS: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
  };

  const extractClock = (time) => {
    if (!time) return "";
    const match = time.match(/\d{1,2}:\d{2}(?:\.\d+)?/);
    return match ? match[0] : "";
  };

  const formatToEST = (utcString) => {
    if (!utcString) return "";

    return new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(utcString));
  };


  return (
    <div className="w-full max-w-sm md:max-w-md transition-transform ease-out cursor-pointer md:hover:scale-105">
      <div className="rounded-2xl border border-white/10 bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] p-3 sm:p-4 text-white shadow-lg">

        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-blue-500/15 px-2.5 sm:px-3 py-1">
            <span className={game.status === "Final" ? "" : "h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"} />
            <p className="text-md font-bold text-blue-200 whitespace-nowrap">
              {game.period === 0 ? `${formatToEST(game.datetime)} EST` : game.status}
            </p>
            <p className="text-md font-semibold text-yellow-white">
              {extractClock(game.time)}</p>
          </div>
        </div>

        {/* Teams */}
        <div className="mt-3 space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={NBA_TEAM_LOGOS[home.abbreviation]}
                alt="Home-Team"
                className="h-6 w-6 sm:h-9 sm:w-9 object-contain shrink-0"
              />
              <div className=" flex flex-col leading-tight min-w-0 items-center">
                <p className="font-semibold truncate text-sm">{home.city}</p>
                <p className="text-md text-gray-400 truncate">{home.name}</p>
              </div>
            </div>
            <p className={`font-bold shrink-0 text-base ${homeWinning ? "text-white" : "text-gray-400"}`}>{homeScore}</p>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={NBA_TEAM_LOGOS[away.abbreviation]}
                alt="Away Team"
                className="h-6 w-6 sm:h-9 sm:w-9 object-contain shrink-0"
              />
              <div className="flex flex-col leading-tight min-w-0 items-center">
                <p className="font-semibold truncate text-sm">{away.city}</p>
                <p className="text-md text-gray-400 truncate">{away.name}</p>
              </div>
            </div>
            <p className={`font-bold shrink-0 text-base ${awayWinning ? "text-white" : "text-gray-400"}`}>{awayScore}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 h-px w-full bg-white/10" />
      </div>
    </div>
  );
};
