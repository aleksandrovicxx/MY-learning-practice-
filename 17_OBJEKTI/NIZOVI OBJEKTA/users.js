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
    title: "For petlja",
    likes: 100,
    dislikes: 12
};

/////////////////////////////////////////

let user1 = {
    username: "JelenaMatejic",
    age: 29,
    blogs : [blog1, blog3],
    logBlogs: function () {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        });
    }
};
let user2 = {
    username: "StefanStanimirovic",
    age: 34,
    blogs: [blog2],
    logBlogs: function () {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        });
    }
};

/////////////////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);
console.log(user1["blogs"][0]["title"]);

user1.logBlogs();
user2.logBlogs();

// 1. ZADATAK

let users = [user1, user2];

// Ispis username polja iz users niza
users.forEach(u => {
    console.log(u.username);
});

// Ispis svih naslova blogova koje su korisnici kreirali
users.forEach(u => {
    u.logBlogs();
});

// Da nismo imali metodu logBlogs()
users.forEach(u => {
    let userBlogs = u.blogs // niz blogova korisnika
    // Iteriram nizom objekata gde je svaki objekat po jedan blog. Iz tog objekta blog mogu uzeti naslov
    userBlogs.forEach( b => {
        console.log(b.title);
    });
});

// 3. ZADATAK

users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach (b => {
        if (b.likes > 50){
            console.log(b.title);
        }
    })
});

// 2. ZADATAK
users.forEach(user => {
    if (user.age < 18){
        console.log(user.username);
    }
});

// 4. zadatak
users.forEach (user => {
    if (user.username == "JelenaMatejic"){
        user.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
});

// 5. ZADATAK
users.forEach(u => {
    let sumLikes = 0;
    u.blogs.forEach(b => {
        sumLikes += b.likes;
    });
    if (sumLikes > 100){
        console.log(u.username);
    }
});

// 6. ZADATAK
let suma = 0;
let brojač = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        suma += b.likes;
        brojač++;
    });
});
let prosek = suma / brojač;
users.forEach(u => {
    u.blogs.forEach( b => {
        if (b.likes > prosek){
            console.log(b.title);
        }
    });
});

// 7. ZADATAK
let sumalajkova = 0;
let brojač7 = 0;
let sumadislajkova = 0;
users.forEach(u => {
    u.blogs.forEach(b =>{
        sumalajkova += b.likes;
        sumadislajkova += b.dislikes;
        brojač7++;
    });
});
let proseklajkova = sumalajkova / brojač7;
let prosekdislajkova = sumadislajkova / brojač7;

users.forEach(u => {
    u.blogs.forEach ( b => {
        if (b.likes > proseklajkova && b.dislikes < prosekdislajkova){
            console.log(b.title);
        }
    });
});
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-6, -4, -10, 0, 2]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 7, 8, 5, 3, 3]
};

// ZADATAK - VREMENSKA PROGNOZA
// 1.
let dani = [dan1, dan2, dan3];
//2. 
// jedan način
let dansanajvesemerenja = dani[0].temperature.length;
let indeksprvi = 0;
let indeksdrugi = 0;
dani.forEach((dan, indeks) => {
    if (dan.temperature.length > dansanajvesemerenja){
        dansanajvesemerenja = dan.temperature.length;
        indeksprvi = indeks;
    }
    if (dan.temperature.length >= dansanajvesemerenja){
        dansanajvesemerenja = dan.temperature.length;
        indeksdrugi = indeks;
    }
});
console.log(`Datum prvog dana sa najvise merenja je ${dani[indeksprvi].datum}. Datum poslednjeg dana sa najviše merenja je ${dani[indeksdrugi].datum}`);
// drugi način
let niz = [];
let danmax = dani[0].temperature.length;
dani.forEach(dan => {
    if (dan.temperature.length >= danmax){
        danmax = dan.temperature.length
    }
});
dani.forEach(dan => {
    if (dan.temperature.length == danmax){
        niz.push(dan);
    }
});
if (niz.length < 2) {
    console.log(`Datum dana sa najviše merenja je ${niz[0].datum}.`);
} else {
console.log(`Datum prvog dana sa najviše merenja je ${niz[0].datum}, a poslednji dan sa najvise merenja je ${niz[niz.length-1].datum}`);
}
// 3.
let brSuncanihIKisnih = niz => {
    let kisni = 0;
    let suncani = 0;
    niz.forEach(dan => {
        if(dan.kisa) {
            kisni++;
        }
        if(dan.sunce) {
            suncani++;
        }
    });
    console.log(`Kisnih dana je bilo: ${kisni}, a suncanih je bilo: ${suncani}`);
}
brSuncanihIKisnih(dani);
//4
let brNatprosecnihDana = niz => {
    let zbirTemp = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(dan => {
        dan.temperature.forEach(t => {
            zbirTemp += t;
            brTemp++;
        });
    });
    let prosekUkupno = zbirTemp / brTemp;
    console.log(prosekUkupno);
    niz.forEach(dan => {
        let zbirLok = 0;
        let brLok = 0;
        dan.temperature.forEach(t => {
            zbirLok+= t;
            brLok++;
        });
        let prosLok = zbirLok / brLok;
        console.log(prosLok);
        if(prosLok > prosekUkupno) {
            brDana++;
        }
    });
    return brDana;
}
console.log(`Broj dana sa natprosecnom temperaturom: ${brNatprosecnihDana(dani)}`);