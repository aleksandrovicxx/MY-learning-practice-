//Klasične (imenovane) funkcije

function sum(a, b){
    return a + b;
}

let rez = sum (1, 2); // poziv funkcije (po imenu, iza koga se navode argumenti)
console.log(rez);

//Anonimne funkcije (funkcije bez imena)

let suma = function (a, b){
    return a + b;
}

console.log(suma(1, 2));


// ARROW FUNKCIJE (= anonimne funkcije koje imaju 2 specifična svojstva)
// 1) imaju skraćen zapis
// 2) značenje ključne reči "THIS"

let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(1, 2));

let hello = () => {
    console.log(`Hello world!`);
}
hello();
hello();

let echo = (s1, s2) => {
    let result = s1 + ", " + s2;
    console.log(result);
}
echo ("Stefan", "Stanimirović")
echo ("Jelena", "Matejić")