import { UserModel } from "../../models/user.schema.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log("hashed password", hashedPassword);
    const newUser = await UserModel.create({
      ...rest,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
  }
};
