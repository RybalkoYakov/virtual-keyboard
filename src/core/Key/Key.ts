import {IKeyCharacters} from "./IKeyCharacters";
import {IKeyConfig} from "./IKeyConfig";
import {ClassList} from "../../assets/data/ClassList";

export class Key {

  private readonly _characters: IKeyCharacters;
  get characters(): IKeyCharacters {
    return this._characters;
  }

  private _self: HTMLButtonElement;
  get self(): HTMLButtonElement {
    return this._self;
  }

  private _textAreaElement: HTMLTextAreaElement;
  set textAreaElement(value: HTMLTextAreaElement) {
    this._textAreaElement = value;
  }

  private readonly className: string;
  private readonly id: string;
  private readonly customWidth: number;

  private onmousedown : (e: MouseEvent, characters?: IKeyCharacters) => void;
  private onmouseup : (e: MouseEvent, characters?: IKeyCharacters) => void;

  constructor(config: IKeyConfig) {
    this._characters = config.characters;
    this.className = config.className;
    this.id = Math.random().toString() + Math.random().toString();

    this.onmousedown = config.onkeydown;
    this.onmouseup = config.onkeyup;

    this.customWidth = config.width;
  }

  render(): HTMLButtonElement {
    const key = document.createElement("button") as HTMLButtonElement;
    const additionalKey = document.createElement("span") as HTMLSpanElement;

    key.textContent = this._characters.firstLanguage.mainChar;
    if (!this._characters.isSpecialCharacter) {
      additionalKey.textContent = this._characters.firstLanguage.shiftedChar;
    }

    key.addEventListener("mousedown", (e) => {
      key.classList.add(ClassList.ButtonClicked);
      if (!this.characters.isSpecialCharacter) {
        this._textAreaElement.value += this.characters.firstLanguage.mainChar;
      }

      if (this.characters.code === "Tab") {
        this._textAreaElement.value += "\t";
      }

      if (this.characters.code === "Enter") {
        this._textAreaElement.value += "\n";
      }

      if (this.characters.code === "Backspace") {
        const startIndex = this._textAreaElement.selectionStart;
        const endIndex = this._textAreaElement.selectionEnd;
        let tmp = "";
        for (let i = 0; i < this._textAreaElement.value.length; i++) {
          if (i < startIndex || i > endIndex - 1) {
            tmp += this._textAreaElement.value[i];
          }
        }
        if (startIndex === endIndex) {
          tmp = this._textAreaElement.value.slice(0, this._textAreaElement.value.length - 1);
        }

        this._textAreaElement.value = tmp;
        this._textAreaElement.setSelectionRange(startIndex, startIndex);
      }

      if (this.characters.code === "Delete") {
        const startIndex = this._textAreaElement.selectionStart;
        const endIndex = this._textAreaElement.selectionEnd;
        let tmp = "";
        if (startIndex !== endIndex) {
          for (let i = 0; i < this._textAreaElement.value.length; i++) {
            if (i < startIndex || i > endIndex - 1) {
              tmp += this._textAreaElement.value[i];
            }
          }
        }

        if (startIndex === endIndex) {
          for (let i = 0; i < this._textAreaElement.value.length; i++) {
            if (i !== startIndex) {
              tmp += this._textAreaElement.value[i];
            }
          }
        }

        this._textAreaElement.value = tmp;
        this._textAreaElement.setSelectionRange(startIndex, startIndex);
      }

      if (this.characters.code === "ArrowUp") {
        this._textAreaElement.value += "▲";
      }

      if (this.characters.code === "ArrowDown") {
        this._textAreaElement.value += "▼";
      }

      if (this.characters.code === "ArrowLeft") {
        this._textAreaElement.value += "◄";
      }

      if (this.characters.code === "ArrowRight") {
        this._textAreaElement.value += "►";
      }

      if (this.characters.code === "CapsLock") {
        console.log("caps");
      }

      if (this.characters.code === "ShiftLeft" || this.characters.code === "ShiftRight") {
        console.log("shift");
      }

      if (this.characters.code === "ControlLeft" || this.characters.code === "ControlRight") {
        console.log("Control");
      }

      if (this.characters.code === "AltLeft" || this.characters.code === "AltRight") {
        console.log("Alt");
      }
    });

    key.addEventListener("mouseup", (e) => {
      key.classList.remove(ClassList.ButtonClicked);
    });

    if (this.onmousedown) {
      key.addEventListener("mousedown", (e) => {
        this.onmousedown(e, this._characters);
      });
    }

    if (this.onmouseup) {
      key.addEventListener("mouseup", (e) => {
        this.onmouseup(e, this._characters);
      });
    }

    if (this.className) key.classList.add(this.className);
    if (this.customWidth) key.style.width = `${this.customWidth}px`;

    key.append(additionalKey);
    key.id = this.id;

    this._self = key;

    return key;
  }
  
  public updateKey() {
    const key = this._self;

    const  additionalKey = document.createElement("span") as HTMLSpanElement;
    if (!this._characters.isSpecialCharacter) {
      additionalKey.textContent = this._characters.firstLanguage.shiftedChar;
    }

    key.textContent = this._characters.firstLanguage.mainChar;
    key.append(additionalKey);
  }

  public changeLanguage() {
    [this._characters.firstLanguage, this._characters.secondLanguage] = [this._characters.secondLanguage, this._characters.firstLanguage];
  }
}

