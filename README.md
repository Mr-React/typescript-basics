# TypeScript Basics

## Typscript Project Setup

- run command npm init -y
- install typescript using npm install typescript --save-dev command
- install ts-node using npm install -D ts-node
- run npx tsc --init command to create tsconfig file for configuration
- `npx ts-node .\funcs-and-funcs.ts` command to run ts file

## VS Code Shortcuts

- select variable and ctrl + k + ctrl + i shows variable type

## ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Important Notes

1. Typescript only enforces types at compile time
2. Runtime types checking might be expensive
   ```
   export function getName(user: { first: string; last: string }): string {
     return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
   }
   ```

## Challenge Link

1. [challenge link](https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c)

## Typescript with types

- String, number, boolean

  ```
  let userName: string = "Onkar";
  let hasLoggedIn: boolean = true;
  let myNumber: number = 10;
  ```

- regex, array of string, another way of array

  ```
  let myRegex: RegExp = /foo/;
  const names: string[] = userName.split(" ");
  const myValues: Array<number> = [1, 2, 3];
  ```

- objects in ts

  ```
  const myPerson: {
  first: string;
  last: string;
  } = {
  first: "Onkar",
  last: "Ambure",
  };
  ```

- interface and objects

  ```
  interface Person {
    first: string;
    last: string;
  }

  const personNew: Person = {
    first: "Omkar",
    last: "Ambure",
  };
  ```

- records in ts

  ```
  const ids: Record<number, string> = {
  10: "a",
  20: "b",
  };

  ids[30] = "c";
  ```

- loops in ts (for, forEach, map)

  ```
  for (let i: number = 0; i < 3; i++) {
  console.log(i);
  }

  [11, 22, 33].forEach((num: number) => console.log(num));

  const out: number[] = [110, 220, 330].map((num: number) => num + 2);
  ```

- normal functions and functions with default value and default export, named export and import in ts

  ```
  //in file functions.ts
  function addTwoNumbers(a: number, b: number): number {
  return a + b;
  }

  export default addTwoNumbers;

  export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

  //in file functions-test.ts
  import addTwoNumbers, { addStrings } from "./functions";

  console.log(addTwoNumbers(2, 3));
  console.log(addStrings("Onkar", "Ambure"));
  ```

- union in function parameters and function return void

  ```
  //functions with union type like string or number
  //in file functions.ts
  export const format = (title: string, param: string | number): string =>
    `${title} ${param}`;

  export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
  };
  ```

- promises in ts

  ```
  export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);
  ```

- rest parameters in ts

  ```
  function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
  }
  ```

- function parameters and function params with params

  ```
  // function parameters
  export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
  }

  // function params with params
  export function arrayMutate(
    numbers: number[],
    mutate: (num: number) => number
  ): number[] {
    return numbers.map(mutate);
  }

  console.log(arrayMutate([1, 2, 3], (num) => num + 2));

  ```

- functions as types

  ```
  export type MutationFunction = (num: number) => number;

  export function arrayMutateAnother(
    numbers: number[],
    mutate: MutationFunction
  ): number[] {
    return numbers.map(mutate);
  }

  ```

- Returning functions

  ```
  export type Adder = (num: number) => number;
  export function createAdder(num: number): Adder {
    return (val: number) => num + val;
  }

  const addOne = createAdder(1);
  console.log(addOne(55));
  ```

- function overloading

  ```
  // function overloading
  interface Coordinate {
    x: number;
    y: number;
  }

  function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return {
      ...obj,
    };
  }

  function parseCoordinateFromNumber(x: number, y: number) {
    return {
      x,
      y,
    };
  }

  function parseCoordinate(obj: Coordinate): Coordinate;
  function parseCoordinate(str: string): Coordinate;
  function parseCoordinate(x: number, y: number): Coordinate;
  function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
      x: 0,
      y: 0,
    };

    //comparing arg1 === "object" at run-time  not compile time
    if (typeof arg1 === "object") {
      coord = {
        ...(arg1 as Coordinate),
      };
    } else if (typeof arg1 === "string") {
      (arg1 as string).split(",").forEach((str) => {
        const [key, value] = str.split(":");
        coord[key as "x" | "y"] = parseInt(value, 10);
      });
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }

    return coord;
  }

  console.log(parseCoordinate(10, 20));
  console.log(parseCoordinate({ x: 50, y: 60 }));
  console.log(parseCoordinate("x: 12,y: 22"));
  ```

- Optionals in TS (Optional paramter, Non-null Assertion Operator (Postfix !), Optional function calls or callbacks)

  ```
  // optional paramter
  function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
  }

  printIngredient("1C", "Flour");
  printIngredient("1C", "Sugar", "Something");

  // optional fields
  interface User {
    id: string;
    info?: {
      email?: string;
    };
  }

  /**
  * Non-null Assertion Operator (Postfix !)
  * Just like other type assertions, this doesn’t change the runtime behavior of your code,
  * so it’s important to only use ! when you know that the value can’t be null or undefined.
  */
  function getEmail(user: User): string {
    if (user.info) {
      return user.info.email!;
    }

    return "";
  }

  function getEmailEasy(user: User): string {
    return user.info?.email ?? "";
  }

  // Optional function calls or callbacks
  function AddWithCallback(x: number, y: number, callbacks?: () => void) {
    console.log([x, y]);
    callbacks?.();
  }
  ```

- Tuples in ts(Tuples with different types)

  ```
  type ThreeDCoordinate = [x: number, y: number, z: number];

  function add3DCoordinate(
    c1: ThreeDCoordinate,
    c2: ThreeDCoordinate
  ): ThreeDCoordinate {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
  }

  console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));

  // Tuples with different types
  function simpleStringState(
    initial: string
  ): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
      () => str,
      (v: string) => {
        str = v;
      },
    ];
  }

  const [str1Getter, str1Setter] = simpleStringState("Hello");
  console.log(str1Getter());
  str1Setter("Hello WOrld");
  console.log(str1Getter());

  ```
