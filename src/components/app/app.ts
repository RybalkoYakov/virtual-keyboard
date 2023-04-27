import {letterCharacters} from "../../assets/data/letterCharacters";
import {Key} from "../../core/Key/Key";
import {KeyBoard} from "../../core/KeyBoard/KeyBoard";

export const appContainer = document.createElement("div") as HTMLDivElement;
appContainer.classList.add("container");

const keys = letterCharacters.map(char => {
  return new Key({
    characters: char,
    className: "button"
  });
});

const keyboard = new KeyBoard({
  keys,
  container: appContainer
});