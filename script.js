// get container from html
const listContainer = document.getElementById("listContainer");

// adding class to container
listContainer.classList.add("list-container");
listContainer.classList.add("listBtn");
listContainer.classList.add("lastBtn");

//get add button from html
const inputAddbtn = document.querySelector(".add-btn");
// create array for adding list item iside
let listItem = [];

// print list inside array
function printListItem() {
  // clear container
  listContainer.innerHTML = "";
  // loop inside listItem array
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
      // reprinting the list to show in page
      printListItem();
    }
    btnListElm.addEventListener("click", crossList);

    // remove task from list
    function removeList(event) {
      // both button that create on prinList , working separatly
      event.stopPropagation();
      //filter item inside array by id
      const filterListItem = listItem.filter((item) => {
        return item.id != slectedItemObj.id;
      });
      //after filtering should listItem should equal with filter list to give back a new list withe changes
      listItem = filterListItem;
      // reprinting list to show in page
      printListItem();
    }

    listDelElm.addEventListener("click", removeList);
  }
}
// call function to print list
printListItem();

function addbtn() {
  // get value inside input (what is typing)
  const inputAdd = document.querySelector(".add-input").value;

  //creat object to add inside the array with 3 keys.
  //lable: for print the input value ,
  //isSelected : for cross a list (crossList function),
  //id:give us a random number to usding on remove function
  const objInput = { lable: inputAdd, isSelected: false, id: Math.random() };

  if (inputAdd) {
    //adding to the first item
    listItem.unshift(objInput);
    // clear input after adding item
    document.querySelector(".add-input").value = "";
    //if input is empty
  } else if (inputAdd === "") {
    alert("please write your task");
  }
  printListItem();
}

inputAddbtn.addEventListener("click", addbtn);
