// Bez CALLBACK funkcije
let a = [-6, 8, 11, 6, 0];
let b = ["pera", "mika", "laza"]

function ispisNizaKonzola (niz) {
    let s = "";
    for (let i = 0; i < niz.length; i++){
        s += niz[i] + " ";
    }    
    console.log(s);
}

function ispisNizaStranica (niz) {
    let s = "";
    for (let i = 0; i < niz.length; i++){
        s += niz[i] + " ";
    }    
    let div = document.getElementById("container");
    div.innerHTML += s;
}
ispisNizaKonzola(a);
ispisNizaKonzola(b);
ispisNizaStranica(a);
ispisNizaStranica(b);

// Funkcija 1: niz => {for petljom prodemo kroz sve elemente niza i genersani string ispisujemo u konzoli}
// Funkcija 2: niz => for petljom prodemo kroz sve elemente niza i genersani string ispisujemo na stranici}
// A može i ovako:
// Funkcija : (niz, način) => {for petljom prodemo kroz sve elemente niza i genersani string ispisujemo na zadati način}


// SA CALLBACK FUNKCIJAMA:
function ispisKonzola (p) {
    console.log(p);
}

function ispisStranica (p) {
    let div = document.getElementById("container");
    div.innerHTML += p;
}

function ispisNiza (niz, cb) {
    let s = "";
    for (let i = 0; i < niz.length; i++){
        s += niz[i] + " ";
    }    
    cb (s);
}
ispisNiza  (a, ispisKonzola);
ispisNiza (b, ispisKonzola);
ispisNiza (a, ispisNizaStranica);
ispisNiza (b, ispisStranica);

// Anonimna funkcija kao callback funkcija
ispisNiza([1, 2, 3, 4, 5], function(p) {
    console.log(p);
});

//Arrow funkcija kao callback funkcija
ispisNiza ([9, 8, 7, 6], p => {
    console.log(p);
});

// FOREACH petlja
a.forEach(ispisKonzola);
// forEach petlja - prolazi kroz sve elemente niza i prosleđuje ih kao argument u funkciju
// let a = [-6, 8, 11, 6, 0];
// ispisKOnzola(-6);
// ispisKOnzola(8);
// ispisKOnzola(11);
// ispisKOnzola(6);
// ispisKOnzola(0);

b.forEach(ispisKonzola);
//let b = ["pera", "mika", "laza"]
// ispisKOnzola("pera");
// ispisKOnzola("mika");
// ispisKOnzola("laza");

a.forEach(function(e){
    console.log(e);
});

a.forEach(e =>{
    let div = document.getElementById("container");
    div.innerHTML += e + " ";
});

a.forEach((e, i) => {
    console.log(`Element ${e} u nizu ima indeks ${i}`);
})