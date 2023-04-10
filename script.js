const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.getElementById("listContainer");

listContainer.classList.add("list-container");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");
// addBtn();

// add botton
const inputAddbtn = document.querySelector(".add-btn");

const listItem = [];

function printListItem() {
  const inputAdd = document.querySelector(".add-input").value;
  let btnListElm = document.createElement("button");

  btnListElm.addEventListener("click", function (e) {
    if (inputAdd) {
      btnListElm.classList.add("first");
      console.log(inputAdd);
    } else {
      btnListElm;
    }
    console.log("parent clicked");
  });

  let listElmValue = document.createTextNode(inputAdd);
  console.log(listElmValue);
  if (inputAdd === "") {
    alert("please write your task");
  } else {
    let listDelElm = document.createElement("button");

    listDelElm.addEventListener("click", function (e) {
      console.log("child clicked");
      btnListElm.addEventListener("click", event.stopPropagation());
      listContainer.removeChild(btnListElm);
    });

    listDelElm.classList.add("fa");
    listDelElm.classList.add("fa-trash-o");

    btnListElm.appendChild(listDelElm);
    btnListElm.appendChild(listElmValue);
    btnListElm.classList.add("listBtn");
    listContainer.appendChild(btnListElm);

    function clearInput() {
      if (inputAdd != "") {
        document.querySelector(".add-input").value = "";
      }
    }
    clearInput();
  }
}

function addbtn() {
  const inputAdd = document.querySelector(".add-input").value;

  if (inputAdd) {
    const objInput = { lable: inputAdd, isSelected: false };
    listItem.unshift(objInput);
    console.log(listItem);
  }
  printListItem();
}
inputAddbtn.addEventListener("click", addbtn);
