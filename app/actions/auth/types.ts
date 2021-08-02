import { UID, Status, Error } from "../../types/auth";

export interface Action {
  type: "SIGN_IN" | "SIGN_OUT" | "UPDATE_STATUS" | "UPDATE_ERROR";
  payload?: {
    uid?: UID;
    status?: Status;
    error?: Error;
  };
}
