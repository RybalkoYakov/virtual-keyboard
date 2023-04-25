import {IKeyCharacters} from "./IKeyCharacters";

export interface IKeyConfig {
  characters: IKeyCharacters
  className?: string
  onclick?: (e?: MouseEvent, characters?: IKeyCharacters) => void
}