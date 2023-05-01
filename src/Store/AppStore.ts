import {Language} from "../core/Key/Language";

export const AppStore  = {
  currentLanguage: localStorage.getItem("currentLanguage") || "firstLanguage",
  isShifted: localStorage.getItem("isShifted") === "true" || false,
  changeLanguage: () => {
    if (AppStore.currentLanguage === "firstLanguage") {
      AppStore.currentLanguage = "secondLanguage";
    } else {
      AppStore.currentLanguage = "firstLanguage";
    }
    localStorage.setItem("currentLanguage", AppStore.currentLanguage);
  },
  changeIsShifted: () => {
    AppStore.isShifted = !AppStore.isShifted;
    localStorage.setItem("isShifted", AppStore.isShifted.toString());
  }
} as {
  currentLanguage: Language
  isShifted: boolean
  changeLanguage: () => void
  changeIsShifted: () => void
};