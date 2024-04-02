// Dohvatanje dokumenata iz kolekcije po redosledu polja
// (dokument mora da sadrzi to polje da bi bio dohvacen)
// (ako ima vise od jednog polja neophodno je prvo kreirati index)
/*
db.collection('users')
.orderBy('name', 'desc') // Sortiranje po imenu po opadajucem redosledu
.orderBy('age', 'asc') // Sortiranje po godinama onih koji imaju isto ime
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatanje odredjenog broja dokumenata (limitiranje)
/*
db.collection('users')
.orderBy('name', 'desc')    // Sortiranje po imenu po opadajucem redosledu
.orderBy('age', 'asc')    // Sortiranje po godinama onih koji imaju isto ime
.limit(2)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/
    
//Dohvatanje elemenata koji zadovoljavaju odredjene uslove ( filtriranje )

// Dohvati sve klijente koji imaju platu vecu ili jednaku od 500
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatiti sve klijente koji imaju platu izmedju 300 i 800
/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatiti sve klijente koji imaju platu manju od 900 i imaju 30 godina
/*
db.collection('customers')
.where('salary', '<=', 900)
.where('age', '==', 30)
.orderBy('salary')
.orderBy('name')
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvati sve klijenete koji imaju preko 25 godina sortirane po imenu
/*
db.collection('customers')
.where('age', '>', 25)
.orderBy('age')
.orderBy('name')
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatiti sve klijente koji imaju adresu u Nisu ili Beogradu
/*
db.collection('customers')
.where('Addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

//Dohvatiti sve klijente koji imaju 22, 25, ili 28 godina
/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Iz kolekcije tasks procitati sve podatke sortirane po nazivu
/*
db.collection('tasks')
.orderBy('title')
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Iz kolekcije tasks, procitati sve zadatke koji su prioritetni
/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/


// Iz kolekcije tasks, procitati sve zadatke koji treba da se izvrse u tekucoj godini
/*
let datum = new Date()
let godina = datum.getFullYear()
let datum1 = new Date(godina, 0, 1) // 1.januar tekuce godine
let datum2 = new Date(godina+1, 0, 1) // 1 januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1)
let ts2 = firebase.firestore.Timestamp.fromDate(datum2)
db.collection('tasks')
.where('due_date', '>=', ts1)
.where('due_date', '<', ts2)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatiti sve zadatke koji su zavrseni
/*
let datum = new Date()

db.collection('tasks')
.where('due_date', '<=', datum)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Dohvatiti sve zadatke koji tek treba da pocnu
/*
let datum = new Date()

db.collection('tasks')
.where('start_date', '>=', datum)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao George Lucas
/*
db.collection('movies')
.where("director.name", "==", "George")
.where("director.surname", "==", "Lucas")
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/
// Čija je ocena između 5 i 10,
/*
db.collection('movies')
.where('rating', '>=', 5)
.where('rating', '<', 10)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Kojima je žanr komedija, tragedija ili drama
/*
db.collection('movies')
.where('genres', 'array-contains-any', ['Drama', 'Tragedy'])
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/
// Koji su izašli u 21. veku.
/*
db.collection('movies')
.where('release_year', '>=', 2001)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Prikazati sve informacije o najbolje rangiranom filmu.
/*
db.collection('movies')
.orderBy('rating', 'desc')
.limit(1)
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
*/

// Prikazati sve informacije o najslabije rangiranoj drami.
db.collection('movies')
.where('genres','array-contains', 'Drama')
.limit(1)
.orderBy('rating')
.get()
.then(snapshot =>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e =>{
    console.log(`Greska ${e}`);
})
