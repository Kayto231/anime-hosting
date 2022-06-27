import * as UserActionCreators from "./userReducerAction/userReducerAction";
import * as NavBarCreators from "./navBarActions/index";

export default {
  ...UserActionCreators,
  ...NavBarCreators,
};
