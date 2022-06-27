import { Dispatch } from "redux";
import {
  NavBarAction,
  NavBarListTypes,
} from "../../reducers/navBarReducer/types";

export const SetNavBarStyle = (inInter: boolean) => {
  return (dispatch: Dispatch<NavBarAction>) => {
    // const state = getState();
    // console.log(state);
    dispatch({
      type: NavBarListTypes.SET_IS_INTERSECTION,
      payload: inInter,
    });
  };
};
