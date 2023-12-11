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
