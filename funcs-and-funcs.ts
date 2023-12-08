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

// functions as types
export type MutationFunction = (num: number) => number;

export function arrayMutateAnother(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
