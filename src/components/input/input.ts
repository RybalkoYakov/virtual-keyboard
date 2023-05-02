import {ClassList} from "../../assets/data/ClassList";

export const input = (): HTMLTextAreaElement => {
  const input = document.createElement("textarea") as HTMLTextAreaElement;
  input.classList.add(ClassList.Input);
  return input;
};