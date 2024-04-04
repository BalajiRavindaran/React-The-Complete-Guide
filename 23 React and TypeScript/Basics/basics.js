"use strict";
// primitive types: number, string, boolean
// complex types: arrays, objects
// function types, parameters
//------------------------------------------
// primitive
// number
let age;
age = 23;
// string
let userName = "Balaji Ravindaran";
// boolean
let working = true;
//------------------------------------------
// complex
//array
let hobbies;
hobbies = ["swimming", "workout"];
//object
let person;
person = {
    name: "Balaji Ravindaran",
    age: 23,
};
//combining arrays and objects
let people;
people = [
    { name: "Balaji Ravindaran", age: 23, hobbies: ["swimming", "workout"] },
];
//------------------------------------------
// type inference
// ts automatically detects the initial assigned type to a variable
let title = "React + TypeScript";
// ... and prevents any other type from being assigned again other than the initial type
// title = 12345;
