import { Schema, model } from "mongoose";

const foodOrderItemSchema = new Schema({
  food: { type: Schema.Types.ObjectId },
  quantity: { type: Number },
});

export const foodOrderItemModel = model("FoodOrderItem", foodOrderItemSchema);
