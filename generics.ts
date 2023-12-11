// Generics in ts
function simpleStringStateNew<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [str1GetterNew, str1SetterNew] = simpleStringStateNew(10);
console.log(str1GetterNew());
str1SetterNew(200);
console.log(str1GetterNew());

// Overriding inferred generic types
const [str2GetterNew, str2SetterNew] = simpleStringStateNew<string | null>(
  null
);
console.log(str2GetterNew());
str2SetterNew("str");
console.log(str2GetterNew());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasur",
    hp: 20,
  },
  {
    name: "Megaasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
