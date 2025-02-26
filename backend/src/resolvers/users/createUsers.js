import express from "express";
import path from "path";
import fs from "fs";
import { UserModel } from "../../models/user.scheme.js";
export const createUser = async(req, res )=>{
  const{ email, name, _id , password, phoneNumber, address, role} = req.body
  const updatedName = name + "0"
  const newUser = await UserModel.create({name:updatedName, email, role})
  res.send(newUser)
}














































// export const createUsers = (req, res) => {
//   const {firstname, lastname, username, password, gender, age} = req.body;
//   const rawUserData = fs.readFileSync('src/db/users.json');
//   const users = JSON.parse(rawUserData);
//   users.push(req.body);
//   fs.writeFileSync('src/db/users.json', JSON.stringify(users));
//   // const newUser = {
//   //   firstname: "NewUser1",
//   //   lastname: "Lastname1",
//   //   username: "blankno",
//   //   password: "qwerty",
//   //   gender: "female",
//   //   age: "1",
//   // };
//   // users.push(newUser);

//   res.send(req.body);
//   res.status(201).send({ status: "success", data: users });
// };

//export const createUsers = (req, res) => {
//   const { firstname, lastname, username, password, gender, age } = req.body;

//   // Check if all required fields are provided
//   if (!firstname || !lastname || !username || !password || !gender || !age) {
//     return res
//       .status(400)
//       .send({ status: "error", message: "All fields are required" });
//   }

//   // Read existing users
//   const users = readUsersFromFile();

//   // Check for duplicate username
//   const existingUser = users.find((user) => user.username === username);
//   if (existingUser) {
//     return res
//       .status(409)
//       .send({ status: "error", message: "Username already exists" });
//   }

//   // Add the new user
//   const newUser = { firstname, lastname, username, password, gender, age };
//   users.push(newUser);

//   // Write the updated users back to the file
//   writeUsersToFile(users);

//   res.status(201).send({ status: "success", data: newUser });
 //};





// const object = {name: "bat", age: 10
// }
// const {name} = object
// console.log(object.name)