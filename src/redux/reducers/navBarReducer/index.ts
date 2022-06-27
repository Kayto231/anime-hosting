import { NavBarAction, NavBarListTypes, INavBarState } from "./types";

const inititalState: INavBarState = {
  isIntersection: false,
};

export const navBarReducer = (
  state = inititalState,
  action: NavBarAction
): INavBarState => {
  switch (action.type) {
    case NavBarListTypes.SET_IS_INTERSECTION:
      return {
        ...state,
        isIntersection: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
