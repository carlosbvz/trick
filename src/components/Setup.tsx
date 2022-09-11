import { useState } from "react";

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 6;

export default function Setup() {
  const [playersCount, setPlayersCount] = useState(3);

  return (
    <div>
      <h1>Players #:</h1>
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <br />
      <button>Next</button>
    </div>
  );
}
