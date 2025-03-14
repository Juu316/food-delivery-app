import { UserModel } from "../../models/user.schema.js";

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the user by ID and delete
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found" });
    }

    res.status(200).json({ status: "success", message: "User deleted", data: user });
  next();} catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Error deleting user", error: error.message });
  }
};