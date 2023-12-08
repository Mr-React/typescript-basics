function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

export default addTwoNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

//functions with union type like string or number
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

//promises in ts
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//rest parameters in ts
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
