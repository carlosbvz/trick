import generateUUID from "../utils/uuidv4"

export default function User(data: {name: string}) {
  this.id = generateUUID();
  this.name = data?.name;
}