//Adding a City
let arrOfCities=["Redmond", "Renton", "bothell", "Lynwood", "kirkland", "sammamish"];
console.log(arrOfCities);
let arrOfAddedCities=arrOfCities.push("Kent");
console.log(arrOfCities);


//remove third element
let arr=["Redmond", "Renton", "bothell", "Lynwood", "kirkland", "sammamish"];
let removeThirdElement=arr.splice(2, 1);
console.log(arr);

//separate the strings with a comma
let fruits = ["Banana", "Orange", "Apple", "Mango", "Grapes"];
let arrFruits=fruits.join(" , ");
console.log(arrFruits);
