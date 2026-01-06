const buttonLoad = document.querySelector(".button-load--js");
const buttonSave = document.querySelector(".button-save--js");
const textArea = document.querySelector(".text--js");

buttonLoad.addEventListener("click", () => {
  textArea.value = localStorage.getItem("zapisz");
});

buttonSave.addEventListener("click", () => {
  console.log(textArea.value);
  if (textArea.value) {
    localStorage.setItem("zapisz", textArea.value);
  }
});
