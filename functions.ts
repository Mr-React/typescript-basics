function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

export default addTwoNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;
