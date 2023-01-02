var text = document.querySelector('#faq');
var btn = document.querySelector('#faqBtn');

if(sessionStorage.getItem("username") != null || localStorage.getItem("username") != null){
    text.removeAttribute('placeholder');
    text.removeAttribute('readonly');
    btn.removeAttribute('disabled');
}

function pulisci(){
    text.value = "";
}

btn.addEventListener('click',pulisci);