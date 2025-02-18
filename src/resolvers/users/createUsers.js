import { users } from "./getUsers.js";
import path from 'path';
import fs from 'fs';

export const createUsers = (req, res) => {
  const {firstname, lastname} = req.body;
  const rawUserData = fs.readFileSync('src/db/users.json');
  const users = JSON.parse(rawUserData);
  users.push({firstname, lastname});
  fs.writeFileSync('src/db/users.json', JSON.stringify(users));
  // const newUser = {
  //   firstname: "NewUser1",
  //   lastname: "Lastname1",
  //   username: "blankno",
  //   password: "qwerty",
  //   gender: "female",
  //   age: "1",
  // };
  // users.push(newUser);
  res.status(201).send({ status: "success", data: users });
};
