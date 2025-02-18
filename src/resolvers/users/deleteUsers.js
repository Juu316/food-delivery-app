// app.delete("/users", (req, res) => {
//   users.pop();
//   res.send({ status: "success", data: users });
// });
import { users } from "./getUsers.js"
export const deleteUsers = (req,res)=>{
    if (users.length > 0) {
        users.pop();
        res.send({ status: "success", data: users });
      } else {
        res.status(404).send({ status: "error", message: "No users to delete" });
      }
}