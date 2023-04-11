const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.getElementById("listContainer");

listContainer.classList.add("list-container");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");
// addBtn();

// add botton
const inputAddbtn = document.querySelector(".add-btn");
const inputAdd = document.querySelector(".add-input").value;
const objInput = { lable: inputAdd, isSelected: false };
const listItem = [];

function printListItem() {
  listContainer.innerHTML = "";

  for (let i = 0; i < listItem.length; i++) {
    let slectedItemObj = listItem[i];
    let btnListElm = document.createElement("button");
    let listDelElm = document.createElement("button");
    let listElmValue = document.createTextNode(slectedItemObj.lable);
    listDelElm.classList.add("fa");
    listDelElm.classList.add("fa-trash-o");
    btnListElm.appendChild(listDelElm);
    btnListElm.appendChild(listElmValue);
    btnListElm.classList.add("listBtn");
    if (slectedItemObj.isSelected === true) {
      btnListElm.classList.add("first");
    }
    listContainer.appendChild(btnListElm);

    function cross() {
      if (slectedItemObj.isSelected === false) {
        slectedItemObj.isSelected = true;
      } else {
        slectedItemObj.isSelected = false;
      }
      printListItem();

      console.log(listItem);
    }
    btnListElm.addEventListener("click", cross);
  }

  // btnListElm.addEventListener("click", function (e) {
  //   if (objInput.isSelected === false) {
  //     btnListElm.classList.add("first");

  //     objInput.isSelected = true;
  //     listItem.unshift(objInput);
  //   } else if (objInput.isSelected === true) {
  //     btnListElm.classList.add("second");
  //     objInput.isSelected = false;
  //     listItem.push(objInput);
  //   } else {
  //     btnListElm;
  //   }
  //   console.log("parent clicked");
  // });
  // console.log(listElmValue);
  // if (inputAdd === "") {
  //   alert("please write your task");
  // } else {
  //   let listDelElm = document.createElement("button");
  //   listDelElm.addEventListener("click", function (e) {
  //     console.log("child clicked");
  //     btnListElm.addEventListener("click", event.stopPropagation());
  //     listContainer.removeChild(btnListElm);
  //   });

  //   function clearInput() {
  //     if (inputAdd != "") {
  //       document.querySelector(".add-input").value = "";
  //     }
  //   }
  //   clearInput();
  // }
}

function addbtn() {
  const inputAdd = document.querySelector(".add-input").value;
  const objInput = { lable: inputAdd, isSelected: false };

  if (inputAdd) {
    listItem.unshift(objInput);
    console.log(listItem);
  }
  printListItem();
}
inputAddbtn.addEventListener("click", addbtn);
