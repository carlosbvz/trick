import { GameProvider } from "../contexts/GameContext";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

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

export default withAuthenticator(Game);
