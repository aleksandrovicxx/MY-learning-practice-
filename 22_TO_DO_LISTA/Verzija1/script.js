let liZadaci = document.querySelectorAll(`li`);
liZadaci.forEach(li => {
    let brojac = 0;
    li.addEventListener("click", () => {
        li.classList.toggle("precrtaj")
    });
});
