import { useState } from "react";
import Head from "next/head";
import Setup from "../components/Setup";
import GameBoard from "../components/GameBoard";
import Results from "../components/Results";
import User from "../models/User";
import Game from "../models/Game";
import { useGame } from "../contexts/GameContext";
import { GameState } from "../interfaces/GameInterfaces";

function Section() {
  const {
    state: { gameState },
  } = useGame();

  switch (gameState) {
    case GameState.IDDLE:
      return <Setup />;
    case GameState.PLAYING:
      return <GameBoard />;
    case GameState.RESULTS:
      return <Results />;
    default:
      break;
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section />
      </main>
    </div>
  );
}
