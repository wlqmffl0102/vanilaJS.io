const loginForm = document.querySelector("#nameForm");
const loginInput = document.querySelector("#setName");
const printUserName = document.querySelector("#userName")
const HIDDEN_CLASSNAME = "hidden";

function SaveName(event)  {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const name = loginInput.value;
    localStorage.setItem("username", name);
    printName(name);

}
  function printName(name){
    printUserName.classList.remove(HIDDEN_CLASSNAME);
    printUserName.innerText = `안녕 ${name}, 만나서 반가워`;
    
  }

  loginForm.addEventListener("submit", SaveName);
const savedUsername = localStorage.getItem("username");

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", SaveName);
}else {
	printName(savedUsername);
}
