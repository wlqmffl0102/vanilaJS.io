const todoListBtn = document.getElementById("todolistBtn");
const todoListInput = document.getElementById("todolist");
const todoList = document.getElementById("list"); 
let cnt =1;
const toL = "todoList";

  function appendList(){
      const contents = document.createElement("li");
      contents.setAttribute("class", "list-group-item");
      contents.setAttribute("id", "li"+cnt);
      const removeBtn = document.createElement("button");
      const removeName = document.createTextNode("삭제");
      removeBtn.appendChild(removeName);
      removeBtn.setAttribute("onclick",`remove(${cnt});`);
      contents.innerText = todoListInput.value;
      contents.appendChild(removeBtn);
      todoListInput.value="";
      todoList.appendChild(contents);
      

      localStorageSave(cnt, contents.innerText);

      cnt++;
  }
  function localStorageSave(cnt, toLValue){
    console.log(toL+cnt);
    console.log(toLValue);
    localStorage.setItem(toL+cnt, toLValue);
  }

  function remove(cnt){
    let li = document.getElementById("li"+cnt);
    console.log(li.innerText);
    todoList.removeChild(li);

    localStorage.removeItem(toL+cnt);
  }
  todoListBtn.addEventListener("click", appendList);