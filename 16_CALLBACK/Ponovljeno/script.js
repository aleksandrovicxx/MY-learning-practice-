let a = [-6, 8, 11, 6, 0]
let b = ['Pera', 'Mika', 'Laza']

// Bez callback funkcija
function ispisNIzaKonzola(niz){
    let s = ''
    for (let i = 0; i<niz.length;    i++){
        s += niz[i] + ' '
    }
    console.log(s);
}

function ispisNizaStranica (niz) {
    let s = ''
    for (let i = 0; i<niz.length;    i++){
        s += niz[i] + ' '
    }
    let div = document.getElementById('container')
    div.innerHTML += s
}

ispisNIzaKonzola(a)
ispisNIzaKonzola(b)
ispisNizaStranica(a)
ispisNizaStranica(b)

// Funkcija 1: niz => (for petljom prodjemo lroz sve elemente niza, i generisani string ispisemo u konzoli)
// Funkcija 2: niz => (for petljom prodjemo kroz sve elemente niza, i generisani string ispisemo u div tag)
// A MOZE OVAKO
// Funkcija: niz => (for petljom prodjemo kroz sve elemente niza i generisani string ispisemo na zadati nacin)

// Sa callback funkcijama
function ispisKonzola (p) {
    console.log(p);
}

function ispisStranica(p){
    let div = document.getElementById('container')
    div.innerHTML += p;
}

function ispisNiza (niz, nacin_ispisa){
    let s = ' '
    for(let i = 0; i < niz.length; i++){
        s += niz[i] + ' '
    }
    nacin_ispisa(s)
}

ispisNiza (a, ispisKonzola)
ispisNiza(b, ispisKonzola)
ispisNiza(a, ispisStranica)
ispisNiza(b, ispisStranica)

// Anonimna funkcija kao callback funkcija
ispisNiza([1, 2, 3, 4, 5], function (p) {
    console.log(p);
});

//Arrow funkcija kao callback funkcija
ispisNiza ([9, 8, 7, 6], p =>{
    console.log(p);
})

//forEach petlja
a.forEach(ispisKonzola);
// forEach petlja - prolazi kroz elemente niza i za svaki element niza
//poziva callback funkciju i prosledjuje vrednost elementa kao argument
//a = [-6, 8, 11, 6, 0]
// ispisKonzola(-6)
// ispisKonzola(8)
// ispisKonzola(11)
// ispisKonzola(6)
// ispisKonzola(0)

b.forEach(ispisKonzola);

a.forEach(function(e){
    console.log(e);
})

a.forEach((e) =>{
    let div = document.getElementById('container')
    div.innerHTML += e + ' '
})

a.forEach((e, i) => {
    console.log(`Element ${e} u nizu ima indeks ${i}`);
})