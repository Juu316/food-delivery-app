import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema({
  categoryName: { type: String, required:true},
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

export const foodCategoryModel = model("FoodCategory", foodCategorySchema);
