import {IKeyCharacters} from "./IKeyCharacters";
import {IKeyConfig} from "./IKeyConfig";

export class Key {
  private readonly characters: IKeyCharacters;
  private readonly className: string;
  private readonly onclick: (e: MouseEvent, characters: IKeyCharacters) => void;
  private readonly id: string;
  private self: HTMLButtonElement;
  private readonly customWidth: number;

  constructor(config: IKeyConfig) {
    this.characters = config.characters;
    this.className = config.className;
    this.onclick = config.onclick;
    this.id = Math.random().toString();

    this.customWidth = config.width;
  }

  render(): HTMLButtonElement {
    const key = document.createElement("button") as HTMLButtonElement;
    const additionalKey = document.createElement("span") as HTMLSpanElement;

    key.textContent = this.characters.firstLanguage.mainChar;
    if (!this.characters.isSpecialCharacter) {
      additionalKey.textContent = this.characters.firstLanguage.shiftedChar;
    }

    if (this.onclick) {
      key.addEventListener("click", (e) => {
        this.onclick(e, this.characters);
      });
    }



    if (this.className) key.classList.add(this.className);
    if (this.customWidth) key.style.width = `${this.customWidth}px`;

    key.append(additionalKey);
    key.id = this.id;



    this.self = key;

    return key;
  }
  
  public updateKey() {
    const key = this.self;

    const  additionalKey = document.createElement("span") as HTMLSpanElement;
    if (!this.characters.isSpecialCharacter) {
      additionalKey.textContent = this.characters.firstLanguage.shiftedChar;
    }

    key.textContent = this.characters.firstLanguage.mainChar;
    key.append(additionalKey);
  }

  public changeLanguage() {
    [this.characters.firstLanguage, this.characters.secondLanguage] = [this.characters.secondLanguage, this.characters.firstLanguage];
  }
}

