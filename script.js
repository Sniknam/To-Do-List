const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.querySelector("#listContainer");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");

const listItem = [];

function printListItem(value) {
  let btnListElm = document.createElement("button");
  let listElmValue = document.createTextNode(value);
  let listDelElm = document.createElement("span");
  listDelElm.classList.add("fa");
  listDelElm.classList.add("fa-trash-o");

  btnListElm.appendChild(listDelElm);
  btnListElm.appendChild(listElmValue);
  btnListElm.classList.add("listBtn");
  listContainer.appendChild(btnListElm);
}

// addBtn();

// add botton
const inputAddbtn = document.querySelector(".add-btn");

function addbtn() {
  // input variable
  const inputAdd = document.querySelector(".add-input").value;

  listItem.unshift(inputAdd);

  printListItem(inputAdd);
}
inputAddbtn.addEventListener("click", addbtn);

function crossInput() {
  listContainer.classList.add("first");
}
listContainer.addEventListener("click", crossInput);
