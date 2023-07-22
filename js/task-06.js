const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (inputLength == event.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
