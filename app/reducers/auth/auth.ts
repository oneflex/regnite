import { Auth } from "../../types";
import { Action } from "../../actions/auth/types";

const authReducerDefaultState: Readonly<Auth> = {};

export default (state = authReducerDefaultState, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { uid: action.payload.uid };
    case "SIGN_OUT":
      return {};
    default:
      return state;
  }
};
