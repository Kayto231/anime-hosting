import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsCreators from "../redux/actions/index";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch);
};
