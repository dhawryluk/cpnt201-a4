import Picker from "vanilla-picker/csp";

export function vanillaPicker(element) {
  const vanillaPicker = document.querySelector("#vanillaPicker"),
    picker = new Picker(vanillaPicker);
  picker.onChange = function (color) {
    vanillaPicker.style.background = color.rgbaString;

    element.innerHTML = `Your Color is: ${color.rgbaString}`;
    picker.openHandler();
  };
}
