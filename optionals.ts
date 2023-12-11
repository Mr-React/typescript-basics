// Optionals in TS

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
