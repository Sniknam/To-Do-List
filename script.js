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

    function crossList() {
      if (slectedItemObj.isSelected === false) {
        listItem.splice(i, 1);
        listItem.unshift(slectedItemObj);
        slectedItemObj.isSelected = true;
      } else {
        slectedItemObj.isSelected = false;
      }

      printListItem();
      console.log(listItem);
    }
    btnListElm.addEventListener("click", crossList);

    function removeList(event) {
      event.stopPropagation();
      const filterListItem = listItem.filter((item) => {
        return item.lable != slectedItemObj.lable;
      });
      console.log(filterListItem);
      listItem = filterListItem;
      console.log(listItem);

      printListItem();

      // console.log(listItem);
      // listItem.splice(i, 1);
      // listContainer.removeChild(btnListElm);
      // console.log(listItem);
    }

    listDelElm.addEventListener("click", removeList);
  }
}

function addbtn() {
  const inputAdd = document.querySelector(".add-input").value;
  const objInput = { lable: inputAdd, isSelected: false };

  if (inputAdd) {
    listItem.unshift(objInput);
  } else if (inputAdd !== "") {
    document.querySelector(".add-input").value = "";
  } else if (inputAdd === "") {
    alert("please write your task");
  }
  printListItem();
  console.log(listItem);
}
inputAddbtn.addEventListener("click", addbtn);
