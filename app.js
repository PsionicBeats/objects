/*
* Function which correctly prints the parameter data type
*/
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/*
* Demonstrates knowledge of creating an array by storing the function
* parameters as an array value
*
* Parameters 	car1 (string), car2 (string)
* Return 		string value "Toyota" from array cars
*/
function pastLessons(car1, car2){
	//Print the parameters being passed through
	console.log(car1);
	console.log(car2);

	//Create an array named "cars" and set it's values to the passed parameters
	var cars = [car1, car2];
	console.log(cars);
	//Return the array values as a concatenated string
	//Concatenated String - String with pieces attached to it
	return "My first car was " + cars[0] + " and my second was a " + cars[1] + ".";
}
console.log("\n***Past Lessons***\n");
console.log(pastLessons("Toyota", "Jeep Wrangler"));
console.log("\n***End of Past Lessons***\n");


/*
* Demonstrates knowledge of 2-D arrays by accessing the values inside a
* nested array
* 
* Return 	The values in the nested array as a concatenated string
*/

// 2D ARRAYS IS A BOX IN A BOX
function twoDArrays(nestedArray){
	//Print the parameter
	console.log(nestedArray);

	//Print the first nested array
	//When a box is in a box it's called nested
	// [0, 1, 3, [3, 4, 5]];

	//Print the second item in the nested array
	// Successfully accesses FIRST nested array
	// SECOND BOX W/ NUMBER ACCESSES SPECIFIC NUMBER IN ARRAY
	// NOTE: argument([3[1]]); (For example) WILL RESULT IN AN ERROR.
	// DOUBLE CHECK 
	console.log(nestedArray[3][1]);

	//Can you print the third item in the *bonus* array?
	console.log(nestedArray[3][3][2]);

	//Create a variable called "nestedArrayString" that stores the values in the nested array as a concatenated string and use this variable as the return value of this function


	//Create a variable called "nestedArrayAddedUp" that adds up the values in the nested array and print the contents of this variable

	return;
}

console.log("2-D Arrays\n");
// console.log(twoDArrays([0, 1, 2, [3, 4, 5]]));

// Bonus Array
console.log(twoDArrays([0, 1, 2, [3, 4, 5, [6, 7, 8]]]));


console.log("\n***End***\n");

/* 
* Create an object named "myCar"
* and set it's key:value pairs given the keys: type, model, and color
* Object is represented by {}
* Everything is, necessarily, an object
*/
var myCar = {
	type: "Toyota", 
	model: "Corolla", 
	color: "silver"
};

/*
* Uses a for loop to iterate through the key:value pairs in an object
* passed as a parameter and changes the a value upon found key
* Parameters 	A list of a cars properties as one object (object)
* Return 		The objects values in a concatenated string
*/

function objectsAndProperties(car){
	var keys = "";
	var properties = "";


	//Print the parameter being passed through
	console.log(car);
	//Print the parameters length

	// console.log(car.length);
	// ^ Does not work, double check how to access certain items for different things

	// console.log(car.type);
	// console.log(car.color);
	// ^ CAN ACCESS LIKE THIS

	//ITERATES THROUGH THE OBJ (RUNNING A LOOP THROUGH AN OBJ)
	// var key is "in" obj car
	// EX. KEY IS CHANGING. USE BRACKET TO ACKNOWLEDGE CHANGE
	for (var key in car){
		// console.log(key);
		//add to empty variable by using... += can be in a concatenated string
		keys += " " + key;
		// console.log(keys);

		console.log(car[key]);

		properties += " " + car[key];
		console.log(properties);
	}

	//Iterate through the keys in the array and change their value
	console.log("Paramater keys" + keys);
	console.log("Paramater properties" + properties);

	console.log(car.type + car.model + car.color);



	//Return the paramter and it's key:value pairs as a string concatenation
	return "My car type is " + car.type + " it's model type is " + car.model + " and it's color is " + car.color + ".";
}

console.log("Objects and their Properties\n");

console.log(objectsAndProperties(myCar));

console.log("\n***End***\n");

/*
* Demonstrates the object methods: keys(), values(), entries()
* 
* Parameters 	car (object)
* Return 		The objects values as a concatenated string
*/
function objectMethods(car){
	//Print the parameter being passed through

	//Print the data type of the passed parameter

	//Print the objects keys and set this value to a variable named "paramKeys";

	//Print the data type of "paramKeys"

	//Use the method "toType" to print the "correct" data type of "paramKeys"

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/

	/*
	* Print the objects values and set this value to a variable named "paramValues"
	* Note: This is an experimental technology and is not 
	* compatible in all browsers
	*/

	return;
}


console.log("Object Methods\n");

console.log(objectMethods(myCar));

console.log("\n***End***\n");



