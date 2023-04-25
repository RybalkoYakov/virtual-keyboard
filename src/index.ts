import {Key} from "./core/Key/Key";
import {letterCharacters} from "./assets/data/letterCharacters";

const root = document.body;

const key= new Key({
  characters: letterCharacters[0],
  onclick: function (e, characters) {
    console.log(characters.firstLanguage.shiftedChar);
  }
});

root.append(key.render());