import { UserModel } from "../../models/user.schema.js";
import User from "../../models/user.schema.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res) => {
  try {
    const { email, name, password, phoneNumber, address, role } = req.body;
    // const salt = await bcrypt.genSalt(10);

    // const hashedPassword = await bcrypt.hash(password, salt);
    // // console.log("hashed password", hashedPassword);
    // const newUser = await UserModel.create({
    //   email,
    //   name,
    //   password: hashedPassword,
    //   phoneNumber,
    // });
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully :)" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

/* const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Create and save user
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

module.exports = createUser; */
