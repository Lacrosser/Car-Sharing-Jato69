//bottone logout
//logOutButton();



nascondiroba();

function nascondiroba() {
  if (sessionStorage.getItem("username") != null  || localStorage.getItem("username")!=null) {
    

    areaUtenteBuilder();

    if(sessionStorage.getItem("tipo") == "A"  || localStorage.getItem("tipo") == "A"){
      adminBuilder();
    }

    logOutButton();


  } else {
    loginBuilder();

  }

  

}

function logOut() {
  localStorage.clear();
  sessionStorage.clear();
  //redirection alla home
  window.location.assign('/');
}


function logOutButton() {

  let li = document.createElement('li');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");
  li.setAttribute("id", "logOut");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "/");
  a.textContent = "LogOut";


  let navbarElement = document.querySelector("#navbar")

  li.appendChild(a)
  navbarElement.appendChild(li);


  li.addEventListener('click', logOut);

}




function areaUtenteBuilder() {

  let li = document.createElement('li');
  li.setAttribute("id",'areaUtente');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "areaUtente");
  a.textContent = "Area Utente";
  let navbarElement = document.querySelector("#navbar")
  if(window.location.pathname == "/areaUtente"){
    a.classList.add('active');
    a.setAttribute('aria-current','page');
  }

  li.appendChild(a)
  navbarElement.appendChild(li);

}
function adminBuilder() {

  let li = document.createElement('li');
  li.setAttribute("id",'areaAmministratore');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "dashboard");
  a.setAttribute('id','areaAdmin');
  a.textContent = "Area Admin";
  if(window.location.pathname == "/dashboard" || window.location.pathname == "/paginaIns" || window.location.pathname == "/adminView"){
    a.classList.add('active');
    a.setAttribute('aria-current','page');
  }
  let navbarElement = document.querySelector("#navbar")

  li.appendChild(a)
  navbarElement.appendChild(li);

}

function loginBuilder() {

  let li = document.createElement('li');
  li.setAttribute("id",'login');
  li.setAttribute("class", "nav-item ms-auto ms-lg-0");

  let a = document.createElement("a");
  a.setAttribute("class", "nav-link");
  a.setAttribute("href", "/login");
  a.textContent = "Accedi";
  if(window.location.pathname == "/login" || window.location.pathname == "/signup"){
    a.classList.add('active');
    a.setAttribute('aria-current','page');
  }

  let navbarElement = document.querySelector("#navbar")

  li.appendChild(a)
  navbarElement.appendChild(li);

}