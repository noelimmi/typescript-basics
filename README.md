# Everything I Know About Typescript

## Types

All value in typescript will have **type** .

Two categories of type

1. Primitive Types

- number
- boolean
- void
- undefined
- string
- symbol
- null

1. Object Types

- functions
- arrays
- classes
- objects

## Why do we care about types at all?

- Used to catch errors at runtime such as refering properties that doesn't exist.
- Allows everyone who works in codebase to understand what type of data flow around the project.

## Type Annotation VS Type Inference

**Type Annotation**

- Code we add to tell TS what type of value a variable will refer to.

```js
let apples: number = 5;
let name: string = 5;
let hasNothing: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();
```

**Type inference**

- TS tries to figure out what type of value a variable refers to

**When Annotation should be used**

- when function returns **any** .
  example JSON.parse()

- when declaration and initialization is done in different place.

- When we have variable whose type can't be inferred correctly.

  ```js
  let numbers = [-10, 1];
  let numberAboveZero: boolean | number = false;

  numbers.foreach((num) => {
    if (num > 0) {
      numberAboveZero = num;
    }
  });
  ```
