import {Key} from "../Key/Key";
import {IKeyBoardConfig} from "./IKeyBoardConfig";

export class KeyBoard {
  private isShiftPressed: boolean;
  private isCtrlPressed: boolean;
  private isAltPressed: boolean;

  private isCapsLockActive: boolean;

  private keys: Key[];

  private container: HTMLElement;

  constructor(config: IKeyBoardConfig) {
    this.container = config.container;
    this.keys = config.keys;
    this.init();
  }

  init() {
    for (let i = 0; i < this.keys.length; i++) {
      this.container.append(this.keys[i].render());
    }
  }
}