let userName: string = "Onkar";
let hasLoggedIn: boolean = true;

userName += "Ambure";

console.log(hasLoggedIn);

let myNumber: number = 10;

// regex with ts
let myRegex: RegExp = /foo/;

console.log(myRegex);

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1, 2, 3];

const myPerson: {
  first: string;
  last: string;
} = {
  first: "Onkar",
  last: "Ambure",
};

interface Person {
  first: string;
  last: string;
}

const personNew: Person = {
  first: "Omkar",
  last: "Ambure",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

//loops in ts

for (let i: number = 0; i < 3; i++) {
  console.log(i);
}

[11, 22, 33].forEach((num: number) => console.log(num));

const out: number[] = [110, 220, 330].map((num: number) => num + 2);
