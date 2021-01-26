let apples: number = 5;
let hasNothing: null = null;
let nothing: undefined = undefined;

//build in objects
let now: Date = new Date();

//Array

let color: string[] = ['red', 'green'];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
