import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { BalldontlieAPI } from "@balldontlie/sdk";

const GamesContext = createContext(null);

function getTodayYYYYMMDD() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);
  const [loadingGames, setLoadingGames] = useState(false);
  const [gamesError, setGamesError] = useState(null);

  const apiRef = useRef(null);

  // create SDK instance once
  if (!apiRef.current) {
    apiRef.current = new BalldontlieAPI({
      apiKey: import.meta.env.VITE_BALLDONTLIE_KEY,
    });
  }

  const loadTodaysGames = async () => {
    try {
      setLoadingGames(true);
      setGamesError(null);

      const today = getTodayYYYYMMDD();

      const res = await apiRef.current.nba.getGames({
        dates: [today],
        per_page: 100,
      });

      setGames(res?.data ?? []);
    } catch (e) {
      setGamesError(e?.message ?? "Too many requests, please try again later.");
      setGames([]);
    } finally {
      setLoadingGames(false);
    }
  };

  useEffect(() => {
  let cancelled = false;

  const loadTodaysGames = async () => {
    try {
      setLoadingGames(true);
      setGamesError(null);

      const today = getTodayYYYYMMDD();

      const res = await apiRef.current.nba.getGames({
        dates: [today],
        per_page: 100,
      });

      if (!cancelled) setGames(res?.data ?? []);
    } catch (e) {
      if (!cancelled) {
        setGamesError(e?.message ?? "Too many requests, please try again later.");
        setGames([]);
      }
    } finally {
      if (!cancelled) setLoadingGames(false);
    }
  };

  // initial load
  loadTodaysGames();

 
  const id = setInterval(loadTodaysGames, 60000);

  return () => {
    cancelled = true;
    clearInterval(id);
  };
}, []);


  return (
    <GamesContext.Provider
      value={{
        games,
        loadingGames,
        gamesError,
        refreshGames: loadTodaysGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export function useGames() {
  const ctx = useContext(GamesContext);
  if (!ctx) throw new Error("useGames must be used within a GamesProvider");
  return ctx;
}
