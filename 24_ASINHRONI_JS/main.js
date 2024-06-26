function getUsers ( resolve, reject) {
    let request  = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            //sve OK
            // 1. Dohvati podatke
            let data = JSON.parse(request.responseText);
            // 2. Pozovi callback funkciju koja obradjuje podatke
            resolve(data);
        } else if (request.readyState === 4){
            //desila se greška
            reject("Desila se greska");
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}


function zad2 (niz) {
    niz.forEach(user => {
        if(user.website.includes(".com")){
            document.body.innerHTML += user.website + "<br>"
        }
    });
}

function ispisStringa (str){
    document.body.innerHTML += str + "<br>"
}

// Zadatak 2
getUsers(zad2, ispisStringa)
document.body.innerHTML += "1" + "<br>"
document.body.innerHTML += "2" + "<br>"

// Zadatak 3
getUsers(niz => {
    niz.forEach(user=>{
        if(user.company.name.includes("Group") || user.company.name.includes("LLC")){
            document.body.innerHTML += user.company.name + "<br>"
        }
    })
}, poruka => {
    document.body.innerHTML += poruka + "<br>";
});