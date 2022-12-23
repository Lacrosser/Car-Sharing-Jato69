//bottone logout
logOutButton();


function logOutButton() {

  let li = document.createElement('li');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "/");
  a.textContent = "LogOut";


  let navbarElement = document.querySelector("#navbar")

  li.appendChild(a)
  navbarElement.appendChild(li);


  li.addEventListener('click', logOut);

}


function logOut() {
  localStorage.clear();
  sessionStorage.clear();
  //redirection alla home
  window.location.replace('/');
}