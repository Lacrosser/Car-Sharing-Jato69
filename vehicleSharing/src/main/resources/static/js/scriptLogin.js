const LOGIN = "http://localhost:9069/api/utenti/login";


let bottone = document.querySelector("#loginButton");



// let body ={
//     userId:username,
//     password : password
// };


// function loggare() {

//     //let risposta = new body(username, password);

//     fetch(LOGIN,{
//         method: "POST",

//         body:JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json'
//           }

//     })

//         .then(respose => respose.json())
//         .then(data => {
//             var tipos = data.tipo;
//             console.log(tipos);
//             // if (data.tipo === "A" || data.tipo === "B") {

//             //     var tipo = data.tipo;

//             //     console.log(tipo);

//             //     sessionStorage.setItem("username", username);
//             //     sessionStorage.setItem("password", password);
//             //     sessionStorage.setItem("tipo", tipo);

//             //     return true;
//             // } else {

//             //     console.log("utente C")
//             //     sessionStorage.setItem("tipo", tipo);

//             //     return false;
//             // }

//         })

// }


// Invia la richiesta POST al server
function log2() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    const loginData = {
        userId: username,
        password: password
    };
    fetch(LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            var tipos = data.tipo;
            console.log(tipos);
            if (data.tipo === "A" || data.tipo === "B") {

                var tipo = data.tipo;

                console.log(tipo);

                sessionStorage.setItem("username", username);
                sessionStorage.setItem("password", password);
                sessionStorage.setItem("tipo", tipo);

                return true;
            } else {

                console.log("utente C")
                sessionStorage.setItem("tipo", tipo);

                return false;
            }


        });
}


bottone.addEventListener("click", function () {
    log2();
})