 import jwt from "jsonwebtoken";

// export const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, "your_secret_key"); // Replace 'your_secret_key' with your actual secret key
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };




export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.json({ message: "unauthorized!!!" })

    const token = authorization.split(' ')[1]

    try {
        jwt.verify(token, 'qwerty');
        next();
    } catch (err) {
        return res.json({ message: "unauthorized!!!" })
    }
}