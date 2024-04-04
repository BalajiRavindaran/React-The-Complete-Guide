// primitive types: number, string, boolean
// complex types: arrays, objects
// function types, parameters

//------------------------------------------
// primitive
// number
let age: number;

age = 23;

// string
let userName: string = "Balaji Ravindaran";

// boolean
let working: boolean = true;

//------------------------------------------
// complex
//array

let hobbies: string[];

hobbies = ["swimming", "workout"];

//object

let person: {
  name: string;
  age: number;
};

person = {
  name: "Balaji Ravindaran",
  age: 23,
};

//combining arrays and objects
let people: {
  name: string;
  age: number;
  hobbies: string[];
}[];

people = [
  { name: "Balaji Ravindaran", age: 23, hobbies: ["swimming", "workout"] },
];

//------------------------------------------
// type inference

// ts automatically detects the initial assigned type to a variable
let title = "React + TypeScript";

// ... and prevents any other type from being assigned again other than the initial type

// title = 12345;

//------------------------------------------
// union types

let course: string | number = "React Full Course";

course = 12345;

//------------------------------------------
// type aliases

type Routine = {
  action: string;
  duration: number;
};

// using alias multiple times
let studying: Routine = { action: "studying react", duration: 1 };
let workout: Routine = { action: "working out in gym", duration: 1.45 };

//------------------------------------------
// Function & Types

// Implicitly has a return type of NUMBER automatically detected by type script
function addTwoNumber(a: number, b: number) {
  return a + b;
}

// Implicitly has a special return type of VOID automatically detected by type script
// VOID return type is specified only for functions that doesn't return any value
function printOutput(value: any) {
  console.log(value);
}

//------------------------------------------
// Generics

// Using a Generic Type by defining it in <> brackets
// The generic type can be used as the type for the input parameters of the function
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

// A new instance of the function is created whenever it is called and a single type is assigned to the generic type parameter (<T>)
// This type is detected automatically using the type of input parameters
const addedNumberArray = insertAtBeginning([1, 2, 3], 4);
const addedStringArray = insertAtBeginning(["a", "b", "c"], "d");

// This will throw an error as it has input parameters with two different types
// const addedErrorArray = insertAtBeginning([1, 2, 3], "a");
