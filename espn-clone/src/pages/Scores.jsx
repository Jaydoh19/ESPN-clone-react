import React from "react";
import dayjs from "dayjs";
import { GameCard } from "../components/GameCard";
import { useGames } from "../components/GamesContext";

const Scores = () => {
  const { games, loadingGames, gamesError } = useGames();

  const isLiveGame = (g) =>
    g.status !== "Final" &&
    g.status !== "Scheduled" &&
    g.time !== null &&
    g.time !== undefined &&
    g.time !== "";

  const liveCount = (games ?? []).reduce(
    (count, g) => count + (isLiveGame(g) ? 1 : 0),
    0
  );

  return (
    <section className="mt-32 mb-10 flex flex-col items-center">
      <div className="w-full md:w-3/4 px-6 py-8 md:px-10 md:py-10 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-xl">
            Today's Games {dayjs().format("MMM D, YYYY")}
          </p>

          <div className="flex items-center gap-1 bg-red-500/20 py-1 px-3 rounded-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm text-red-300">{liveCount} Live</p>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Scores and Stats are updated every 5 mins
          </p>
        </div>

        {/* Games */}
        <div className="mt-6 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2">
          {loadingGames && (
            <p className="text-gray-400">Loading today's games...</p>
          )}

          {gamesError && (
            <p className="text-red-400">{gamesError}</p>
          )}

          {!loadingGames && !gamesError && (games ?? []).length === 0 && (
            <p className="text-gray-400">No games today.</p>
          )}

          {!loadingGames &&
            !gamesError &&
            (games ?? []).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Scores;
