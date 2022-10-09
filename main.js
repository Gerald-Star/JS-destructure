//destructure of arrays and objects.
//Maths destructure

//YOUTUBE and Learn Tutorials
//How to destructure an object to extract new variables form objects and arrays
//destructure syntax


//How to use for loop

/*
 it's important to know that a for of loop cannot work on an object directly, 
 since an object is not iterable. For example:
*/

// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }

//Running the above code snippet will throw the following error:  

//Uncaught TypeError: car is not iterable


//Arrays are iterable

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}


//ex 2

const car = [ 'red', 'speed', 'benz']
for (var type of car) {
    console.log(type);
}

//a for of loop can be run on arrays to loop over objects.
/*
Before you can properly answer this question, 
you first need to review three built-in methods:
 Object.keys(), Object.values(), and Object.entries().
*/

//Here's an example of running the Object.keys() method on a brand new car2 object:
//1. use the Object.keys() to loop over an object

const lady = {
    body: 'slim',
    physique : 'sexy',
    height: 6
}

console.log(Object.keys(lady));
//1.Object.keys() /3 Built-in methods to loop over an object
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // [ 'speed', 'color' ]

const car3 = {
    year: 2020,
    color: "blue"
}
console.log(Object.keys(car3)); //[ 'year', 'color' ]
//Object.keys()returns the property parameters in an array of strings

//2. The Object.values() method to returns the values 
console.log(Object.values(lady)); // [ 'slim', 'sexy', 6 ]
console.log(Object.values(car2)); // [ 200, 'red' ]
console.log(Object.values(car3)); // [ 2020, 'blue' ]

//3. The Object.entries() method returns both property and values
console.log(Object.entries(lady)); //[ [ 'body', 'slim' ], [ 'physique', 'sexy' ], [ 'height', 6 ] ]
console.log(Object.entries(car2)); //[ [ 'speed', 200 ], [ 'color', 'red' ] ]
console.log(Object.entries(car3));// [ [ 'year', 2020 ], [ 'color', 'blue' ] ]


/* Finally, there's another useful method, Object.entries(), 
which returns an array listing both the keys and the values. */


//To loop over a property using keys and values

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key]) // used bracket notation to access the values

}
//price : 50
//color : beige
//material : cotton
//season : autumn


//Access the values using bracket notations

function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess(); // 15