import "./styles.css";

const addTaskBtn = document.querySelector(".btn-add");
const formContainer = document.querySelector(".form-container");
const formDialog = document.querySelector("#form-dialog");

console.log("is it working???");

addTaskBtn.addEventListener("click", (button) => {
  formContainer.reset();
  formDialog.showModal();
  console.log("mady musico agr kkk");
});

formDialog.addEventListener("click", () => {
  formDialog.close();
});

formContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
