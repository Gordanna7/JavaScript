
// Имате две низи:
// var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
// var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
// направете нова низа во која што ќе ги ставите сите имиња кој двете низи ги делат (Jill, Kate)

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"]; 
var together = [];

for (i = 0; i < JohnFollowers.length; i++) {
    for (j = 0; j < JaneFollowers.length; j++){
        if(JohnFollowers[i] === JaneFollowers[j]) {
            together.push(JohnFollowers[i]);
        }
    }
}

console.log(together);
/////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Со помош на for loop креирајте ја кулата на Марио со помош на hashtags (#)
// output во конзолата :
// #
// ##
// ###
// ####
// #####
// ######

var mario = "";


for( i = 0; i <=6; i++) {
   mario += "#"
   console.log(mario);
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")

// for(i = 0; i <= 10; i++) {
//         console.log(`${i} * 9 = ${i*9}`);
//     }



// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for(i = 1; i <= 10; i++) {
    for(j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////