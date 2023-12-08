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
