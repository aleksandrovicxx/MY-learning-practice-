
// 12. Zadatak

let br1 = 10;
let br2 = 16;
if(br1 > br2){
    console.log(`Veći broj je ${br1}, a manji broj je ${br2} `)
    if( br1 % 2 == 0){
        console.log(`Veći broj je paran`);
    } else {
        console.log(`Veći broj nije paran`);
    }
    if(br2 % 3 == 0){
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
} else {
    console.log(`Veci broj je ${br2}, a manji broj je ${br1}`);
    if( br2 % 2 == 0){
        console.log(`Veći broj je paran`);
    } else {
        console.log(`Veći broj nije paran`);
    }
    if(br1 % 3 == 0){
        console.log(`Manji broj je deljiv sa 3`);
    } else {
        console.log(`Manji broj nije deljiv sa 3`);
    }
}

// 13. Zadtak

let dan1 = 2;
let mesec1 = 10;
let godina1 = 2023;
let dan2 = 2;
let mesec2 = 10;
let godina2 = 2023;

if (godina1 < godina2) {
    console.log("raniji je prvi");
} else if (godina1 == godina2) {
    if (mesec1 < mesec2){
        console.log("Raniji je prvi");
    } else if (mesec1 == mesec2) {
        if (dan1 < dan2) {
            console.log("raniji je prvi");
        } else if (dan1 > dan2){
            console.log("raniji je drugi");
        } else { 
            console.log(`isti datumi`);
        }
    } else {
        console.log("raniji je drugi");
    }
} else if (godina1 > godina2) {
    console.log("raniji je drugi");
} else if (godina1 == godina2){
    if (mesec1 == mesec2) {
        if (dan2 == dan1){
            console.log(`isti datumi`);
        }
    }
    
}
// 14 Zadatak
let pol = "m";
let godina = 18;

if(pol == "m"){
    if (godina >= 18) {
    console.log(`Korisnik je muškarac i punoletan je`);
    } else if (godina < 18) {
        console.log(`Korisnik je muškarac i maloletan je`);
    } else {
        console.log(`Greška u unosu`);
    }
} else if ( pol === "ž"){
    if (godina >= 18){
        console.log(`korisnik je žena i punoletna je`);
    } else if (godina < 18){
        console.log(`Korisnik je žena i maloletna je`);
    } else {
        console.log(`Greška u unosu`);
    }
} else {
    console.log(`Greška u unosu`);
}
