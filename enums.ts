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
