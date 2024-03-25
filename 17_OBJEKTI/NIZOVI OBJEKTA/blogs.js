console.log("Nizovi objekata");

let blog1 = {
    title: "IF naredba granjanja",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja!",
    likes: 100,
    dislikes: 12
};
let arrBlogs = [blog1, blog2, blog3];

//Ispis niza objekata
console.log(arrBlogs);

// Ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

//Ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title);
console.log(blog2["title"]);  // ili  ->   console.log(arrBlogs[1]["title"]);

//Ispis naslova svih elemenata iz niza - korišćenjem for petlje
for (let i = 0; i < arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
}
arrBlogs[1].title = "While ciklus";
// Ispis naslova svih elemenata iz niza korišćenjem forEach petlje
arrBlogs.forEach(obj => {
    console.log(obj.title, obj.likes);
});


// 1 zadatak:
let sumLikes = arr => {
    let sum = 0;
    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}

console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);

// 2. ZADATAK
//Napraviti arrow f-ju kojoj se prosledjuje niz objekata i ona vraća prosecan broj lajhkova
let avgLikes = arr => {
    // let s = sumLikes(arr);
    // let n = arr.length;
    // let avg = s / n;
    // return avg;

    return sumLikes(arr) / arr.length;
}

console.log(`Prosečan broj lajkova je: ${avgLikes(arrBlogs)}`);

// 3. ZADATAK

let ispisNaslovaSaPozitvnimOcenama = arr => {
    arr.forEach(obj => {
        if (obj.likes > obj.dislikes){
            console.log(obj.title);
        }
    });
}

ispisNaslovaSaPozitvnimOcenama(arrBlogs);

// 4. ZADATAK

let ispisNaslovaSaDuploVišeLajkova = arr => {
    arr.forEach(obj => {
        if (obj.likes >= obj.dislikes*2){
            console.log(obj.title);
        }
    });
}

ispisNaslovaSaDuploVišeLajkova(arrBlogs);

// 5. ZADATAK

let ispisNaslovaSauzvičnikom = arr => {
    arr.forEach(obj => {
        if (obj.title[obj.title.length-1] == "!")
            console.log(obj.title);
        // if (obj.title.endsWith("!")){
        //     console.log(obj.title);
        // }
    });
}

ispisNaslovaSauzvičnikom(arrBlogs);