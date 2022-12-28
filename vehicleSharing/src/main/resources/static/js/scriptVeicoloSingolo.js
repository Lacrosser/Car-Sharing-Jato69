const GETVEICOLIBYID = "http://localhost:9069/api/veicoli/";




window.addEventListener("load", initPagina)

// initPagina();


function creaCardSingola(veicolo) {

    

    creaTitolo(veicolo);
    creaScheda(veicolo);


}



function creaTitolo(veicolo) {
    let modello = veicolo.modello;
    let alimentazione = veicolo.alimentazione;

    console.log(modello);
    console.log(alimentazione);

    let div = document.querySelector("#nomeVeicolo");
    let h1 = document.createElement("h1");
    let h3 = document.createElement("h3");
    let i = document.createElement("i");

    h1.textContent = modello;
    i.textContent = alimentazione;

    h1.setAttribute("style", "color: #00b7c2;");
    h3.setAttribute("id", "tipoAuto");
    h3.setAttribute("style", "color: #4ef037;");
    i.setAttribute("id", "iconaElettrica")

    i.classList.add("bi", "bi-lightning-charge");

    h3.appendChild(i);
    div.appendChild(h1);
    div.appendChild(h3);

}


function creaScheda(veicolo) {
    let colore = veicolo.colore;
    let cilindrata = veicolo.cilindrata;
    console.log(colore);
    console.log(cilindrata);

    let divor = document.querySelector("#sezioneAuto");

    let div = document.createElement("div");
    div.setAttribute("id", "schedaVeicolo")
    div.setAttribute("style", "background-color: rgb(18,132,148);")
    div.setAttribute("class", "mt-0")

    divor.appendChild(div);

    let div2 = document.createElement("div");
    div2.setAttribute("id", "fotoVeicolo");
    div2.setAttribute("class", "mb-0");

    div.appendChild(div2);


    let div3 = document.createElement("div");
    div3.setAttribute("class", "m-5");

    div.appendChild(div3);

    let div4 = document.createElement("container");
    div4.setAttribute("class", "container");

    div3.appendChild(div4);

    let h3ul = document.createElement("h3");
    h3ul.textContent = "Descrizione Veicolo";

    div4.appendChild(h3ul);

    let ul = document.createElement("ul");

    div4.appendChild(ul);

    ul.setAttribute("class", "list-group list-group-flush");
    let li = document.createElement("li");
    let li2 = document.createElement("li");

    li.setAttribute("class", "list-group-item");
    li2.setAttribute("class", "list-group-item");
    li.textContent = "Potenza: " + cilindrata;
    li2.textContent = "Colore: " + colore;

    ul.appendChild(li);
    ul.appendChild(li2);


    let div5 = document.createElement("div");
    div5.setAttribute("id", "prezzo");
    div5.setAttribute("class", "mt-5");
    let h31 = document.createElement("h3")
    h31.innerHTML = "Prezzo e tariffe: <strong>0,19€/min</strong>";

    div3.appendChild(div5);
    div5.appendChild(h31);




    let div6 = document.createElement("div")
    div6.setAttribute("id", "pulsantiScheda");
    div6.classList.add("d-flex", "justify-content-end", "p-3");

    let div7 = document.createElement("div");
    div7.setAttribute("class", "m-1");
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.setAttribute("type", "button")
    a.classList.add("btn", "primaryBtn", "primaryBtnVerde");
    a.textContent = "Vedi su mappa"

    let div8 = document.createElement("div");
    div8.setAttribute("class", "m-1");
    let a2 = document.createElement("a");
    a2.setAttribute("href", "");
    a2.setAttribute("type", "button");
    a2.classList.add("btn", "primaryBtn", "primaryBtnVerde");
    a2.textContent = "Prenota Ora"

    div7.appendChild(a);
    div8.appendChild(a2);
    div6.appendChild(div7);
    div6.appendChild(div8);
    div.appendChild(div6)


}



function initPagina() {
    const PIPPO = new URLSearchParams(window.location.search)
    console.log(typeof (PIPPO.get("id")));
    PIPPO.get("id")
    fetch(GETVEICOLIBYID + PIPPO.get("id"))
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response)
            creaCardSingola(response);
            //inserire funzione per mostrare i veicoli
        })
};