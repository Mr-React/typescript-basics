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

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});
sendEvent("checkout", { time: 10, user: "Batman" });
