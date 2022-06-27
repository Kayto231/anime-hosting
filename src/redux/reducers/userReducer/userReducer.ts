import { IuserState, UserAction, UserAnimeListTypes } from "./types";

const initialState: IuserState = {
  animeList: [],
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): IuserState => {
  switch (action.type) {
    case UserAnimeListTypes.FETCH_ANIME_LIST:
      return {
        ...state,
        animeList: [],
        isLoading: true,
        error: null,
      };
    case UserAnimeListTypes.FETCH_ANIME_LIST_SUCCESS:
      return {
        ...state,
        animeList: action.payload,
        isLoading: false,
        error: null,
      };
    case UserAnimeListTypes.FETCH_ANIME_LIST_ERROR:
      return {
        ...state,
        animeList: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
