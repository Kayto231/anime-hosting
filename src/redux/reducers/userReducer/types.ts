type IanimeList = {
  list: object;
};

export enum UserAnimeListTypes {
  FETCH_ANIME_LIST = "FETCH_ANIME_LIST",
  FETCH_ANIME_LIST_SUCCESS = "FETCH_ANIME_LIST_SUCCESS",
  FETCH_ANIME_LIST_ERROR = "FETCH_ANIME_LIST_ERROR",
}

interface FetchAnimeListAction {
  type: UserAnimeListTypes.FETCH_ANIME_LIST;
}
interface FetchAnimeListSuccessAction {
  type: UserAnimeListTypes.FETCH_ANIME_LIST_SUCCESS;
  payload: any[];
}
interface FetchAnimeListErrorAction {
  type: UserAnimeListTypes.FETCH_ANIME_LIST_ERROR;
  payload: null | string;
}

export type UserAction =
  | FetchAnimeListAction
  | FetchAnimeListSuccessAction
  | FetchAnimeListErrorAction;

export interface IuserState {
  animeList: Array<IanimeList>;
  isLoading: boolean;
  error: string | null;
}
