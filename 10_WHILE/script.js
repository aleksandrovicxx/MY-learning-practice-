let i = 1;
while (i <= 5){
    console.log(i)
    i++;
}

console.log("Kraj petlje");
console.log(i);


/* 

PRE PETLJE i = 1;
1. ITERACIJA: log (1), i = 2;
2. ITERACIJA: log (2), i = 3:
3. ITERACIJA: log (3), i = 4;
4. ITERACIJA: log (4), i = 5;
5. ITERACIJA: log (5), i = 6:

*/


//Isti zadatak na drugi način:
i = 1;
while(i <= 5){
    console.log(i++);
}

//Isti zadatak, na treci nacin
i = 0;
while(i < 5){
    i++;
    console.log(i);
}


// 1. Zadatak
// a)
i = 1;
while(i <= 20){
    console.log(i);
    i++;    
}
//b)

// 2. Zadatak
i = 20;
while(i <= 20 && i >= 1){
    console.log(i);
    i--;
}

i = 2;
while (i <= 20) {
    console.log(i);
    i = i + 2;
}

i = 1;
while (i <= 5) {
    
}
