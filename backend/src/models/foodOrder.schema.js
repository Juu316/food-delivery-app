import { Schema, model } from "mongoose";
import { foodOrderItem } from "./foodOrderItem.schema.js";
const foodOrderSchema = new Schema({
  
  _id: { type: Schema.Types.ObjectId },
  user: { type: Schema.Types.ObjectId },
  totalPrice: { type: Number },
  foodOrderItems:{type:String,  },
  status: { type: String, enum: ["PENDING", "CANCELED", "DELIVERED"] , default:"PENDING" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const UserModel = model("FoodOrder", foodOrderSchema);
