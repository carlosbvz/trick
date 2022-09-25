import { useState } from "react";
import Head from "next/head";
import Setup from "../components/Setup";
import GameBoard from "../components/GameBoard";
import Results from "../components/Results";
import CreateGame from "../components/CreateGame";
import User from "../models/User";
import Game from "../models/Game";
import { useGame } from "../contexts/GameContext";
import { GameState } from "../interfaces/GameInterfaces";
import { NavBar, MarketingFooter } from "../ui-components";

function Section() {
  const {
    state: { gameState },
  } = useGame();

  switch (gameState) {
    case GameState.IDDLE:
      return <Setup />;
    case GameState.CREATING:
      return <CreateGame />;
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
        <title>Trick</title>
        <meta name="description" content="Trick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App"></div>

      <Section />
    </div>
  );
}
