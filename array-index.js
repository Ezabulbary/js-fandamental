// how to find element position 

// string variable

var books = ["one", "two", "three", "four", "five", "six", "seven"];

var threeIndex = books.indexOf("two");
var threeIndex = books.indexOf("ten");

console.log(threeIndex);

// number variable

var numbers = [12, 23, 34, 45, 56, 78, 67];

var fourthIndex = numbers.indexOf(12);
var fourthIndex = numbers.indexOf(122);

console.log(fourthIndex);

// how to find element name
var secondIndex = books[7];
console.log(secondIndex);

// how to change array element

console.log(numbers);
numbers [1] = 32;
numbers [4] = 110;
console.log(numbers);