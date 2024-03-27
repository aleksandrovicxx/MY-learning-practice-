console.log(document); // document je objekat
console.log(document.body); // body svojstvo document objekta je objekat

let el = document.getElementById("p2");
console.log(el);

let el2 = document.getElementsByClassName("par");
console.log(el2);

//Pristup elementima HTML kolekcije
for (let i = 0; i < el2.length; i++){
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
// Ovo ne može
/*
el2.forEach(el => {
    console.log(el);
});
*/
let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName("p"); // Vraća HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName("p"); // Vraća NodeList
console.log(el4);
el4.forEach(el => {
    console.log(el);
});
console.log(el4[0]);

// Array (forEach), HTMLcollection (for), NodeList (forEach)

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par");
console.log(t2);

let t3 = document.querySelectorAll(".par");
console.log(t3);

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll("div p.par, div a.par");
console.log(t4);

let prvi_paragraf_na_stranici = document.querySelector("p");
console.log(prvi_paragraf_na_stranici);

let prvi_div_sa_klasom_error = document.getElementsByClassName("error");
console.log(prvi_div_sa_klasom_error[0]);
let poslednji_red_u_tabeli = document.getElementsByTagName("td");
console.log(poslednji_red_u_tabeli[poslednji_red_u_tabeli.length-1]);

let svi_linkovi = document.getElementsByTagName("a");
console.log(svi_linkovi);

let sve_slike = document.getElementsByTagName("img");
console.log(sve_slike);

let link = document.querySelector("a");
link.innerHTML = `<span style='font-weight: bold'>Novi tekst</span> prvog linka`
//link.href = "https://www.google.com";
link.setAttribute("href", "https://www.google.com");
// link.target = "_blank";
link.setAttribute("target", "_blank");
link.id = "pera";

let linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {    
    link.style.color = "red";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none"
    // link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none;')
});
// 1 ZADATAK
let svi_paragrafi = document.querySelectorAll("p");
svi_paragrafi.forEach(paragraf => {
    paragraf.innerHTML += `VAŽNO!!!`
});
// 2 ZADATAK

let svierror = document.getElementsByClassName("error");
let sviErrori = Array.from(svierror);
sviErrori.forEach(div => {
    div.innerHTML += "<h1> Greška!</h1>"
});
//3 ZADATAK
for (let i = 0; i < svi_paragrafi.length; i++){
    svi_paragrafi[i].innerHTML += `${i*i}`
}
// 4 ZADATAK
let slike = Array.from(sve_slike)
slike.forEach(slika => {
    slika.alt = "Alternativni tekst"
});
// 5 ZADATAK
svi_paragrafi.forEach(paragraf => {
    paragraf.setAttribute ("style", "color: purple;")
})
// 6 ZADATAK
for (let i = 0; i < svi_paragrafi.length; i++){
    if (i % 2 == 1){
        svi_paragrafi[i].style.backgroundColor = "green";
    } else {
        svi_paragrafi[i].style.backgroundColor = "red";
    }
};
// 7 ZADATAK
let svii_linkovi = Array.from(svi_linkovi);
for (let i = 0; i < svi_linkovi.length; i++) {
    svi_linkovi[i].style.padding = "5px";
    svi_linkovi[i].style.fontSize = "8px";
    svi_linkovi[i].style.textDecoration = "none";
    if (i % 2 != 0){
        svi_linkovi[i].style.backgroundColor = "green";
        svi_linkovi[i].style.color = "purple"
    } else {
        svi_linkovi[i].style.backgroundColor = "blue";
        svi_linkovi[i].style.color = "white"
    }
};
// 8 ZADATAK
slike = Array.from(sve_slike)
slike.forEach(slika => {
    if (slika.src.endsWith(".png")) {
        img.style.border = "2px solid blue";
    }
});
// 9 ZADATAK 
svii_linkovi.forEach(link => {
    if(link.target == "blanke") {
        link.target = "_top"
    } else {
        link.target = "target"
    }
});

let div = el.parentNode;
console.log(div);
console.log(div.childNodes);
console.log(div.childNodes[1]);

div.childNodes.forEach(elem => {
    let tip = elem.nodeName;
    if ( tip != "#text"){
        console.log(elem);
    }
})