let datum1 = new Date('2024-01-26 17:00:00');
let datum2 = new Date('2024-01-26 21:00:00');

db.collection('tasks')
.add({
    title: 'Cas ITBootcamp',
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: 'Cas iz baze podataka'
})
.then(()=>{
    console.log(`Uspesno dodat task`);
})
.catch((e)=>{
    console.log(`Greska ${e}`);
});
//doc('...').set() -> kompletno menja ("gazi") sadrzaj
//doc('...').update -> dodaje/menja sadrzaj odredjenom dokumentu
db.collection('users').doc('cust04')
.update({
    age: 28
})
.then(() =>{
    console.log(`Uspesno promenjene godine`);
})
.catch((e) =>{
    console.log(`Greska ${e}`);
})

// ZADATAK
let movie1 = {
    name: 'Ime filme',
    director: {
        name: 'Petar',
        surname: ["Action", "Comedy"]
    },
    release_year: 2020,
    genres: 'Comedies',
    rating: 4.54
}

db.collection('movies').doc('movie1')
.set(movie1)
.then(() =>{
    console.log(`Uspesno dodat film`);
})
.catch((e) =>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie2')
.set({
    name: 'Ime filma2',
    director: {
        name: 'Mika',
        surname: 'Mikic'
    },
    release_year: 2000,
    genres: ["Action", "Comedy"],
    rating: 3.94
})
.then(() =>{
    console.log('Uspesno dodat film');
})
.catch(e =>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie3')
.set({
    name: 'Citizan Kane',
    director: {
        name: 'Orson',
        surname: 'Welles',
    },
    release_year: 1941,
    genres: ['Drama', 'Mistery', 'Noir'],
    rating: 8.4
})
.then(() =>{
    console.log(`Uspesno dodat film`);
})
.catch((e)=>{
    console.log(`Greska ${e}`);
})

db.collection('movies').doc('movie3')
.update({
    rating: 8.3
})
.then(() =>{
    console.log(`Izmenjen rating`);
})
.catch((e) =>{
    console.log(`Greska ${e}`);
})


// Dohvatanje dokumenta
db.collection('movies').doc('movie1')
.get()
.then(doc=>{
    if(doc.exists){
        let data = doc.data()
        console.log(`Uspesno skinut dokument: ${doc.id}`);
        console.log(data);
    } else {
        console.log(`Ne postoji ovaj dokument`);
    }
})
.catch((e)=>{
    console.log(`Greska ${e}`);
})

// Dohvatanje svih dokumenta iz kolekcije
db.collection('customers')
.get()
.then(snapshoot =>{
    snapshoot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, ' => ', data);

    });
})
.catch((e)=>{
    console.log(`Greska ${e}`);
})

// URADITI ZADATAKA SA 20OG SLAJDA
// PROBATI BRISANJE I OSTALO POSLE ZADATKA (21. slajd)