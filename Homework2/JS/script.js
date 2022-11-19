//OBJECTS

var favrecipe = {
    title: "Mole",
    servings: 2,
    ingredients: [" \ncinnamon,\n cumin,\n cocoa"]
};

console.log(favrecipe.title);
console.log("Servings:" + favrecipe.servings);
console.log("Ingredients:" + favrecipe.ingredients);


//ARRAYS

var programmingLanguages = [
    "C++", "C#", "Ruby", "Java", "JavaScript", "Python", "PHP", ".net"
];

console.log(programmingLanguages);

console.log(programmingLanguages.length);
console.log(programmingLanguages);

console.log(programmingLanguages.pop());
console.log(programmingLanguages); 


var removeAdd = programmingLanguages.splice(2, 1, "SQL");
console.log(programmingLanguages);
