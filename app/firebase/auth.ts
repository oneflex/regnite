import { FACEBOOK_APP_ID } from "@env";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import { to } from "../utils/to";

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

  if (error) throw new Error(error.message);

  if (data.type === "success") {
    return data.token;
  } else {
    throw new Error("canceled");
  }
}

export async function getGoogleToken() {
  const [error, result] = await to(
    Google.logInAsync({
      iosClientId:
        "645375002084-81dv919jo44cp4ne3l29een4rettdjm3.apps.googleusercontent.com",
      androidClientId:
        "645375002084-raqojmco3ls6tl77j2okml2vdi0qq7no.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    }),
  );

  if (error) throw new Error(error.message);

  if (result.type === "success") {
    return result.accessToken;
  } else {
    throw new Error("canceled");
  }
}
