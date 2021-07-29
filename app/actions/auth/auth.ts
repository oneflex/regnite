import { firebase, googleAuthProvider } from "../../firebase/firebase";

export const signIn = (uid: string) => ({
  type: "SIGN_IN",
  payload: {
    uid,
  },
});

export const startSignIn = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
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
