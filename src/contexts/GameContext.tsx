import * as React from "react";
import { GameState } from "../interfaces/GameInterfaces";

type Action = { type: "UPDATE_GAME_STATE"; payload: any };
type Dispatch = (action: Action) => void;
type State = { gameState: GameState };
type GameProviderProps = { children: React.ReactNode };

const GameStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function gameReducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_GAME_STATE": {
      return { gameState: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = React.useReducer(gameReducer, {
    gameState: GameState.IDDLE,
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
}

function useGame() {
  const context = React.useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

export { GameProvider, useGame };
