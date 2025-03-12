import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.json({ message: "unauthorized!!" });

  const token = authorization.split(" ")[1];

  try {
    jwt.verify(token, "qwerty");
    next();
  } catch (err) {
    return res.json({ message: "unauthorized!!!" });
  }
};
