import { UserModel } from "../../models/user.schema.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { email, name, password, phoneNumber, address, role } = req.body;
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log("hashed password", hashedPassword);
    const newUser = await UserModel.create({
      email,
      name,
      password: hashedPassword,
      phoneNumber,
      address,
      role
    });

    res.status(201).json({message: "User created successfully", user: newUser});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

