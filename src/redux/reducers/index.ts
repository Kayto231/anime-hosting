import { combineReducers } from "redux";
import { navBarReducer } from "./navBarReducer";
import { userReducer } from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  anime: userReducer,
  navBar: navBarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
