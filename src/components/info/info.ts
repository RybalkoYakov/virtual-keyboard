import {ClassList} from "../../assets/data/ClassList";

export const info = (infoString: string): HTMLDivElement => {
  const div = document.createElement("div") as HTMLDivElement;
  div.textContent = infoString;
  div.classList.add(ClassList.Info);
  return div;
};