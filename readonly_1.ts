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
