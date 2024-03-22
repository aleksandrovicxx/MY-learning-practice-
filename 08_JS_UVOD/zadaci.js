//Zadatak 2
// let sati = 14;
let minutiOdPonoci = 83;

let sati = Math.floor(minutiOdPonoci / 60);

let minuti = minutiOdPonoci % 60;

console.log("Od ponoći je prošlo :" + sati + " sati i " + minuti + " minuta.")




// Zadatak 1.1 - Koliko je minuta ostalo do ponoći

// let doPonoći = 24 * 60 - odPonoci;
// console.log("Minuta do ponoći: doPonoći: " + doPonoći);

//Zadatak 2 - Kusur
// Prva konverzija (eur -> din)
let cena = 1;
let novcanica = 1;
let kusur = novcanica - cena;
console.log("Vaš kusur je: " + kusur)

//Zadatak 3.


//Zadatak 6.
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDin = ukupnoEur * kursEur;
console.log(ukupnoDin);

//druga konverzija (din -> eur)
let novacDin = 5000;
let novacEur = novacDin / kursEur;
console.log(novacEur);


// // Zadatak 7.
// //Prva konverzija (eur -> dol uz pomoc dinara)
// let brojEur = 100;
// let kursDol = 106.79;

// // let brojDin = brojEur * kursEur;
// // let brojDol = brojDin / kursDol;

// let brojDol = brojEur * kursEur / kursDol;
// console.log(brojDol);

// Druga konverzija (dol -> eur uz pomoc dinara)
let brojEurPosedujemo = 100;
let kursEurr = 117.01;
let kursDol = 106.79;
let kursDin = kursEurr - kursDol;
// let imamoEur = brojDol / kursDin;
// console.log("100$ je " + imamoEur + "€");

//Zadatak 8.
let temp = 20;
let farenhajt = temp * 1.8 + 32;
let kelvin = temp + 273.15;
console.log("20°C je " + farenhajt + "°F");
console.log("20°C je " + kelvin + "K");

//Zadatak 9.









//Zadatak 4.
let datum = new Date(); // datum je promenljiva koja sadrži  info o trenutnom datumu i vremenu
let god = datum.getFullYear();
let mes = datum.getMonth();
let dat = datum.getDate();
console.log(god, mes + 1, dat);

