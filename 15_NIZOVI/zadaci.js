let brojevi1 = [8, 4, -2, 10, 1, 100];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5]; // 0
// Zadatak 2: Odrediti zbir elemenata celobrojnog niza
let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i];  // suma += niz[i];
    }
    return suma;
}
console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));
// Zadatak 3: Odrediti proizvod elemenata celobrojnog niza
let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));



// Zadatak 4.
let srVrednost = niz => {
    let suma = 0;
    for (let i = 1; i < niz.length; i++){
        suma += niz[i];
    }
    let srvr = suma / niz.length;
    return niz.length != 0 ? srvr : 0;
}

let srVrednost2 = niz => niz.length != 0 ? sumaElem(niz) / niz.length : 0;


console.log(srVrednost2(brojevi1));
console.log(srVrednost2(brojevi2));
console.log(srVrednost2(brojevi3));

/*
\/\/\/\/\/\/\/\/  MOŽE DA SE DESI NA TESTU  \/\/\/\/\/\/\/\/

 Napisati funkciju srVrednost koja vraća srednju vrednost celobrojnog niza

/\/\/\/\/\/\/\/\  MOŽE DA SE DESI NA TESTU  /\/\/\/\/\/\/\/\ 
*/

// Zadatak 4a: Odrediti srednju vrednost parnih elemenata celobrojnog niza
let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] % 2 == 0){
            suma = suma + niz[i];
            br++
        }
    }
    if (br != 0){
        return suma / br;
    } else {
        return 0;
    }
}
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

console.log(srVrednostParnih(brojevi4)); // Nan, jer deli nulom
console.log(srVrednost([])); // Nan, jer deli nulom



// Zadatak 5. Odrediti maksimalnu vrednost u celobrojnom nizu
// Koraci;
// 1) Proglasiti prvi element niza za maksimalni
// 2) Proći kroz ostale elemente niza i utvrditi da li ima većeg elementa od, do sada nađenog maksimalnog
// Ako ima ažurirati ovu vrednost
let maxNiza = niz => {
    let max = niz[0];
    for ( let i = 1; i < niz.length; i++){
        if (niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}

console.log(maxNiza(brojevi1));
console.log(maxNiza(brojevi2));
console.log(maxNiza(brojevi3));
console.log(maxNiza(brojevi4));

// Zadtak 7: Odrediti indeks maksimalnog elementa celobrojnog niza
let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++){
        if (niz[i] > max){
            max = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMaxNiza(brojevi5));

// Zadatak 6: Odrediti minimalnu vrednost u celobrojnom nizu

brojevi1 = [8, 4, -2, 10, 1, 100];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5]; 

let minNiza = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(brojevi1));
console.log(minNiza(brojevi2));
console.log(minNiza(brojevi3));


// Zadatak 8: Odrediti indeks minimalnog elementa celobrojnog niza.

// Zadatak 9: Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let veciOdSrednje = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz [i] > srVrednost(niz)){
            br++;
        }
    }
    return br;
}
console.log(veciOdSrednje(brojevi1));
console.log(veciOdSrednje(brojevi2));
console.log(veciOdSrednje(brojevi3));

// Zadatak 10:
let zbirpozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] > 0){
            zbir += niz[i]
        }
    }
    return zbir
}
console.log(zbirpozEl(brojevi1));
console.log(zbirpozEl(brojevi2));
console.log(zbirpozEl(brojevi3));


// DOVRŠITI SVE PRETHODNE ZADATKE /\

// Zadatak 12:
let parniElementiSaNeparnimIndeksom = niz => {
    let brojParnihSaNeparnimIndeksom = 0;
    for (let i = 1; i < niz.length; i+=2){
        if (niz[i] % 2 == 0){
            brojParnihSaNeparnimIndeksom ++;
        }
    }
    return brojParnihSaNeparnimIndeksom;
}

console.log(parniElementiSaNeparnimIndeksom(brojevi1));
console.log(parniElementiSaNeparnimIndeksom(brojevi2));
console.log(parniElementiSaNeparnimIndeksom(brojevi3));
console.log(parniElementiSaNeparnimIndeksom(brojevi4));
console.log(parniElementiSaNeparnimIndeksom(brojevi5));


// Zadatak 13:
let sumaElemenataSaParnimIndeksom = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i+=2){
        suma += niz[i];
    }
    return suma;
}
console.log(sumaElemenataSaParnimIndeksom(brojevi1));
console.log(sumaElemenataSaParnimIndeksom(brojevi2));
console.log(sumaElemenataSaParnimIndeksom(brojevi3));
console.log(sumaElemenataSaParnimIndeksom(brojevi4));
console.log(sumaElemenataSaParnimIndeksom(brojevi5));

// Zadatak 14:

brojevi1 = [8, 4, -2, 10, 1, 100];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5]; 

let menjanjeZnaka = niz => {
    for (let i = 0; i < niz.length; i++){
        niz[i] = niz[i] - (2 * niz[i])
    }
    return niz;
}
console.log(menjanjeZnaka(brojevi1));
console.log(menjanjeZnaka(brojevi2));
console.log(menjanjeZnaka(brojevi3));
console.log(menjanjeZnaka(brojevi4));
console.log(menjanjeZnaka(brojevi5));

// Zadatak 15:
brojevi1 = [8, 4, -2, 10, 1, 100];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5]; 

let menjanjeZnakaNeparnomElementu = niz => {
    for (let i = 0; i < niz.length; i+=2){
        if (niz[i] % 2 != 0){
        niz[i] = niz [i] - (2 * niz[i])
        }
    }
    return niz
}
console.log(menjanjeZnakaNeparnomElementu(brojevi1));
console.log(menjanjeZnakaNeparnomElementu(brojevi2));
console.log(menjanjeZnakaNeparnomElementu(brojevi3));
console.log(menjanjeZnakaNeparnomElementu(brojevi4));
console.log(menjanjeZnakaNeparnomElementu(brojevi5));