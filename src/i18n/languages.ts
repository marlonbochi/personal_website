export const languages = ["en", "pt"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";
