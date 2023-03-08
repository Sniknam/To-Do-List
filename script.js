const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.querySelector("#listContainer");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");

const listItem = [];

function printListItem(value) {
  let btnListElm = document.createElement("button");
  btnListElm.addEventListener("click", function (e) {
    btnListElm.classList.add("first");

    console.log(btnListElm.classList);
  });
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

// cross the list when finished
// function crossInput() {
//   listContainer.classList.add("first");

//   console.log(listItem);
// }
// listContainer.addEventListener("click", crossInput);
