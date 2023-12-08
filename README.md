# TypeScript Basics

## Typscript Project Setup

- run command npm init -y
- install typescript using npm install typescript --save-dev command
- install ts-node using npm install -D ts-node
- run npx tsc --init command to create tsconfig file for configuration

## VS Code Shortcuts

- select variable and ctrl + k + ctrl + i shows variable type

## Typescript with types

- String, number, boolean

  ```let userName: string = "Onkar";
  let hasLoggedIn: boolean = true;
  let myNumber: number = 10;
  ```

- regex, array of string, another way of array

  ```let myRegex: RegExp = /foo/;
  const names: string[] = userName.split(" ");
  const myValues: Array<number> = [1, 2, 3];
  ```

- objects in ts

  ```const myPerson: {
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
