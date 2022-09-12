import "../styles/globals.css";
import { GameProvider } from "../contexts/GameContext";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

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
