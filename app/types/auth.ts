import firebase from "firebase/app";
export type Status = "idle" | "loading" | "succeeded" | "failed";
export type Error = string | null;
export type User = firebase.User | null;

export interface Auth {
  user: User;
  status: Status;
  error: Error;
}
