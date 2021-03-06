import {
  FACEBOOK_APP_ID,
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID,
} from "@env";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import { to } from "../utils/to";
import { firebase } from "../firebase";

export async function getFacebookToken() {
  await Facebook.initializeAsync({
    appId: FACEBOOK_APP_ID,
    appName: "regnite-todo",
  });

  const [error, data] = await to(
    Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    }),
  );

  if (error) {
    throw new Error(error.message);
  }

  if (data.type === "success") {
    return data.token;
  } else {
    throw new Error("canceled");
  }
}

export async function getGoogleToken() {
  const [error, result] = await to(
    Google.logInAsync({
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      scopes: ["profile", "email"],
    }),
  );

  if (error) {
    throw new Error(error.message);
  }

  if (result.type === "success") {
    return result.accessToken;
  } else {
    throw new Error("canceled");
  }
}

export async function signInWithFacebook(token: string) {
  const credentials = firebase.auth.FacebookAuthProvider.credential(token);
  return await to(firebase.auth().signInWithCredential(credentials));
}

export async function signInWithGoogle(accessToken: string) {
  const credentials = firebase.auth.GoogleAuthProvider.credential(
    null,
    accessToken,
  );
  return await to(firebase.auth().signInWithCredential(credentials));
}

export async function signInAnonymously() {
  return await to(firebase.auth().signInAnonymously());
}

export async function signInWithEmail(email: string, password: string) {
  return await to(firebase.auth().signInWithEmailAndPassword(email, password));
}

export async function signUpWithEmail(email: string, password: string) {
  return await to(
    firebase.auth().createUserWithEmailAndPassword(email, password),
  );
}

export function signOut() {
  firebase.auth().signOut();
}
