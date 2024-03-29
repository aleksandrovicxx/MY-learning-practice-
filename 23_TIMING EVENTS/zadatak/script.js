let start = document.getElementById("start")
let ispis = document.getElementById("ispis")
let stop = document.getElementById("stop")

let clock;

start.addEventListener("click", (e) => {
    e.preventDefault();
    if( clock === undefined){
        clock = setInterval(() => {
            ispis.value++
        }, 1000)
    }
});

stop.addEventListener("click", () => {
    clearInterval(clock);
    clock = undefined;
})