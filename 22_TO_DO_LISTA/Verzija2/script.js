//DOM
let liZadaci = document.querySelectorAll(`li`);
let btnDodaj = document.getElementById("submit");
let inputZadatka = document.querySelector("#task");
let ulZadaci = document.querySelector("ul")
let form = document.getElementById("form")

ulZadaci.addEventListener("click", e => {
    if(e.target.tagName == "LI"){
        // e.target.classList.toggle("precrtaj")
        e.target.remove();
    }
});

btnDodaj.addEventListener("click", e => {
    e.preventDefault();
    let tekstZadatka = inputZadatka.value;  
    if(inputZadatka.value.trim() != ""){
        let liNoviZadatak = document.createElement("li"); // Kreiram novi li
        liNoviZadatak.innerHTML = tekstZadatka; // Dodajem tekst u <li>

        let radioDodaj = document.querySelector("input[name='add']:checked") 
        if(radioDodaj.value == "beggin") {
            ulZadaci.prepend(liNoviZadatak);
        } else {
            ulZadaci.appendChild(liNoviZadatak)
        }
    }
    inputZadatka.value = ""; 
});

