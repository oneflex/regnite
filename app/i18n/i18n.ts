import * as Localization from "expo-localization";
import i18n from "i18n-js";
import en from "./en.json";
import he from "./he.json";

i18n.fallbacks = true;
i18n.translations = { en, he };

i18n.locale = Localization.locale || "en";

type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
