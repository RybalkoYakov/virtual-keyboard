import {IKeyCharacters} from "./IKeyCharacters";

export class Key {
  private characters: IKeyCharacters;
  private readonly className: string;

  constructor(characters: IKeyCharacters, className?: string) {
    this.characters = characters;
    this.className = className;
  }

  render(): HTMLButtonElement {
    const key = document.createElement("button") as HTMLButtonElement;
    const additionalKey = document.createElement("span") as HTMLSpanElement;

    key.textContent = this.characters.firstLanguage.mainChar;
    additionalKey.textContent = this.characters.firstLanguage.shiftedChar;

    if (this.className) key.classList.add(this.className);

    key.append(additionalKey);

    return key;
  }

  changeLanguage() {
    [this.characters.firstLanguage, this.characters.secondLanguage] = [this.characters.secondLanguage, this.characters.firstLanguage];
  }
}