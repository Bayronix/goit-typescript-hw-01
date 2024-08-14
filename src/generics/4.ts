type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function createOrUpdateUser(initialValues: Partial<User>) {
  console.log(`Update: ${initialValues}`);
}

export const createOrUpdateUserValue: Partial<User> = {
  email: "user@mail.com",
  password: "password123",
};
