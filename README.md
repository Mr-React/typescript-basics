# TypeScript Basics

## Typscript Project Setup

- run command npm init -y
- install typescript using npm install typescript --save-dev command
- install ts-node using npm install -D ts-node
- run npx tsc --init command to create tsconfig file for configuration
- `npx ts-node .\funcs-and-funcs.ts` command to run ts file
- npx tsc .\enums.ts command to transpile/ convert ts to js file

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

1. [Challenge link](https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c) => [Check challenge_1.ts file](https://github.com/Mr-React/typescript-basics/blob/main/Challenge/challenge_1.ts)
2. [Check challenge_2.ts file](https://github.com/Mr-React/typescript-basics/blob/main/Challenge/challenge_2.ts)

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

- Generics in ts(Overriding inferred generic types)

  ```
  // Generics in ts
  function simpleStringStateNew<T>(initial: T): [() => T, (v: T) => void] {
    let str: T = initial;
    return [
      () => str,
      (v: T) => {
        str = v;
      },
    ];
  }

  const [str1GetterNew, str1SetterNew] = simpleStringStateNew(10);
  console.log(str1GetterNew());
  str1SetterNew(200);
  console.log(str1GetterNew());

  // Overriding inferred generic types
  const [str2GetterNew, str2SetterNew] = simpleStringStateNew<string | null>(
    null
  );
  console.log(str2GetterNew());
  str2SetterNew("str");
  console.log(str2GetterNew());

  interface Rank<RankItem> {
    item: RankItem;
    rank: number;
  }

  function ranker<RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
  ): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
      item,
      rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
  }

  interface Pokemon {
    name: string;
    hp: number;
  }

  const pokemon: Pokemon[] = [
    {
      name: "Bulbasur",
      hp: 20,
    },
    {
      name: "Megaasaur",
      hp: 5,
    },
  ];

  const ranks = ranker(pokemon, ({ hp }) => hp);
  console.log(ranks);
  ```

- Generics with keyof in ts

  ```
  // Generics with keyof in ts
  // KeyType has to be one of the keys in DataType
  function pluck<DataType, KeyTpe extends keyof DataType>(
    items: DataType[],
    key: KeyTpe
  ): DataType[KeyTpe][] {
    return items.map((item) => item[key]);
  }

  const dogs = [
    {
      name: "Mimi",
      age: 12,
    },
    {
      name: "Leo",
      age: 13,
    },
  ];

  console.log(pluck(dogs, "age"));
  console.log(pluck(dogs, "name"));

  interface BaseEvent {
    time: number;
    user: string;
  }

  interface EventMap {
    addToCart: BaseEvent & {
      quantity: number;
      productID: string;
    };
    checkout: BaseEvent;
  }

  function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name]
  ): void {
    console.log([name, data]);
  }

  sendEvent("addToCart", {productID: "foo", user:"baz", quantity: 1, time: 10});
  sendEvent("checkout", {time: 10, user:"Batman"});
  ```

- Utility Types in TS (Partial, Required, Pick, Record and Omit)

  ```
  // Utility Types in TS

  interface MyUser {
    name: string;
    id: string;
    email?: string;
  }

  type MyUserOptionals = Partial<MyUser>;

  const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
      ...user,
      ...overrides,
    };
  };

  // console.log(merge({ name: "Bruce Wayne", id: "JL_1", email: "Bruce@jl.com"}, { email: "Batman@jl.com"}));
  // console.log(merge({ name: "Bruce Wayne", id: "JL_1", email: "Bruce@jl.com"}, { name: "Bruce Wayne", email: "Batman@jl.com"}));

  // Required
  type RequiredMyUser = Required<MyUser>;

  // Pick
  type JustEmailAndName = Pick<MyUser, "email" | "name">;

  // Record and Omit
  type UserWithoutID = Omit<MyUser, "id">;
  const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
    return users.reduce((a, v) => {
      const { id, ...other } = v;
      return {
        ...a,
        [id]: other,
      };
    }, {});
  };

  console.log(mapById([{ id: "foo", name: "Mr.Foo" },{ id: "baz", name: "Mr.Baz"}]));
  ```

- Readonly And Immutability in TS

  ```
  // Readonly And Immutability in TS

  interface Cat {
    name: string;
    breed: string;
  }

  function makeCat(name: string, breed: string): Readonly<Cat> {
    return {
      name,
      breed,
    };
  }

  const usul = makeCat("Usul", "Tabby");

  function makeCoordinate(
    x: number,
    y: number,
    z: number
  ): readonly [number, number, number] {
    return [z, y, z];
  }

  const c1 = makeCoordinate(2, 3, 4);
  // c1[0] = 50; => not going to change bcoz of readonly property

  // Really constant arrays
  const reallyConst = [1, 2, 3] as const;
  // reallyConst[0] = 50; => not going to change bcoz of mark as "as const"
  ```

- Enums and Literal types in TS(Enums, Literal Types and string literals)

  ```
  // Enums and Literal types in TS

  // Enums
  const beforeLoad = "beforeLoad";
  const loading = "loading";
  const loaded = "loaded";

  enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
  }

  const englishLoadingState = {
    [LoadingState.beforeLoad]: "Before Load",
  };

  const isLoading = (state: LoadingState) => state === LoadingState.loading;

  console.log(isLoading(LoadingState.beforeLoad));

  // Literal Types

  function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0;
    for (let i = 0; i < dice; i++) {
      pip = pip + Math.floor(Math.random() * 5) + 1;
    }

    return pip;
  }

  console.log(rollDice(2));

  // string literals
  function sendEventNew(name: "addToCart", data: { productId: number }): void;
  function sendEventNew(name: "checkout", data: { cartCount: number }): void;
  function sendEventNew(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
  }

  sendEventNew("addToCart", { productId: 123123 });
  ```

- Typescript Classes, Member Visibility and Implements

  ```
  // Typescript Classes; Member Visibility and Implements

  // Implementing interface
  interface Database {
    get(id: string): string;
    set(id: string, value: string): void;
  }

  interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
  }

  // Implementing class
  class InMemoryDatabase implements Database {
    // making db protected
    protected db: Record<string, string> = {};
    get(id: string): string {
      return this.db[id];
    }

    set(id: string, value: string): void {
      this.db[id] = value;
    }
  }

  const myDb = new InMemoryDatabase();

  myDb.set("foo", "bar");
  console.log(myDb.get("foo"));

  class PersistentMemoryDb extends InMemoryDatabase implements Persistable {
    saveToString(): string {
      return JSON.stringify(this.db);
    }

    restoreFromString(storedState: string): void {
      this.db = JSON.parse(storedState);
    }
  }

  const myPersiDb = new PersistentMemoryDb();

  myPersiDb.set("foo", "bar");
  console.log(myPersiDb.get("foo"));
  const state = myPersiDb.saveToString();

  const myPersiDb1 = new PersistentMemoryDb();
  myPersiDb1.restoreFromString(state);
  console.log(myPersiDb1.get("foo"));
  ```

- Generics in Typescript Classes

  ```
  // Generics in Typescript Classes

  // Implementing interface
  interface DatabaseGen<T, K> {
    get(id: K): T;
    set(id: K, value: T): void;
  }

  interface PersistableGen {
    saveToString(): string;
    restoreFromString(storedState: string): void;
  }

  type DBKeyType = string | number | symbol;

  // Implementing class
  class InMemoryDatabaseGen<T, K extends DBKeyType> implements DatabaseGen<T, K> {
    // making db protected
    protected db: Record<K, T> = {} as Record<K, T>;
    get(id: K): T {
      return this.db[id];
    }

    set(id: K, value: T): void {
      this.db[id] = value;
    }
  }

  const mydb1 = new InMemoryDatabaseGen();

  mydb1.set("foo", "bar");
  console.log(mydb1.get("foo"));

  class PersistentMemoryDbGen<T, K extends DBKeyType>
    extends InMemoryDatabaseGen<T, K>
    implements PersistableGen
  {
    saveToString(): string {
      return JSON.stringify(this.db);
    }

    restoreFromString(storedState: string): void {
      this.db = JSON.parse(storedState);
    }
  }

  const myPersiDb0 = new PersistentMemoryDbGen<number, string>();

  myPersiDb0.set("foo", 123);
  console.log(myPersiDb0.get("foo"));
  const state1 = myPersiDb0.saveToString();
  myPersiDb0.set("foo", 34);
  console.log(myPersiDb0.get("foo"));

  const myPersiDb01 = new PersistentMemoryDbGen<number, string>();
  myPersiDb01.restoreFromString(state1);
  console.log(myPersiDb01.get("foo"));
  ```
