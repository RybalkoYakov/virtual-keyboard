import {IKeyCharacters} from "../../core/Key/IKeyCharacters";
import {SpecialChars} from "./SpecialChars";

export const letterCharacters: IKeyCharacters[] = [
  {
    code: "Backquote",
    firstLanguage: {
      mainChar: "`",
      shiftedChar: "~"
    },
    secondLanguage: {
      mainChar: "ё",
      shiftedChar: "Ё"
    }
  },
  {
    code: "Digit1",
    firstLanguage: {
      mainChar: "1",
      shiftedChar: "!"
    },
    secondLanguage: {
      mainChar: "1",
      shiftedChar: "!"
    }
  },
  {
    code: "Digit2",
    firstLanguage: {
      mainChar: "2",
      shiftedChar: "@"
    },
    secondLanguage: {
      mainChar: "2",
      shiftedChar: "\""
    }
  },
  {
    code: "Digit3",
    firstLanguage: {
      mainChar: "3",
      shiftedChar: "#"
    },
    secondLanguage: {
      mainChar: "3",
      shiftedChar: "№"
    }
  },
  {
    code: "Digit4",
    firstLanguage: {
      mainChar: "4",
      shiftedChar: "$"
    },
    secondLanguage: {
      mainChar: "4",
      shiftedChar: ";"
    }
  },
  {
    code: "Digit5",
    firstLanguage: {
      mainChar: "5",
      shiftedChar: "%"
    },
    secondLanguage: {
      mainChar: "5",
      shiftedChar: "%"
    }
  },
  {
    code: "Digit6",
    firstLanguage: {
      mainChar: "6",
      shiftedChar: "^"
    },
    secondLanguage: {
      mainChar: "6",
      shiftedChar: ":"
    }
  },
  {
    code: "Digit7",
    firstLanguage: {
      mainChar: "7",
      shiftedChar: "&"
    },
    secondLanguage: {
      mainChar: "7",
      shiftedChar: "?"
    }
  },
  {
    code: "Digit8",
    firstLanguage: {
      mainChar: "8",
      shiftedChar: "*"
    },
    secondLanguage: {
      mainChar: "8",
      shiftedChar: "*"
    }
  },
  {
    code: "Digit9",
    firstLanguage: {
      mainChar: "9",
      shiftedChar: "("
    },
    secondLanguage: {
      mainChar: "9",
      shiftedChar: "("
    }
  },
  {
    code: "Digit0",
    firstLanguage: {
      mainChar: "0",
      shiftedChar: ")"
    },
    secondLanguage: {
      mainChar: "0",
      shiftedChar: ")"
    }
  },
  {
    code: "Minus",
    firstLanguage: {
      mainChar: "-",
      shiftedChar: "_"
    },
    secondLanguage: {
      mainChar: "-",
      shiftedChar: "_"
    }
  },
  {
    code: "Equal",
    firstLanguage: {
      mainChar: "=",
      shiftedChar: "+"
    },
    secondLanguage: {
      mainChar: "=",
      shiftedChar: "+"
    }
  },
  {
    code: SpecialChars.Backspace,
    firstLanguage: {
      mainChar: SpecialChars.Backspace,
      shiftedChar: SpecialChars.Backspace
    },
    secondLanguage: {
      mainChar: SpecialChars.Backspace,
      shiftedChar: SpecialChars.Backspace
    },
    isSpecialCharacter: true
  },
  {
    code: SpecialChars.Tab,
    firstLanguage: {
      mainChar: SpecialChars.Tab,
      shiftedChar: SpecialChars.Tab
    },
    secondLanguage: {
      mainChar: SpecialChars.Tab,
      shiftedChar: SpecialChars.Tab
    },
    isSpecialCharacter: true
  },
  {
    code: "KeyQ",
    firstLanguage: {
      mainChar: "q",
      shiftedChar: "Q"
    },
    secondLanguage: {
      mainChar: "й",
      shiftedChar: "Й"
    }
  },
  {
    code: "KeyW",
    firstLanguage: {
      mainChar: "w",
      shiftedChar: "W"
    },
    secondLanguage: {
      mainChar: "ц",
      shiftedChar: "Ц"
    }
  },
  {
    code: "KeyE",
    firstLanguage: {
      mainChar: "e",
      shiftedChar: "E"
    },
    secondLanguage: {
      mainChar: "у",
      shiftedChar: "У"
    }
  },
  {
    code: "KeyR",
    firstLanguage: {
      mainChar: "r",
      shiftedChar: "R"
    },
    secondLanguage: {
      mainChar: "к",
      shiftedChar: "К"
    }
  },
  {
    code: "KeyT",
    firstLanguage: {
      mainChar: "t",
      shiftedChar: "T"
    },
    secondLanguage: {
      mainChar: "е",
      shiftedChar: "Е"
    }
  },
  {
    code: "KeyY",
    firstLanguage: {
      mainChar: "y",
      shiftedChar: "Y"
    },
    secondLanguage: {
      mainChar: "н",
      shiftedChar: "Н"
    }
  },
  {
    code: "KeyU",
    firstLanguage: {
      mainChar: "u",
      shiftedChar: "U"
    },
    secondLanguage: {
      mainChar: "г",
      shiftedChar: "Г"
    }
  },
  {
    code: "KeyI",
    firstLanguage: {
      mainChar: "i",
      shiftedChar: "I"
    },
    secondLanguage: {
      mainChar: "ш",
      shiftedChar: "Ш"
    }
  },
  {
    code: "KeyO",
    firstLanguage: {
      mainChar: "o",
      shiftedChar: "O"
    },
    secondLanguage: {
      mainChar: "щ",
      shiftedChar: "Щ"
    }
  },
  {
    code: "KeyP",
    firstLanguage: {
      mainChar: "p",
      shiftedChar: "P"
    },
    secondLanguage: {
      mainChar: "з",
      shiftedChar: "З"
    }
  },
  {
    code: "BracketLeft",
    firstLanguage: {
      mainChar: "[",
      shiftedChar: "{"
    },
    secondLanguage: {
      mainChar: "х",
      shiftedChar: "Х"
    }
  },
  {
    code: "BracketRight",
    firstLanguage: {
      mainChar: "]",
      shiftedChar: "}"
    },
    secondLanguage: {
      mainChar: "ъ",
      shiftedChar: "Ъ"
    }
  },
  {
    code: "Backslash",
    firstLanguage: {
      mainChar: "\\",
      shiftedChar: "|"
    },
    secondLanguage: {
      mainChar: "\\",
      shiftedChar: "//"
    }
  },
  {
    code: "Delete",
    firstLanguage: {
      mainChar: SpecialChars.Delete,
      shiftedChar: SpecialChars.Delete
    },
    secondLanguage: {
      mainChar: SpecialChars.Delete,
      shiftedChar: SpecialChars.Delete
    },
    isSpecialCharacter: true
  },
  {
    code: "CapsLock",
    firstLanguage: {
      mainChar: SpecialChars.CapsLock,
      shiftedChar: SpecialChars.CapsLock
    },
    secondLanguage: {
      mainChar: SpecialChars.CapsLock,
      shiftedChar: SpecialChars.CapsLock
    },
    isSpecialCharacter: true
  },
  {
    code: "KeyA",
    firstLanguage: {
      mainChar: "a",
      shiftedChar: "A"
    },
    secondLanguage: {
      mainChar: "ф",
      shiftedChar: "Ф"
    }
  },
  {
    code: "KeyS",
    firstLanguage: {
      mainChar: "s",
      shiftedChar: "S"
    },
    secondLanguage: {
      mainChar: "ы",
      shiftedChar: "Ы"
    }
  },
  {
    code: "KeyD",
    firstLanguage: {
      mainChar: "d",
      shiftedChar: "D"
    },
    secondLanguage: {
      mainChar: "в",
      shiftedChar: "В"
    }
  },
  {
    code: "KeyF",
    firstLanguage: {
      mainChar: "f",
      shiftedChar: "F"
    },
    secondLanguage: {
      mainChar: "а",
      shiftedChar: "А"
    }
  },
  {
    code: "KeyG",
    firstLanguage: {
      mainChar: "g",
      shiftedChar: "G"
    },
    secondLanguage: {
      mainChar: "п",
      shiftedChar: "П"
    }
  },
  {
    code: "KeyH",
    firstLanguage: {
      mainChar: "h",
      shiftedChar: "H"
    },
    secondLanguage: {
      mainChar: "р",
      shiftedChar: "Р"
    }
  },
  {
    code: "KeyJ",
    firstLanguage: {
      mainChar: "j",
      shiftedChar: "J"
    },
    secondLanguage: {
      mainChar: "о",
      shiftedChar: "О"
    }
  },
  {
    code: "KeyK",
    firstLanguage: {
      mainChar: "k",
      shiftedChar: "K"
    },
    secondLanguage: {
      mainChar: "л",
      shiftedChar: "Л"
    }
  },
  {
    code: "KeyL",
    firstLanguage: {
      mainChar: "l",
      shiftedChar: "L"
    },
    secondLanguage: {
      mainChar: "д",
      shiftedChar: "Д"
    }
  },
  {
    code: "Semicolon",
    firstLanguage: {
      mainChar: ";",
      shiftedChar: ":"
    },
    secondLanguage: {
      mainChar: "ж",
      shiftedChar: "Ж"
    }
  },
  {
    code: "Quote",
    firstLanguage: {
      mainChar: "'",
      shiftedChar: "\""
    },
    secondLanguage: {
      mainChar: "э",
      shiftedChar: "Э"
    }
  },
  {
    code: "Enter",
    firstLanguage: {
      mainChar: SpecialChars.Enter,
      shiftedChar: SpecialChars.Enter
    },
    secondLanguage: {
      mainChar: SpecialChars.Enter,
      shiftedChar: SpecialChars.Enter
    },
    isSpecialCharacter: true
  },
  {
    code: "ShiftLeft",
    firstLanguage: {
      mainChar: SpecialChars.Shift,
      shiftedChar: SpecialChars.Shift
    },
    secondLanguage: {
      mainChar: SpecialChars.Shift,
      shiftedChar: SpecialChars.Shift
    },
    isSpecialCharacter: true
  },
  {
    code: "KeyZ",
    firstLanguage: {
      mainChar: "z",
      shiftedChar: "Z"
    },
    secondLanguage: {
      mainChar: "я",
      shiftedChar: "Я"
    }
  },
  {
    code: "KeyX",
    firstLanguage: {
      mainChar: "x",
      shiftedChar: "X"
    },
    secondLanguage: {
      mainChar: "ч",
      shiftedChar: "Ч"
    }
  },
  {
    code: "KeyC",
    firstLanguage: {
      mainChar: "c",
      shiftedChar: "C"
    },
    secondLanguage: {
      mainChar: "с",
      shiftedChar: "С"
    }
  },
  {
    code: "KeyV",
    firstLanguage: {
      mainChar: "v",
      shiftedChar: "V"
    },
    secondLanguage: {
      mainChar: "м",
      shiftedChar: "М"
    }
  },
  {
    code: "KeyB",
    firstLanguage: {
      mainChar: "b",
      shiftedChar: "B"
    },
    secondLanguage: {
      mainChar: "и",
      shiftedChar: "И"
    }
  },
  {
    code: "KeyN",
    firstLanguage: {
      mainChar: "n",
      shiftedChar: "N"
    },
    secondLanguage: {
      mainChar: "т",
      shiftedChar: "Т"
    }
  },
  {
    code: "KeyM",
    firstLanguage: {
      mainChar: "m",
      shiftedChar: "M"
    },
    secondLanguage: {
      mainChar: "ь",
      shiftedChar: "Ь"
    }
  },
  {
    code: "Comma",
    firstLanguage: {
      mainChar: ",",
      shiftedChar: "<"
    },
    secondLanguage: {
      mainChar: "б",
      shiftedChar: "Б"
    }
  },
  {
    code: "Period",
    firstLanguage: {
      mainChar: ".",
      shiftedChar: ">"
    },
    secondLanguage: {
      mainChar: "ю",
      shiftedChar: "Ю"
    }
  },
  {
    code: "Slash",
    firstLanguage: {
      mainChar: "?",
      shiftedChar: "/"
    },
    secondLanguage: {
      mainChar: ".",
      shiftedChar: ","
    }
  },
  {
    code: "ArrowUp",
    firstLanguage: {
      mainChar: SpecialChars.ArrowUp,
      shiftedChar: SpecialChars.ArrowUp
    },
    secondLanguage: {
      mainChar: SpecialChars.ArrowUp,
      shiftedChar: SpecialChars.ArrowUp
    },
    isSpecialCharacter: true
  },
  {
    code: "ShiftRight",
    firstLanguage: {
      mainChar: SpecialChars.Shift,
      shiftedChar: SpecialChars.Shift
    },
    secondLanguage: {
      mainChar: SpecialChars.Shift,
      shiftedChar: SpecialChars.Shift
    },
    isSpecialCharacter: true
  },
  {
    code: "ControlLeft",
    firstLanguage: {
      mainChar: SpecialChars.Control,
      shiftedChar: SpecialChars.Control
    },
    secondLanguage: {
      mainChar: SpecialChars.Control,
      shiftedChar: SpecialChars.Control
    },
    isSpecialCharacter: true
  },
  {
    code: "AltLeft",
    firstLanguage: {
      mainChar: SpecialChars.Alt,
      shiftedChar: SpecialChars.Alt
    },
    secondLanguage: {
      mainChar: SpecialChars.Alt,
      shiftedChar: SpecialChars.Alt
    },
    isSpecialCharacter: true
  },
  {
    code: "Space",
    firstLanguage: {
      mainChar: " ",
      shiftedChar: " "
    },
    secondLanguage: {
      mainChar: " ",
      shiftedChar: " "
    }
  },
  {
    code: "AltRight",
    firstLanguage: {
      mainChar: SpecialChars.Alt,
      shiftedChar: SpecialChars.Alt
    },
    secondLanguage: {
      mainChar: SpecialChars.Alt,
      shiftedChar: SpecialChars.Alt
    },
    isSpecialCharacter: true
  },
  {
    code: "ControlRight",
    firstLanguage: {
      mainChar: SpecialChars.Control,
      shiftedChar: SpecialChars.Control
    },
    secondLanguage: {
      mainChar: SpecialChars.Control,
      shiftedChar: SpecialChars.Control
    },
    isSpecialCharacter: true
  },
  {
    code: "ArrowLeft",
    firstLanguage: {
      mainChar: SpecialChars.ArrowLeft,
      shiftedChar: SpecialChars.ArrowLeft
    },
    secondLanguage: {
      mainChar: SpecialChars.ArrowLeft,
      shiftedChar: SpecialChars.ArrowLeft
    },
    isSpecialCharacter: true
  },
  {
    code: "ArrowDown",
    firstLanguage: {
      mainChar: SpecialChars.ArrowDown,
      shiftedChar: SpecialChars.ArrowDown
    },
    secondLanguage: {
      mainChar: SpecialChars.ArrowDown,
      shiftedChar: SpecialChars.ArrowDown
    },
    isSpecialCharacter: true
  },
  {
    code: "ArrowRight",
    firstLanguage: {
      mainChar: SpecialChars.ArrowRight,
      shiftedChar: SpecialChars.ArrowRight
    },
    secondLanguage: {
      mainChar: SpecialChars.ArrowRight,
      shiftedChar: SpecialChars.ArrowRight
    },
    isSpecialCharacter: true
  },
  {
    code: "MetaLeft",
    firstLanguage: {
      mainChar: SpecialChars.Window,
      shiftedChar: SpecialChars.Window
    },
    secondLanguage: {
      mainChar: SpecialChars.Window,
      shiftedChar: SpecialChars.Window
    },
    isSpecialCharacter: true
  },
];
