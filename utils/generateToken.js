import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV == "production",
  });
};
