import { firebase } from "../../firebase/firebase";
import { to } from "../../utils/to";
import { Status, Error } from "../../types/auth";

export const updateStatus = (status: Status) => ({
  type: "UPDATE_STATUS",
  payload: {
    status,
  },
});

export const updateError = (error: Error) => ({
  type: "UPDATE_ERROR",
  payload: {
    error,
  },
});

export const signIn = (user: any) => ({
  type: "SIGN_IN",
  payload: {
    user,
  },
});

export const startSignIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await to(
      firebase.auth().signInWithEmailAndPassword(email, password),
    );

    if (error) {
      dispatch(updateStatus("failed"));
      dispatch(updateError(error.message));
      return;
    }

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignUp = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await to(
      firebase.auth().createUserWithEmailAndPassword(email, password),
    );

    if (error) {
      dispatch(updateStatus("failed"));
      dispatch(updateError(error.message));
      return;
    }

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const signOut = () => ({
  type: "SIGN_OUT",
  payload: {},
});

export const startSignOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
