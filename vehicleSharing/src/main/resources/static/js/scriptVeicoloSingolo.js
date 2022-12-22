const GETVEICOLIBYID="http://localhost:9069/api/veicoli/";




window.addEventListener("load",initPagina())




function creaCardSingola(veicolo){
    
    

    creaTitolo(veicolo);
    creaScheda(veicolo);


}


function creaScheda(veicolo){

    let colore=veicolo.colore;
    let cilindrata=veicolo.cilindrata;


    let divor=document.querySelector("#sezioneAuto");

    let div=document.createElement("div");
    div.setAttribute("id","schedaVeicolo")
    div.setAttribute("style","background-color: rgb(18,132,148);")
    div.setAttribute("class","mt-0")


    let div2=document.createElement("div");
    div2.setAttribute("id","fotoVeicolo");
    div2.setAttribute("class","mb-0");

    let div3=document.createElement("div");
    div3.setAttribute("class","m-5");

    let div4=document.createElement("container");
    div4.setAttribute("class","container");

    let h3ul=document.createElement("h3");
    h3ul.textContent="Descrizione Veicolo";

    let ul=document.createElement("ul");

    for (let index = 0; index < 2; index++) {
        let li=document.createElement("li");
        ul.appendChild(li)
        
        if(index=0){
            li.textContent=cilindrata;
        }else{
            li.textContent=colore;
        }
        
    }

    let div5=document.createElement("div");
    div5.setAttribute("id","prezzo");
    div5.setAttribute("class","mt-5");
    let h31=document.createElement("h3")
    h31.innerHTML="Prezzo e tariffe: <strong>15€/g</strong>";


    let div6=document.createElement("div")
    div6.setAttribute("id","pulsantiScheda");
    div6.classList.add("d-flex","justify-content-end","p-3");

    let div7=document.createElement("div");
    div7.setAttribute("class","m-1");
    let a=document.createElement("a")
    a.setAttribute("href","")
    a.setAttribute("type","button")
    a.classList.add("btn","primaryBtn","primaryBtnVerde");
    a.textContent="Vedi su mappa"

    let div8=document.createElement("div");
    div8.setAttribute("class","m-1");
    let a2=document.createElement("a");
    a2.setAttribute("href","");
    a2.setAttribute("type","button");
    a2.classList("btn","primaryBtn","primaryBtnVerde");
    a2.textContent="Prenota Ora"

    divor.appendChild(div);

    div.appendChild(div2);

    div.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(h3ul);
    div4.appendChild(ul);

    div3.appendChild(div5);
    div5.appendChild(h31);

    div.appendChild(div6)
    div6.appendChild(div7);
    div6.appendChild(div8);

}

function creaTitolo(veicolo){
    let modello=veicolo.modello;
    let alimentazione=veicolo.alimentazione;

    let div=document.querySelector("#nomeVeicolo");
    let h1=document.createElement("h1");
    let h3=document.createElement("h3");
    let i=document.createElement("i");

    h1.textContent=modello;
    i.textContent=alimentazione;

    h1.setAttribute("style","color: #00b7c2;");
    h3.setAttribute("id","tipoAuto");
    h3.setAttribute("style","color: #4ef037;");
    i.setAttribute("id","iconaElettrica")

    i.classList.add("bi","bi-lightning-charge");

    h3.appendChild(i);
    div.appendChild(h1);
    div.appendChild(h3);

}

function initPagina(){
    // const PIPPO= new URLSearchParams(window.location.search)
    // PIPPO.get("id");
    fetch(GETVEICOLIBYID+"1")
.then (data=>{
    return data.json()
})
.then(response =>{
    console.log(response)
    creaCardSingola(response);
    //inserire funzione per mostrare i veicoli
})
}