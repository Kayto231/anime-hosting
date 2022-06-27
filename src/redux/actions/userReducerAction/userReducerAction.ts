import axios from "axios";
import { Dispatch } from "redux";
import {
  UserAction,
  UserAnimeListTypes,
} from "../../reducers/userReducer/types";

export const FetchAnimeListFunction = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserAnimeListTypes.FETCH_ANIME_LIST });

      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data);

      dispatch({
        type: UserAnimeListTypes.FETCH_ANIME_LIST_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UserAnimeListTypes.FETCH_ANIME_LIST_ERROR,
        payload: "Some error occured",
      });
    }
  };
};
