// Challenge 1: link https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c

// interface House {
//     ...
//     }

//     interface HouseWithID {
//     ...
//     }

//     function findHouses(houses: string): HouseWithID[];
//     function findHouses(
//       houses: string,
//       filter: (house: House) => boolean
//     ): HouseWithID[];
//     function findHouses(houses: House[]): HouseWithID[];
//     function findHouses(
//       houses: House[],
//       filter: (house: House) => boolean
//     ): HouseWithID[];

//     console.log(
//       findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
//     );

//     console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

/**
 *
 * Solution
 */

import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

// function findHouses(houses: string): HouseWithID[];

// function findHouses(
//   houses: string,
//   filter: (house: House) => boolean
// ): HouseWithID[];

// function findHouses(houses: House[]): HouseWithID[];

// function findHouses(
//   houses: House[],
//   filter: (house: House) => boolean
// ): HouseWithID[];

// Solution
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((houseItem) => ({
    id: houses.indexOf(houseItem),
    ...houseItem,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
