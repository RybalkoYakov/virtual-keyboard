import {letterCharacters} from "../../assets/data/letterCharacters";
import {Key} from "../../core/Key/Key";
import {KeyBoard} from "../../core/KeyBoard/KeyBoard";
import {SpecialChars} from "../../assets/data/SpecialChars";
import {ClassList} from "../../assets/data/ClassList";
import {input} from "../input/input";
import {info} from "../info/info";
import {AppStore} from "../../Store/AppStore";

export const appContainer = document.createElement("div") as HTMLDivElement;
appContainer.classList.add(ClassList.Container);

const keys = letterCharacters.map(char => {
  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Backspace) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 130
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Tab) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 70
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.CapsLock) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 90
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Enter) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 150
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Shift) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 120
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Control) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 80
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Alt) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 55
    });
  }

  if (char[AppStore.currentLanguage].mainChar === " ") {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 350
    });
  }

  if (char[AppStore.currentLanguage].mainChar === SpecialChars.Window) {
    return new Key({
      characters: char,
      className: ClassList.Button,
      width: 60
    });
  }

  return new Key({
    characters: char,
    className: ClassList.Button
  });
});

const keyboard = new KeyBoard({
  keys,
  input: input(),
  container: appContainer,
  info: info("This keyboard was created in the windows operating system. Press any \"CTRL + ALT\" to change language.")
});