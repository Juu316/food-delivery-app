import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
// const readUsersFromFile = ()=>{
//   const rawUserData = fs.readFileSync('src/db/users.json');
//   return JSON.parse(rawUserData);
// }

// export const getUsers = (req, res) => {
//   const users = fs.readFileSync('src/db/users.json');
//   let user = JSON.parse(users).find((user)=>{user.username === req.user.username});
//   if(user){
//     return res.json(user)
//   }else{return res.status(401).json({message: "Invalid user"})}
//  res.json(JSON.parse(users));
// };

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the path to the users.json file
const usersFilePath = path.join(__dirname, "../../db/users.json");

// Function to read users from the JSON file
const readUsersFromFile = () => {
  const rawUserData = fs.readFileSync(usersFilePath);
  return JSON.parse(rawUserData);
};

export const getUsers = (req, res) => {
  // Read existing users
  const users = readUsersFromFile();

  // Find the user by username
  const user = users.find((user) => user.username === req.user.username);

  if (user) {
    return res.json(user);
  } else {
    return res.status(401).json({ message: "Invalid user" });
  }
};

/* var token = req.headers.authorization;
if (!token) {
  return res.status(401).json({ message: "Invalid token" });
}
  const users = fs.readFileSync("src/DB/users.json");
  var user = JSON.parse(users).find((user) => user.username === req.user.username);
  if (user) {
    return res.json(user);
  } else {
    return res.status(401).json({ message: "Invalid user" });
  }
 
  res.json(JSON.parse(users)); */
