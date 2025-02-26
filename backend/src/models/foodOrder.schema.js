import { Schema, model } from "mongoose";
const foodOrderSchema = new Schema({
    name: String,
    _id: {type: Schema.Types.ObjectId},
    user:{type: Schema.Types.ObjectId},
    totalPrice:{type:Number},
    foodOrderItems:{type:},
    status:{type:FoodOrderStatusEnum},
    createdAt:{type:Date},
    updatedAt:{type:Date},
  
  
  });
  
  export const UserModel = model("FoodOrder", foodOrderSchema);