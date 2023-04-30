import {Key} from "../Key/Key";

export interface IKeyBoardConfig {
  keys: Key[]
  container: HTMLElement
  info: HTMLDivElement
  input: HTMLTextAreaElement
}