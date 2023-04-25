import {Key} from "./core/Key/Key";

const root = document.body;
const key = new Key({firstLanguage: {mainChar: "1", shiftedChar:"!"}, secondLanguage: {mainChar: "2", shiftedChar: "@"}});

root.append(key.render());