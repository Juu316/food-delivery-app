import { foodModel } from "../../models/food.schema.js"
export const getFood = async (req, res, next)=>{
    try{
        const foods = await foodModel.find();
        res.json(foods);
    }catch(error){console.log(error)}
}