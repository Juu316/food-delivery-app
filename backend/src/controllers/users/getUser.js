import { UserModel } from "../../models/user.schema.js";
import dotenv, {populate} from "dotenv";
dotenv.config();
export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId).populate("orderedFoods");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log(error)
  }
};
