import generateUUID from "../utils/uuidv4"

interface GameType {
  totalRounds: number;
}

export default function Game(data:GameType) {
  this.id = generateUUID();
  this.totalRounds = data?.totalRounds;
}