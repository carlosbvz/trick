import { useEffect, useState } from "react";
import Head from "next/head";
import Setup from "../components/sections/Setup";
import GameBoard from "../components/sections/GameBoard";
import Results from "../components/sections/Results";
import CreateProfile from "../components/sections/CreateProfile";
import CreateGame from "../components/sections/CreateGame";
import { useGame } from "../contexts/GameContext";
import { GameState } from "../interfaces/GameInterfaces";
import { useUser } from "../contexts/AuthContext";

function Section() {
  const {
    state: { gameState },
  } = useGame();

  switch (gameState) {
    case GameState.MISSIN_PROFILE:
      return <CreateProfile />;
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useUser();
  const {
    dispatch,
    state: { gameState },
  } = useGame();

  useEffect(() => {
    if (!user) return;
    if (gameState !== GameState.IDDLE) return;

    let newGameState = GameState.IDDLE;
    if (!user?.hasProfile) {
      newGameState = GameState.MISSIN_PROFILE;
    }

    dispatch({ type: "UPDATE_GAME_STATE", payload: newGameState });
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>Trick</title>
        <meta name="description" content="Trick" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? <p>Loading...</p> : <Section />}
    </div>
  );
}
