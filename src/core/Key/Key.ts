import {IKeyCharacters} from "./IKeyCharacters";
import {IKeyConfig} from "./IKeyConfig";

export class Key {
  private readonly characters: IKeyCharacters;
  private readonly className: string;
  private readonly onclick: (e: MouseEvent, characters: IKeyCharacters) => void;

  constructor(config: IKeyConfig) {
    this.characters = config.characters;
    this.className = config.className;
    this.onclick = config.onclick;
  }

  render(): HTMLButtonElement {
    const key = document.createElement("button") as HTMLButtonElement;
    const additionalKey = document.createElement("span") as HTMLSpanElement;

    key.textContent = this.characters.firstLanguage.mainChar;
    additionalKey.textContent = this.characters.firstLanguage.shiftedChar || "";

    if (this.onclick) {
      key.addEventListener("click", (e) => {
        this.onclick(e, this.characters);
      });
    }

    if (this.className) key.classList.add(this.className);

    key.append(additionalKey);

    return key;
  }

  public changeLanguage() {
    [this.characters.firstLanguage, this.characters.secondLanguage] = [this.characters.secondLanguage, this.characters.firstLanguage];
  }
}

