interface UserMango {
  name: string;
  age: number;
  email: string;
  address: Address;
}

interface Address {
  city: string;
  country: string;
}

export const mango: UserMango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

interface UserPoly {
  name: string;
  age: number;
  email: string;
}
export const poly: UserPoly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
