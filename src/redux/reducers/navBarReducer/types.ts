export interface INavBarState {
  isIntersection: boolean;
}

export enum NavBarListTypes {
  SET_IS_INTERSECTION = "SET_IS_INTERSECTION",
}

type SetNavBarIntersectionAction = {
  type: string;
  payload: boolean;
};

export type NavBarAction = SetNavBarIntersectionAction;
