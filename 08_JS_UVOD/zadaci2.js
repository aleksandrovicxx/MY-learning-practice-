//    1. Zadatak
let sati = 23;
let minuti = 60;
 
let minutaOdPonoci = sati * 60 + minuti;
console.log("Posle ponoci je proslo: " + minutaOdPonoci + " minuta");


//     2. Zadatak
let minutii = 183;
let satii = Math.floor(minutii / 60);
let minutiii = minutii % 60;
console.log("Od ponoći je prošlo: " + satii + " sati i " + minutiii + " minuta.")


//      3. Zadatak

let cenaRobe = 500;
let unetaNovčanica = 1000;
let kusur = unetaNovčanica - cenaRobe;
console.log("Kusur je: " + kusur) 


//       4. Zadatak
//URAĐENO


//       5. Zadatak
let datum = new Date ();
let dan = datum.getDate();
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();
//Prvi
console.log("Trenutni datum je: " + dan + ".", mesec + ".", godina + ".");
//Drugi
console.log("Trenutni datum je: " + godina + "/", mesec + "/", dan + ".")


//       6. Zadatak
let ukupanBrojEvraKojiPosedujemo = 10;
let trenutniKurs = 117.21;
let DinariNakonRazmene = ukupanBrojEvraKojiPosedujemo * trenutniKurs;
console.log("Kada " + ukupanBrojEvraKojiPosedujemo + "€ razmenimo u dinarima, imaćemo: " + DinariNakonRazmene + "."); 
let ukupanBrojDinaraKojiPosedujemo = 2380;
let evriNakonRazmene = Math.floor(ukupanBrojDinaraKojiPosedujemo / trenutniKurs);
console.log("Kada " + ukupanBrojDinaraKojiPosedujemo + "dinara razmenimo u evrima, imaćemo: " + evriNakonRazmene + "€."); 


//        7. Zadatak
let evrikojeposedujemo = 10;
let evrodinar = 117.21;
let dolardinar = 107.42;

let dinarnakonrazmene = evrikojeposedujemo * evrodinar;
let dolarnakonrazmene = Math.floor(dinarnakonrazmene / dolardinar);

console.log("Nakon razmene evro u dolar imaćemo :" + dolarnakonrazmene + "$.")


let dolarikojeposedujemo = 10;
let dolarudinar = 107.42;
let dinaruevro = 117.21;

let izdolarudinar = dolarikojeposedujemo * dolarudinar;
let izdinaruevro = Math.floor(izdolarudinar / dinaruevro);

console.log("Nakon razmene dolara u evre imaćemo: " + izdinaruevro + "€")


//       8. Zadatak
let tempC = 5;
let tempF = tempC * 1.8 + 32;
console.log(tempF);

tempf = 41;
tempc = (tempf - 32) / 1.8;
console.log(tempc);


//        9. Zadatak
let temperaturaC = 5;
let temperaturaK = temperaturaC + 273.15;
console.log(temperaturaK)

let temperaturak = 273.15;
let temperaturac = temperaturak - 273.15;
console.log(temperaturac)
