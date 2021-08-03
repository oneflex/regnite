import { FACEBOOK_APP_ID } from "@env";
import * as Facebook from "expo-facebook";
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

  return data.token;
}
