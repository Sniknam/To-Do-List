const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.querySelector("#listContainer");
listContainer.classList.add("listBtn");

const listItem = [];

function printListItem(value) {
  let btnListElm = document.createElement("button");
  let listElmValue = document.createTextNode(value);
  let listDelElm = document.createElement("i");
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
