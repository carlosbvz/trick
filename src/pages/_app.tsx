import { GameProvider } from "../contexts/GameContext";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthContext from "../contexts/AuthContext";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

function Game(pageProps) {
  return (
    <AmplifyProvider>
      <AuthContext>
        <GameProvider>
          <DefaultLayout>
            <MyApp {...pageProps} />
          </DefaultLayout>
        </GameProvider>
      </AuthContext>
    </AmplifyProvider>
  );
}

export default withAuthenticator(Game);
