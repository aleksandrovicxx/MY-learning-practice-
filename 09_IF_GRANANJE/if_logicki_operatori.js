
// 15. Zadatak

// 1. nacin
let temperatura = -25;
if (temperatura < -15 || temperatura > 40){
    console.log(`Ekstremna temperatura`);
} else {
    console.log(`Nije ekstremna temperatura`);
}
 // 2. nacin
 if (temperatura >= -15 && temperatura <= 40){
    console.log(`Nije ekstremna temperatura`);
 } else {
    console.log(`Ekstremna temperatura`);
 }






// 17. Zadatak

let datum = new Date();
let sat = datum.getHours();
let dan = datum.getDay();

if (dan >=0 && dan <= 4 && sat >= 9 && sat < 20){  //radni dani
    console.log("otvoreno")
    document.write(`<img src="otvoreno.jpg" alt="otvorena vrata">`)  // vikend
} else if ( dan > 4 && dan <= 6 && sat >= 10 && sat < 18) {
    console.log("otvoreno")
    document.write(`<img src="otvoreno.jpg" alt="otvorena vrata">`)
} else {
    console.log("zatvoreno")
    document.write(`<img src="zatvoreno.jpg" alt="zatvorena vrata">`)

}

// 16. Zadatak   (a, b c)

let godina = datum.getFullYear();
if (godina % 4 == 0 && godina % 100 != 0 || godina % 400 == 0){
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna");
}

// 18. zadatak

// a)

let b1 = 16;
let b2 = 5;
let b3 = 10;

let maks = b1;
if(b2 > maks){
    maks = b2;    
}
if (b3 > maks) {
    maks = b3;
}
console.log("Najveć broj je: " + maks);

// a) drugi način
let maksimum = null;
if (b1 > b2){
    maksimum = b1;
} else {
    maksimum = b2;
}
if (maksimum < b3){
    maksimum = b3;
}
console.log("Najveći broj je: " + maksimum);

// c)

if (b1 > b2) {
    if(b1 > b3){
        console.log("najveci broj je " + b1);
    } else {
        console.log("Najveci broj je " + b3);
    }
} else if ( b2 > b3 ){
    console.log("Najaveci je " + b2);
} else {
    console.log("najveci je " + b3);
}

// d)

if (b1 > b2 && b1 > b3){
    console.log("Najveci je " + b1);
} 
if (b2 > b1 && b2 > b3){
    console.log("najveci je: " + b2);
} 
if (b3 > b1 && b3 > b2){
    console.log("Najveco je: " + b3);
}




















