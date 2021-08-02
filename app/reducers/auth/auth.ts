import { Auth } from "../../types";
import { Action } from "../../actions/auth/types";

const authReducerDefaultState: Readonly<Auth> = {
  user: null,
  status: "idle",
  error: null,
};

export default (state = authReducerDefaultState, action: Action): Auth => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.payload.user };
    case "SIGN_OUT":
      return { ...state, user: null };
    case "UPDATE_STATUS":
      return { ...state, status: action.payload.status };
    case "UPDATE_ERROR":
      return { ...state, error: action.payload.error };
    case "UPDATE_USER_DATA":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
