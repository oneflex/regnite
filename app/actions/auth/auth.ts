import { firebase } from "../../firebase/firebase";
import { to } from "../../utils/to";
import { Status, Error } from "../../types/auth";
import { getFacebookToken, getGoogleToken } from "../../firebase/auth";

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

export const startSignInWithFacebook = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [fbError, token] = await to(getFacebookToken());

    if (fbError) {
      if (fbError.message === "canceled") {
        return;
      }
      dispatch(updateStatus("failed"));
      dispatch(updateError(fbError.message));
      return;
    }

    const credentials = firebase.auth.FacebookAuthProvider.credential(token);

    const [error, userCredential] = await to(
      firebase.auth().signInWithCredential(credentials),
    );

    if (error) {
      dispatch(updateStatus("failed"));
      dispatch(updateError("Login with Facebook failed"));
      return;
    }

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignInWithGoogle = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [googleError, accessToken] = await to(getGoogleToken());

    if (googleError) {
      dispatch(updateStatus("failed"));
      dispatch(updateError("Login with Google failed"));
      return;
    }

    const credentials = firebase.auth.GoogleAuthProvider.credential(
      null,
      accessToken,
    );

    const [error, userCredential] = await to(
      firebase.auth().signInWithCredential(credentials),
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

export const startSignInAnonymously = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await to(
      firebase.auth().signInAnonymously(),
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
