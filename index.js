const express = require("express");
const app = express()
const port = 3000 ;

// let users = {name: "juu", birth:"2003/11/18"}
const user = {name:"uujuu", gender:"male", age:"21"}
let qwerty = [];
app.get('/', (req, res) => {
    res.send(qwerty);
//   res.send(`Name = ${user.name}
//     Gender = ${user.gender}
//     Age = ${user.age}`)
})

app.post('/', (req, res) => {
    
    res.send('Got a POST request')
  })

  app.put('/', (req, res) => {
    const newUser = {name:"NewUser's name", gender:"NewUser's gender", age:"NewUser's age"}
    user['name']=newUser.name;
    user['gender']=newUser.gender;
    user['age']=newUser.age;
    res.send('Got a PUT request at /user')
  })

  app.delete('/', (req, res) => {

    res.send('Got a DELETE request at /user')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})