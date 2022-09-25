import { useGame } from "../contexts/GameContext";

export default function Setup() {
  const { dispatch } = useGame();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Trick Mothafocka!</h1>
      <button
        onClick={() => dispatch({ type: "UPDATE_GAME_STATE", payload: "data" })}
      >
        Create Game
      </button>
    </div>
  );
}
