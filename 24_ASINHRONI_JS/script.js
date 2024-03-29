const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function() {
    // console.log(request.readyState);
    if( request.readyState == 4 && request.status == 200){
        data = JSON.parse(request.responseText)
        console.log(data);
        console.log(data[5]);
        console.log(data[5].title);
    } else if ( request.readyState == 4 ){
        console.log(`Desila se greška`);
    }
});
request.open("GET", " https://jsonplaceholder.typicode.com/users");
request.send();
