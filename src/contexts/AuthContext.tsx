/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { PlayerByEmailQuery } from "../API";

interface UserAttributes {
  name?: string;
  email?: string;
  family_name?: string;
}
interface CognitoUserExt extends CognitoUser {
  attributes?: UserAttributes;
  hasProfile?: boolean;
}
interface UserContextType {
  user: CognitoUserExt | null;
}

const UserContext = createContext<{ user: CognitoUserExt }>({ user: null });

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  // Controls the user's data status
  const [user, setUser] = useState<CognitoUserExt>(null);

  /**
   *
   */
  const checkUser = useCallback(async () => {
    try {
      Auth.currentAuthenticatedUser({
        bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
      }).then(async (user) => {
        if (!user) return;

        // Loading profile data
        const userEmail = user?.attributes?.email;
        const player = (await API.graphql({
          query: queries.playerByEmail,
          variables: { email: "userEmail" },
        })) as GraphQLResult<PlayerByEmailQuery>;

        user.hasProfile = !!(
          player?.data?.playerByEmail?.items?.[0]?.email === userEmail
        );
        setUser(user);
      });
    } catch (err) {
      setUser(null);
    }
  }, []);

  // Checks for user on every load
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
