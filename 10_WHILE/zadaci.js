// Zadatak 1
let i = 1;
while(i <= 20){
    console.log(i);
    i++;
}

//Zadatak 1a

i = 1;
let poruka = "";
while(i <= 20){
    poruka = poruka + i + " " ;
    i++;
}
console.log(poruka);

/* 
#     |   i   |   poruka
--------------------------
0     |   1   |     ""
1     |   2   |     "1 "  
2     |   3   |     "1 2 "
3     |   4   |     "1 2 3 "
......|.......|      ......
20    |   21  |     "1 2 3 ... 20" 
*/


// Zadatak 2
// 1.način
i = 20;
while (i >=1 ){
    console.log(i);
    i--;
}

// 2.način
i = 1;
while (i <= 20) {
    console.log(21-i);
    i++;
}

// Zadatak 3
// 1.način
i = 1;
while(i <= 20){
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// 2.način
i = 2;
while (i <= 20) {
    console.log(i);
    i = i + 2;
}

// Zadatak 4

let n = 1;
let redni_broj_paragrafa = 1;
let boja = 4;
while(n <= 3){
    document.write(`<p style="color: #${boja};">Paragraf broj ${redni_broj_paragrafa}</p>`)    
    redni_broj_paragrafa++;
    n++;
    boja = boja + 489;
}

// zadatak 5 (JEDNA SLIKA A RAZLICITA DVA OKVIRA)

let okviri = ["solid 2px red", "dashed 3px green", "dotted 4px blue", "double 5px orange", "groove 6px purple"];
i = 0
let o = 1;
while (i < 4) {
  document.write(`<img style="border: ${okviri[o]};" src="pozdaina.png" alt="Slika">`)
  o++;
  i++;
}

// Zadatak 4
// drugi način

let boje = ["red", "blue", "green"]
i = 0;
while(i <= 2){
    document.write(`<p style="color:${boje[i]} ;">Paragraf</p>`)    
    i++;
}

//Zadatak 4 sa časa:
n = 11 ;
i = 1 ;
while(i <= n){
    if (i % 3 == 1){
        document.body.innerHTML += `<p class='plava'>Paragraf broj ${i}</p>`;
    } else if (i % 3 == 2){
        document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i}</p>`;
    } else {
        document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i}</p>`;
    }  
    i++;
}