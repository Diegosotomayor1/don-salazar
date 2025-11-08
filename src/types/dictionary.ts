export enum LANGUAGE {
  EN = "en",
  ES = "es",
}

export type Dictionary = {
  [key in LANGUAGE]: string;
};

const exampleDictionary: Dictionary = {
  en: "English",
  es: "Español",
};
