function logOut() {
    localStorage.clear();
    sessionStorage.clear();
    //redirection alla home
    window.location.replace('/login');
  }

//bottone logout
const logoutButton = document.createElement('button');
logoutButton.textContent = 'Logout';
logoutButton.addEventListener('click', logOut);
document.body.appendChild(logoutButton);

