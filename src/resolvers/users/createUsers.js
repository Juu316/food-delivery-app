import { users } from "./getUsers.js";
export const createUsers = (req, res) => {
  const newUser = {
    firstname: "NewUser1",
    lastname: "Lastname1",
    username: "blankno",
    password: "qwerty",
    gender: "female",
    age: "1",
  };
  users.push(newUser);
  res.status(201).send({ status: "success", data: users });
};
