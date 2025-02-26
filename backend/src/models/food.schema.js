import { Schema, model } from "mongoose";
//import { foodCategoryModel } from "./foodCategory.schema.js";
const foodSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  foodName: { type: String },
  price: { type: Number },
  image: { type: String },
  ingredients: { type: String },
  category: { type: Schema.Types.ObjectId },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const foodModel = model("Food", foodSchema);
