import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema({
  _id:{type: Schema.Types.ObjectId},
  categoryName:{type: String},
  createdAt:{type:Date},
  updatedAt:{type:Date},


});

export const foodCategoryModel = model("FoodCategory", foodCategorySchema);