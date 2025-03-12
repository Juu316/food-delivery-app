import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password:{type:String, required: true},
  phoneNumber:{type:String, required:true},
  address:{type:String,},
  role:{type:String, enum:["ADMIN", "USER"], default:"USER",},
  orderedFoods:{type:[Schema.Types.ObjectId], ref:"Orders", default:[]},
  ttl:{type:Date},
  isVerified:{type:Boolean},
  createdAt:{type:Date},
  updatedAt:{type:Date},


});

export const UserModel = model("User", userSchema);
