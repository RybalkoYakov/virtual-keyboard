import {Language} from "../core/Key/Language";

export const AppStore  = {
  currentLanguage: "firstLanguage",
  changeLanguage: () => {
    if (AppStore.currentLanguage === "firstLanguage") {
      AppStore.currentLanguage = "secondLanguage";
    } else {
      AppStore.currentLanguage = "firstLanguage";
    }
  }
} as {
  currentLanguage: Language,
  changeLanguage: () => void
};