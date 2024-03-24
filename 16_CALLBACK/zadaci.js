// Test primeri
let a = [6, 8, 9, 3, 1]

//Zadatak 2:
a = [6, 8, 9, 3, 1];

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;        
    });
    return suma;
}


// Zadatak 5:
a = [6, 8, 9, 3, 1];

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el =>{
        if (el > max){
            max = el;
        };
    });
    return max;
}

console.log(sumaElem(a));
console.log(maxVr(a));

//Zadatak 3:
a = [6, 8, 9, 3, 1];

let proizvodElem = niz =>{
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    });
    return proizvod;
}

console.log(proizvodElem(a));

// Tadatak 4:
a = [6, 8, 9, 3, 1];


let srednjaVrElemNiza = niz =>{
    let zbir = 0;
    let brojElemenata = 0;
    niz.forEach(el => {
        zbir += el;
        brojElemenata++;
    });
    let srednjaVrednost = zbir / brojElemenata;
    return srednjaVrednost;
}
console.log(srednjaVrElemNiza(a));

// Zadatak 6:
a = [6, 8, 9, 3, 1];

let minVredn = niz => {
    let minimalna = niz[0];
    niz.forEach(el =>{
        if (el < minimalna){
            minimalna = el;
        }
    });
    return minimalna;
}

console.log(minVredn(a));

// Zadatak 7:
a = [6, 8, 9, 3, 1];

let indexMaxElem = niz =>{
    let maxVre = niz[0];
    let indexMaxEl = 0;
    niz.forEach ((el, i) =>{
        if(el > maxVre){
            maxVre = el;
            indexMaxEl = i;
        }
    });
    return indexMaxEl
}
console.log(indexMaxElem(a));

// Zadatak 8:
a = [6, 8, 9, 3, 1];

let indexMinElem = niz =>{
    let minVre = niz[0];
    let indexMinEl = 0;
    niz.forEach ((el, i) =>{
        if(el < minVre){
            minVre = el;
            indexMinEl = i;
        }
    });
    return indexMinEl
}

console.log(indexMinElem(a));

// //Zadatak 9:

let brElemVećihOdSrVr = niz =>{
    srednjaVrElemNiza(niz);
    let brojvećih = 0;
    niz.forEach (el => {
        if (el > srednjaVrElemNiza){
            brojvećih++
        }
    });
    return brojvećih;
}
console.log(brElemVećihOdSrVr(a));

//Zadatak 19:
let dužinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

let imena = ["Stefan", "Vladislav", "Nikola", "Milan", "Mevena", "Maja"];

dužinaSvihStringova(imena)

//Zadatak 20:
let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length; 
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}

console.log(stringMaxDuzina(imena));

//Zadatak 24:
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        //c.push(a[i], b[i])
        c.push(el, b[i]);
    });
    return c;
}

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];
console.log(zad24(n1, n2));

//Zadatak 25:
let zad25for = (a, b) => {
    let n = a.length;
    let c= [];
    for (let i = 0; i < n; i++){
        c[i] = a[i] * b[i]; // c.push(a[i] * b[i])
    }
    return c;
}

console.log(zad25for(n1, n2));

let zad25 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push (el * b[i])
    });
    return c;
}
console.log(zad25(n1, n2));

// Zadatak 26:
//  b[i] = (a[i] + a[2n - 1 - i]) / 2 

let zad26for = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for (let i = 0; i < n; i++){
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}

console.log(zad26for(n1));
console.log(zad26for(n2));

let n3 = [5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26for(n3));

let zad26ForEach = a =>{
    let b =[];
    let k = a.length;
    let n = k / 2;
    a.forEach((el, i) => {
        if (i < n){
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}

console.log(zad26ForEach(n3));