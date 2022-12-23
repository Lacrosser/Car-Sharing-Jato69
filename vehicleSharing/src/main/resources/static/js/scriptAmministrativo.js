//pagina di script per il check di utente
 
let btnModifica=document.querySelector("#modificaVeicolo");

let btnAggiunta=document.querySelector("#aggiuntaVeicolo ")







function checkConnection(){

if(sessionStorage.getItem("username")==null || sessionStorage.getItem("password")==null){
    window.location.replace("/login");


}else if(sessionStorage.getItem("tipo")=="C"){
    window.location.replace("/");
    console.log("LOGGATI SCEMUNITO")

    //inserire pagina di errore
    
    
}
else if(sessionStorage.getItem("tipo")=="B"){
    console.log("UTENTE SBAGLIATO DI TIPO B");

}else{



}

    
}


btnAggiunta.addEventListener("click",function(){
window.location.replace("/paginaIns")

})

btnModifica.addEventListener("click",function(){
    window.location.replace("/adminView")
})

