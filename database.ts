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
