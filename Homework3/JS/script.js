// THE HELLO WORLD EXERCISE (if statement)
// Create a variable called "code", that will hold a string (for example: "es" or "de" or "en")
// Based on the value of the variable "code", output in the console: "Hello World" in the language that the code is written. If it's es, write Hello World in Spanish. If it's de, write it in German... etc.

var code = "en"
if (code == "es") {
    console.log("Hola Mundo");
} else if ( code == "de") {
    console.log("Hallo Welt");
} else if ( code == "en") {
    console.log ("Hello World");
} else {
    console.error("Language not found! Try again :(");
};

// SEASONS (if statement)
// Check if the season is Autumn, Winter, Spring or Summer. If the user types (via prompt):
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Output the results in the console

var season = prompt("Enter a month:");

if(season == "September" || season == "October" || season =="November") {
    console.log("The season is Autumn");
} else if (season == "December" || season =="January" || season == "February") {
    console.log("The season is Winter");
} else if (season == "March" || season == "April" || season == "May") {
    console.log ("The seaseon is Spring");
} else if (season == "June" || season =="July" || season == "August") {
    console.log ("The season is Summer"); 
} else {
    console.error ("You've entered unvalid month! Try with a valid one!");
};

// MUSICIANS (switch statement)
// Create a variable called "band_members_num" and store a number from 1 to 10 in it.
// Based on the number, output in the console what kind of a music group it is: If the number is 3 the output is "This band is a trio" etc...

var band_members_num = 4

switch(band_members_num) {
    case 1 :
        console.log("This band is 1.");
    break;

    case 2 :
        console.log ("This band is 2");
    break;

    case 3 :
        console.log ("This band is 3");
    break;

    case 4 :
        console.log("This band is 4");
    break;

    case 5 :
        console.log("This band is 5");
    break;

    case 6 :
        console.log("This band is 6");
    break;

    case 7 :
        console.log("This band is 7");
    break;

    case 8 :
        console.log("This band is 8");
    break;

    case 9 :
        console.log("This band is 9");
    break;

    case 10 :
        console.log("This band is 10");
    break;

    default : console.log("Something went wrong.");
};
