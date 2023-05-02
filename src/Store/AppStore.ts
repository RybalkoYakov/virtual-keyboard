import {Language} from "../core/Key/Language";

export const AppStore  = {
  currentLanguage: localStorage.getItem("currentLanguage") || "firstLanguage",
  isShifted: false,
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
  }
} as {
  currentLanguage: Language
  isShifted: boolean
  changeLanguage: () => void
  changeIsShifted: () => void
};