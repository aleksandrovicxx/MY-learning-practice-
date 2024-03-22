let a = -5;
let b = 5;
if (a > b){
    console.log(`a je veće od b`);
} 
else {
    console.log(`a nije veće od b`);
}

//


//
let zapremina = 120;
if (zapremina <= 100) {
    document.write("<p style='color: green;'>Pack up</p>");
} 
else {
    document.write("<p style='color: red;'> Throw away</p>")
}


// Zadatak 2.
let t = -15;
if(t >= 0){
    let paragraf = document.getElementById("temperatura") // preuzmem paragraf iz HTML, po njegovom ID
    paragraf.innerHTML = "Temperatura je u <b>plusu</b>" // upisem u paragraf preko .innerHTML
    paragraf.style.color = "red"
} else {
    let paragraf = document.getElementById("temperatura")
    paragraf.innerHTML = "Temperatura je u <b>minusu</b>"
    paragraf.style.color = "blue"
}





//Zadatak 3.

let godinarodjenja = 2003;
let datum = new Date();
let godina = datum.getFullYear();
let trenutnogodina = godina - godinarodjenja;
let preostalodopunoletstva = 18 - trenutnogodina;

if (trenutnogodina == 18){
    console.log("Osoba ove godine postaje punoletna");
    document.write(`<img src="torta-za-rodjendan-27.png" alt="Slika torte" width="300" height="300">`);
} else if (trenutnogodina < 18) {
    console.log("Osoba je maloletna");
} else {
    console.log("Osoba je puoletna");
}

// Zadatak 4.

let trenutnovreme = new Date();
let trenutnosati = trenutnovreme.getHours();
if ( trenutnosati >= 12 ) {
    console.log("Podne");
} else {
    console.log("Jutro")
}

// Zadatak 5.

let pol = "m";

if(pol === "m"){
    document.write(`
    <img src="musko.png" alt="" width="300px" height="300px">`)
} else {
    document.write(`
    <img src="žensko.png" alt="" width="300px" height="300px">`)
}

