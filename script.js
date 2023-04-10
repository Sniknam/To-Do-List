const toDoListContainer = document.querySelector(".do-list-body");
const listContainer = document.getElementById("listContainer");

listContainer.classList.add("list-container");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");
// addBtn();

// add botton
const inputAddbtn = document.querySelector(".add-btn");

// function printListItem(value) {
//   let btnListElm = document.createElement("button");
//   btnListElm.addEventListener("click", function (e) {
//     if (value) {
//       btnListElm.classList.add("first");

//       console.log(value);
//     } else {
//       btnListElm;
//     }

//     console.log("parent clicked");
//   });
//   let listElmValue = document.createTextNode(value);
//   console.log(listElmValue);
//   if (value === "") {
//     alert("please write your task");
//   } else {
//     let listDelElm = document.createElement("button");

//     listDelElm.addEventListener("click", function (e) {
//       console.log("child clicked");
//       btnListElm.addEventListener("click", event.stopPropagation());
//       listContainer.removeChild(btnListElm);
//     });

//     listDelElm.classList.add("fa");
//     listDelElm.classList.add("fa-trash-o");

//     btnListElm.appendChild(listDelElm);
//     btnListElm.appendChild(listElmValue);
//     btnListElm.classList.add("listBtn");
//     listContainer.appendChild(btnListElm);

//     function clearInput() {
//       const inputAdd = document.querySelector(".add-input").value;

//       if (inputAdd != "") {
//         document.querySelector(".add-input").value = "";
//       }
//     }
//     clearInput();
//   }
// }

const listItem = [];

function printListItem() {
  let btnListElm = document.createElement("button");
    let listDelElm = document.createElement("button");


 
}

function addbtn() {
  // input variable
  const inputAdd = document.querySelector(".add-input").value;

  // print list function
  console.log(listItem);

  
  }

  // listItem.unshift(objInput);
  printListItem(inputAdd);
}
inputAddbtn.addEventListener("click", addbtn);

// cross the list when finished
// function crossInput() {
//   listContainer.classList.add("first");

//   console.log(listItem);
// }
// listContainer.addEventListener("click", crossInput);
