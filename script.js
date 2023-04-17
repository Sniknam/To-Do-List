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
let listItem = [];

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

    //crossing task from the list
    function crossList() {
      // remove item from list
      listItem.splice(i, 1);

      //when item is selectede (finishid task -cross)
      if (slectedItemObj.isSelected === false) {
        listItem.push(slectedItemObj);
        slectedItemObj.isSelected = true;

        // when item unselected (unfinished task - nucrossed , back to list  )
      } else if (slectedItemObj.isSelected === true) {
        slectedItemObj.isSelected = false;
        listItem.unshift(slectedItemObj);
      }
      // reprinting the list
      printListItem();
    }
    btnListElm.addEventListener("click", crossList);

    // remove task from list
    function removeList(event) {
      event.stopPropagation();
      const filterListItem = listItem.filter((item) => {
        return item.lable != slectedItemObj.lable;
      });

      listItem = filterListItem;

      printListItem();
    }

    listDelElm.addEventListener("click", removeList);
  }
}

printListItem();

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
