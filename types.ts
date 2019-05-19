console.log("Types");

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

// tuple
let myTuple: [string, number];
myTuple = ["Hello tuple", 4];
console.log("my tuple:", myTuple);

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;
console.log(myVoid, myNull, myUndefined);
