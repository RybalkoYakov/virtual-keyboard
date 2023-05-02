export interface IKeyCharacters {
  code: string
  firstLanguage: {
    mainChar: string
    shiftedChar?: string
  }
  secondLanguage?: {
    mainChar: string
    shiftedChar?: string
  }
  isSpecialCharacter?: boolean
}