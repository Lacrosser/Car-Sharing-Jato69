//bottone logout
logOutButton();



function nascondiroba(){
if(sessionStorage.getItem(username)!=null && sessionStorage.getItem(password)!=null){

let logout=document.querySelector("#logOut");
logout.setAttribute("hidden","hidden")

}




}



function logOutButton() {

  let li = document.createElement('li');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");
  li.setAttribute("id","logOut");

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


function areaUtenteBuilder(){

  let li = document.createElement('li');
  li.setAttribute('#areaUtente');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "/");
  a.textContent = "Area Utente";

}