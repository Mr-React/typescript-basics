// Let's challenge ourselves to re-implement forEach, map and filter using reduce,
// and to do it in a type safe manner using Typescript

/*
Javscript function

function myForEach(items, forEachFunc) {
    items.reduce((a,v)=>{
        forEachFunc(v);
        return undefined;
    }, undefined);
}

*/

// Same Above function implementation using Typescript
function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));

/*
    function myOwnFilter(items, filterFunc){
        return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
    }
*/

function myOwnFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(
  "myOwnFilter",
  myOwnFilter([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0)
);

/*
    function myOwnMap(items, mapFunc){
        return items.reduce((a,v)=>[...a, mapFunc(v)], [])
    }
*/
// Same Above function implementation using Typescript
function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 10).toString()));
