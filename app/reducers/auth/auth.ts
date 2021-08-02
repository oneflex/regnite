import { Auth } from "../../types";
import { Action } from "../../actions/auth/types";

const authReducerDefaultState: Readonly<Auth> = {
  uid: undefined,
  status: "idle",
  error: null,
};

export default (state = authReducerDefaultState, action: Action): Auth => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, uid: action.payload.uid };
    case "SIGN_OUT":
      return { ...state, uid: undefined };
    case "UPDATE_STATUS":
      return { ...state, status: action.payload.status };
    case "UPDATE_ERROR":
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
