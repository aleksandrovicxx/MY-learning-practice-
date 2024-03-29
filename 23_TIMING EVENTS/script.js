const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const div = document.querySelector("#ispis");
let input = document.getElementById("input")
const startbtn = document.querySelector("#start")
let stopbtn = document.querySelector("#stop")



let timer;
function uradi () {
    let vreme = new Date();
    let sat = vreme.getHours();
    let minuti = vreme.getMinutes();
    let sekunde = vreme.getSeconds();

    div.innerHTML += `${sat}:${minuti}:${sekunde}`;
    timer = undefined;
}

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    if ( timer === undefined ){
        timer = setTimeout(uradi, 2000);
    }
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = undefined;
});


function prikaziSat () {
    let vreme = new Date();
    let sat = vreme.getHours();
    let minuti = vreme.getMinutes();
    let sekunde = vreme.getSeconds();

    div.innerHTML = `${sat}:${minuti}:${sekunde}`;
}

let clock;

btn3.addEventListener("click", (e) => {
    e.preventDefault()
    if ( clock === undefined){
    clock = setInterval(prikaziSat, 1000);
    }
});

btn4.addEventListener("click", (e) => {
    e.preventDefault()
    clearInterval(clock);
    clock = undefined;
});

startbtn.addEventListener("clock", (e) => {
    e.preventDefault
    console.log("ewq2e");
})

