import generateUUID from "../utils/uuidv4"


interface Update {
  bet: number;
  isWinner: number;
}
interface RoundType extends Update {
  playerId: number;
  gameid: number;
}

export default function Round(data: RoundType) {
  this.id = generateUUID();
  this.playerId = data?.playerId;
  this.gameId = data?.gameid;
}

Round.prototype.update = function(data: Update) {
  this.bet = data?.bet;
  this.isWinner = data?.isWinner;
}