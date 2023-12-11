// Utility Types in TS

interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

// console.log(merge({ name: "Bruce Wayne", id: "JL_1", email: "Bruce@jl.com"}, { email: "Batman@jl.com"}));
// console.log(merge({ name: "Bruce Wayne", id: "JL_1", email: "Bruce@jl.com"}, { name: "Bruce Wayne", email: "Batman@jl.com"}));

// Required
type RequiredMyUser = Required<MyUser>;

// Pick
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Record and Omit
type UserWithoutID = Omit<MyUser, "id">;
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "Mr.Foo" },
    { id: "baz", name: "Mr.Baz" },
  ])
);
