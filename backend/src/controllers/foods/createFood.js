import { foodModel } from '../../models/food.schema.js';


export const createFood = async (req, res) => {
    const { foodName, price, image, ingredients, category } = req.body;

    try {
        await foodModel.create({ foodName, price, image, ingredients, category });
        res.json({ message: 'Success' })
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }
}