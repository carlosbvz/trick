import "../styles/globals.css";
import { GameProvider } from "../contexts/GameContext";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function Game(pageProps) {
  return (
    <GameProvider>
      <MyApp {...pageProps} />
    </GameProvider>
  );
}

export default Game;
