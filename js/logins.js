const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const deleteUserBtn = document.querySelector(".user-change");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
  deleteUserBtn.style.visibility = "visible";
  deleteUserBtn.addEventListener("click", onDeleteUser);
}

function paintGreeting(username) {
  greeting.innerText = `HELLO ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onDeleteUser() {
  localStorage.clear();
  //   window.reload();
  location.replace(location.href);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

function init() {
  if (savedUserName === null) {
    //There is no username in localstorage, show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  } else {
    // show the greeting, not show form
    paintGreeting(savedUserName);
  }
}

init();
