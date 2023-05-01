import {IKeyCharacters} from "./IKeyCharacters";

export interface IKeyConfig {
  characters: IKeyCharacters
  className?: string
  onkeydown?: (e?: MouseEvent, characters?: IKeyCharacters) => void
  onkeyup?: (e?: MouseEvent, characters?: IKeyCharacters) => void
  width?: number
}