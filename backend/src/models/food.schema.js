import { Schema, model } from "mongoose";
//import { foodCategoryModel } from "./foodCategory.schema.js";
const foodSchema = new Schema({
  foodName: { type: String, required:true },
  price: { type: Number,required:true  },
  image: { type: String,required:true  },
  ingredients: { type: String,required:true  },
  category: { type: Schema.Types.ObjectId,ref:"FoodCategory" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const foodModel = model("Food", foodSchema);
