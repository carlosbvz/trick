/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  description?: string | null,
  playerGamesId?: string | null,
};

export type ModelGameConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
  playerGamesId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  description?: string | null,
  owner?: Player | null,
  createdAt: string,
  updatedAt: string,
  playerGamesId?: string | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  email: string,
  name: string,
  games?: ModelGameConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type UpdateGameInput = {
  id: string,
  description?: string | null,
  playerGamesId?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  email: string,
  name: string,
};

export type ModelPlayerConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  email?: string | null,
  name?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
  playerGamesId?: ModelIDInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      description?: string | null,
      owner?:  {
        __typename: "Player",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      playerGamesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlayerByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlayerByEmailQuery = {
  playerByEmail?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    description?: string | null,
    owner?:  {
      __typename: "Player",
      id: string,
      email: string,
      name: string,
      games?:  {
        __typename: "ModelGameConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    playerGamesId?: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    email: string,
    name: string,
    games?:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        playerGamesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
