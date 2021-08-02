export type UID = string | undefined;
export type Status = "idle" | "loading" | "succeeded" | "failed";
export type Error = string | null;

export interface Auth {
  uid: UID;
  status: Status;
  error: Error;
}
