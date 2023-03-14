const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.getElementById("listContainer");

listContainer.classList.add("list-container");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");
// addBtn();

// add botton
const inputAddbtn = document.querySelector(".add-btn");

function addbtn() {
  // input variable
  const inputAdd = document.querySelector(".add-input").value;

  const listItem = [];

  function printListItem(value) {
    let btnListElm = document.createElement("button");
    btnListElm.addEventListener("click", function (e) {
      btnListElm.classList.add("first");

      console.log("parent clicked");
    });
    let listElmValue = document.createTextNode(value);
    if (value === "") {
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
    }
    console.log(listElmValue, typeof listElmValue);
  }
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
