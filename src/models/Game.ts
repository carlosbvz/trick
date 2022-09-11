import generateUUID from "../utils/uuidv4"

interface GameType {
  totalRounds: number;
  totalPlayers: number;
}

export default function Game(data:GameType) {
  this.id = generateUUID();
  this.totalRounds = data?.totalRounds;
  this.totalPlayers = data?.totalPlayers;
}