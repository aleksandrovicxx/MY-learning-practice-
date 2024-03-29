const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200){
        data = JSON.parse(request.responseText)
        data.forEach(el => {
            let com = ".com"
            if(el.website.substr(el.website.length - 4) == com){
                console.log(el);
            }
        });
    } else if ( request.readyState == 4 ){
        console.log(`Desila se greška`);
    }
})

request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200){
        data = JSON.parse(request.responseText)
        data.forEach(el => {
            let Clementin = "Clementin"
            let ime = el.name
            if(ime.includes(Clementin)){
                console.log(el);
            }
        });
    } else if ( request.readyState == 4 ){
        console.log(`Desila se greška`);
    }
})

request.addEventListener("readystatechange", () => {
    if(request.readyState == 4 && request.status == 200){
        data = JSON.parse(request.responseText);
        data.forEach(el => {
            if (el.company.name.includes("LLC") || el.company.name.includes("Group")) {
                console.log(el);
            };
        })
    } else if ( request.readyState == 4 ){
        console.log(`Desila se greška`);
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/users")
request.send();