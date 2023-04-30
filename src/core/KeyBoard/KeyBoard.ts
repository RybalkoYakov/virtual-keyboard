import {Key} from "../Key/Key";
import {IKeyBoardConfig} from "./IKeyBoardConfig";

export class KeyBoard {
  private keys: Key[];

  private input: HTMLTextAreaElement;
  private readonly info: HTMLDivElement;
  private container: HTMLElement;

  constructor(config: IKeyBoardConfig) {

    this.input = config.input;
    this.container = config.container;
    this.info = config.info;

    this.keys = config.keys;
    this.init();
    this.container.append(this.info);
    this.container.append(this.input);
  }

  private init() {
    for (let i = 0; i < this.keys.length; i++) {
      this.container.append(this.keys[i].render());
    }
  }

  public changeLanguage() {
    this.keys.forEach(key => {
      key.changeLanguage();
    });
  }

  public updateKeyboard() {
    this.keys.forEach(key => {
      key.updateKey();
    });
  }
}