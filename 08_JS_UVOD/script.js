document.getElementById("d1").innerHTML = "Ja se zovem Miloš Aleksandrovic";

console.log("Zdravo");

console.log("Pera");
console.log("Mika");

console.log("It's alright")
console.log('It"s alright')
console.log("It\'s alright")

// Literali
console.log (5);
console.log(-5.189);
console.log(3 + 4); // 7
console.log('3'+'4');  //  Konkatenacija - Spajanje stringova
console.log("3 + 4");  // "3 + 4"
console.log("3 + 4 = ", 3+4);
console.log("3 + 4 = " + (3 + 4));
console.log(true);
console.log(false);

//Promenljive
let x; // 1) deklaracija promenljive (uvođenje promenljive u program)

x = 5;
console.log(x)

x = "Laza";
console.log(x);

let y = true; // 2) definicija promenljive (deklaracija + dodela vrednosti)

console.log(y);

const z = -7.6;

// z = 6;      NE MOŽE!!!

console.log(z);

let age;
console.log(age, age + 3); // undufinef, NaN - Not a Number

age = null;
console.log(age, age + 3); //null, 3

let broj = 3 + 4 * 2; //  11
console.log(broj);

broj = (3 + 4) * 2; //  14
console.log(broj);

// broj +=6;
// console.log(broj);

broj = broj + 6;    // ZNAK JEDNAKOSTI (=) ZNAČI "DODELA VREDNOSTI"
console.log(broj);

broj *=5;
console.log(broj);  //  100

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++);  // Post-increment (prvo se iskoristi x, pa se onda uveca)
console.log(x); //7
console.log(++x);  //  Prvo se uveca vrednost pa se onda koristi)

//OSTATAK
//Beba ima 25 meseci
//28 delimo sa 12 i tražimo količnik i ostatak
// console.log(28 / 12);
console.log (Math.floor(28 / 12));
//ostatak:
console.log(28 % 12);
// 28 = 2 * 12 + 4
//     (k)      (o)



console.log(7 % 3); //  1
console.log(24 % 18); //  6 

x = 5;
y = 3;
console.log(x ** y);

