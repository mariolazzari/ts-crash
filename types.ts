let myString: string = "";
let myNum: number = 0;
let myBool: boolean = true;
let myAny: any;

// array
let myArray: string[];
let numArray: number[];
let boolArray: Array<boolean>;

myString = "Hello " + "TypeScript".slice(10);
myNum = 2 + 2;
myAny = "test";

console.log(myString, myNum, myBool, myAny);

myArray = ["Ciao", "Mario"];
console.log(myArray);
numArray = [1, 2, 3, 4];
console.log(numArray);
boolArray = [true, false];
console.log(boolArray);
