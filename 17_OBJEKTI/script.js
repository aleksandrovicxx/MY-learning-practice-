let blog1 = {
    tittle: `HTML`,
    content: `Osnovni HTML tagovi`,
    author: `Jelena`,
    likes: 10,
    comments: true
};

//Ispis objekta
console.log(blog1);
console.log(typeof blog1);

//Ispis određene osobine
console.log(blog1.tittle);
console.log(blog1.author);
console.log(blog1[`content`]);

//Izmena određene osobine
blog1.content = `HTML tabele`;
console.log(blog1.content);
blog1[`content`] = `HTML liste`;
console.log(blog1.content);
blog1.likes = 7;
console.log(blog1);
blog1.comments = false
console.log(blog1);
///////////////////////////////////////////////////

let user1 = {
    username: `JelenaMatejic`,
    age: 29,
    blogs: ["Naredba grananja", "Nizovi", "Objekti"],
    login: function (){
        console.log(`Ulogovani ste.`);
        console.log(this);
    },
    logout: function(){
        console.log(`Izlogovani ste.`);
    }, 
    logBlogs: function(){
        this.blogs.forEach (element => {
            console.log(element);
        });
    },
    hello: function(a) {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);
user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});

///////////////////////////////////////////////////

//Zadatak 1:

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    // 1.
    prosecna: function (){
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2. 
    brNatProsečnih: function() {
        let br = 0;
        let pros = this.prosecna();
    //-----------preko forEach--------------
        // this.temperature.forEach(t => {
        //     if ( t > pros){
        //         br++;
        //     }
        // });
        
    //-----------preko forEach--------------
        for (let i = 0; i < this.temperature.length; i++){
            if (this.temperature[i] > pros){
                br++;
            }
        }
        return br
    },
    //3.
    brojMerenjaSaMaxTemp: function (){
        let maks = this.temperature[0];
        this.temperature.forEach(t =>{
            if (t > maks){
                maks = t;
            }
        });
        let brMax = 0;
        this.temperature.forEach(t => {
            if (t == maks){
                brMax++
            }
        });
        return brMax;
    },
    //4.
    većaodt1manjaodt2: function (t1, t2) {
        let brMerenja = 0;
        // Ciljano da u t1 bude manja vrednost, a u t2 veća vrednost
        // cilj: t1 < t2
        if (t1 > t2) {
            let pom = t1;
            t1 = t2;
            t2 = pom; 
        }
        this.temperature.forEach(el => {
            if (el > t1 && el < t2){
                brMerenja++;
            }
        });
        return [t1, t2, brMerenja];
    },
    //5.
    vecinaDanaIznadProseka: function () {
    let brojVećihOdProseka = this.brNatProsečnih(this.temperature);
    if (brojVećihOdProseka > this.temperature.length / 2){
        return true;
        } else {
        return false;
        }
        
    },
    // 6.
    leden: function () {
        let ledenDan = true;
        this.temperature.forEach(t => {
            if (t > 0){
                ledenDan = false;
            }
        });
        return ledenDan;
    },
    // 6'.
    leden2: function () {
        for (let i = 0; i < this.temperature.length; i++){
            if (this.temperature[i] > 0){
                return false;
            }
            return true;
        }
    },
    //8.
    nepovoljan: function () {
        for (let i = 0; i < this.temperature.length-1; i++){
            if (Math.abs(this.temperature[i] - this.temperature[i+1]) > 8){
                return true
            }
        }
        return false;
    }
};
console.log(`Prosečna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosečnih u danu je ${dan1.brNatProsečnih()}`);
console.log(`Broj merenja sa maksimalnom temperaturom u danu je ${dan1.brojMerenjaSaMaxTemp()}`);
let vraćenevrednosti = dan1.većaodt1manjaodt2(7, 4);
console.log(`Broj merenja između ${vraćenevrednosti[0]} i temperature ${vraćenevrednosti[1]} temperature je ${vraćenevrednosti[2]}`);
console.log(`Da li ima više natprosečnih temperatura? ${dan1.vecinaDanaIznadProseka()}`);
console.log(`Da li je dan leden? ${dan1.leden()}`);
console.log(`Da li je dan bio leden? ${dan1.leden2()}`);
console.log(`Da li je dan nepovoljan? ${dan1.nepovoljan()}`);