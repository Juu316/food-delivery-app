import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  orderedFoods: { type: [Schema.Types.ObjectId], ref: "Orders", default: [] },
  ttl: { type: Date },
  isVerified: { type: Boolean },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
export const UserModel = model("User", userSchema);
