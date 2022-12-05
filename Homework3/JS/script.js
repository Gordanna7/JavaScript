// THE HELLO WORLD EXERCISE (if statement)

var code = "en"
if (code == "es") {
    console.log("Hola Mundo");
} else if ( code == "de") {
    console.log("Hallo Welt");
} else if ( code == "en") {
    console.log ("Hello World");
} else {
    console.error("Language not found! Try again");
};

// SEASONS (if statement)


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
