import fs from 'fs';
export const users = [
  {
    firstname: "Usukh-Erdene",
    lastname: "Choijamts",
    username: "uujuu316",
    password: "qwerty",
    gender: "male",
    age: "21",
  },
  {
    firstname: "Bat-Orgil",
    lastname: "",
    username: "ihaw",
    password: "qwerty",
    gender: "male",
    age: "99",
  },
  {
    firstname: "Enhjin",
    lastname: "O",
    username: "kaze4o",
    password: "qwerty",
    gender: "male",
    age: "20",
  }
];

export const getUsers = (req, res) => {
  const users = fs.readFileSync('src/db/users.json');
  res.send(JSON.parse(users))
 
};
