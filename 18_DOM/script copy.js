let paragraf = document.querySelectorAll('p');
paragraf.forEach((p, broj )=> {
    if (broj % 2 == 0){
        p.classList.add('error');
    } else {
        p.classList.add('sucess')
    }
    if (broj % 3 == 0){
        p.style.fontSize = '15px';
    } else if (broj % 3 == 1){
        p.style.fontSize = '25px';
    } else {
        p.style.fontSize = '35px';
    }
    p.style.maxWidth = '50%';
    if (p.textContent.includes('sucess')){
        p.classList.add('sucess');
    } else if (p.textContent.includes('error')){
        p.classList.add('error');
    }
    p.classList.toggle('error');
});

// Dodati novi div tag dokumentu
let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u jsu";
noviDiv.style.backgroundColor = "green";
document.body.appendChild(noviDiv);
let noviNaslov = document.createElement("h3");
noviNaslov.innerHTML = "Novi naslov";
noviDiv.appendChild(noviNaslov);

//
let lista = document.createElement("ul");
noviDiv.append(lista);
let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "Treća stavka liste";

lista.append(li1, li2, li3);

// Iz ul liste izbaciti prvu stavku
// lista.removeChild(li1)
// lista.removeChild(lista.firstChild)
lista.removeChild(lista.childNodes[0]);

let li4 = document.createElement("li");
li4.innerHTML = "Četvrta stavka liste";

// U UL LIsti zameniti drugu stavku 
lista.replaceChild(li4, li3);

// Dodati sliku u ul listu
let li5 = document.createElement(li);
lista.appendChild(li5);
let slika = document.createElement("img")
slika.src = "slika2.jpg";
slika.alt = "Neka slika";
li5.appendChild(slika)