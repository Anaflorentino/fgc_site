const switcher = document.getElementById("switcher");
const textLabel = document.querySelector(".switch-text");

// Alternar o estado ao clicar no texto ou no switcher
textLabel.addEventListener("click", () => {
  switcher.checked = !switcher.checked;
});