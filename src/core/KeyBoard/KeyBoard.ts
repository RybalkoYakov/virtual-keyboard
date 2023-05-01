import {Key} from "../Key/Key";
import {IKeyBoardConfig} from "./IKeyBoardConfig";
import {ClassList} from "../../assets/data/ClassList";
import {AppStore} from "../../Store/AppStore";

export class KeyBoard {
  private keys: Key[];

  private readonly textAreaElement: HTMLTextAreaElement;
  private readonly info: HTMLDivElement;
  private container: HTMLElement;

  constructor(config: IKeyBoardConfig) {
    this.textAreaElement = config.input;
    this.container = config.container;
    this.info = config.info;

    this.keys = config.keys;
    this.init();
    this.container.append(this.info);
    this.container.append(this.textAreaElement);

    // Set reference to textarea for each key
    this.keys.forEach(key => {
      key.textAreaElement = this.textAreaElement;
    });

    this.keys.forEach(key => {
      key.keyboard = this;
    });
  }

  private init() {
    for (let i = 0; i < this.keys.length; i++) {
      this.container.append(this.keys[i].render());
    }

    window.addEventListener("keydown", (e) => {
      const code = e.code;
      this.keys.forEach(key => {
        if (key.characters.code === code) {
          e.preventDefault();

          if (key.characters.code !== "CapsLock") {
            key.self.classList.add(ClassList.ButtonClicked);
          }

          if (!key.characters.isSpecialCharacter) {
            if (!AppStore.isShifted) {
              this.textAreaElement.value += key.characters[AppStore.currentLanguage].mainChar;
            } else {
              this.textAreaElement.value += key.characters[AppStore.currentLanguage].shiftedChar;
            }
          }

          if (key.characters.code === "Tab") {
            this.textAreaElement.value += "\t";
          }

          if (key.characters.code === "Enter") {
            this.textAreaElement.value += "\n";
          }

          if (key.characters.code === "Backspace") {
            const startIndex = this.textAreaElement.selectionStart;
            const endIndex = this.textAreaElement.selectionEnd;
            let tmp = "";
            for (let i = 0; i < this.textAreaElement.value.length; i++) {
              if (i < startIndex || i > endIndex - 1) {
                tmp += this.textAreaElement.value[i];
              }
            }
            if (startIndex === endIndex) {
              tmp = this.textAreaElement.value.slice(0, this.textAreaElement.value.length - 1);
            }

            this.textAreaElement.value = tmp;
            this.textAreaElement.setSelectionRange(startIndex, startIndex);
          }

          if (key.characters.code === "Delete") {
            const startIndex = this.textAreaElement.selectionStart;
            const endIndex = this.textAreaElement.selectionEnd;
            let tmp = "";
            if (startIndex !== endIndex) {
              for (let i = 0; i < this.textAreaElement.value.length; i++) {
                if (i < startIndex || i > endIndex - 1) {
                  tmp += this.textAreaElement.value[i];
                }
              }
            }

            if (startIndex === endIndex) {
              for (let i = 0; i < this.textAreaElement.value.length; i++) {
                if (i !== startIndex) {
                  tmp += this.textAreaElement.value[i];
                }
              }
            }

            this.textAreaElement.value = tmp;
            this.textAreaElement.setSelectionRange(startIndex, startIndex);
          }

          if (key.characters.code === "ArrowUp") {
            this.textAreaElement.value += "▲";
          }

          if (key.characters.code === "ArrowDown") {
            this.textAreaElement.value += "▼";
          }

          if (key.characters.code === "ArrowLeft") {
            this.textAreaElement.value += "◄";
          }

          if (key.characters.code === "ArrowRight") {
            this.textAreaElement.value += "►";
          }

          if (key.characters.code === "CapsLock") {
            if (e.repeat) return;
            key.self.classList.toggle(ClassList.ButtonClicked);
            AppStore.changeIsShifted();
            this.updateKeyboard();
          }

          if (key.characters.code === "ShiftLeft" || key.characters.code === "ShiftRight") {
            if (e.repeat) return;
            AppStore.changeIsShifted();
            this.updateKeyboard();
          }

          if (key.characters.code === "ControlLeft" || key.characters.code === "ControlRight") {
            if (e.altKey) {
              this.changeLanguage();
            }
          }

          if (key.characters.code === "AltLeft" || key.characters.code === "AltRight") {
            if (e.ctrlKey) {
              this.changeLanguage();
            }
          }
        }
      });
    });

    window.addEventListener("keyup", (e) => {
      const code = e.code;
      this.keys.forEach(key => {
        if (key.characters.code === code) {
          e.preventDefault();
          if (key.characters.code !== "CapsLock") {
            key.self.classList.remove(ClassList.ButtonClicked);
          }
          if (key.characters.code === "ShiftLeft" || key.characters.code === "ShiftRight") {
            AppStore.changeIsShifted();
            this.updateKeyboard();
          }
        }
      });
    });
  }

  public changeLanguage() {
    AppStore.changeLanguage();
    this.updateKeyboard();
  }

  public updateKeyboard() {
    this.keys.forEach(key => {
      key.updateKey();
    });
  }
}