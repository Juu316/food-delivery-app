import { UserModel } from "../../models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the user exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
       // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // If the email and password are correct, send a success response
      res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error logging in", error: error.message });
    }
  };