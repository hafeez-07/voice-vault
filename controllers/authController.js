import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

//register user
export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    //check if user already exist
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      if (existingUser.email == email) {
        return res.status(400).json({
          Error: "Email is already registered",
        });
      }
      if (existingUser.username == username) {
        return res.status(400).json({
          Error: "Username is already taken",
        });
      }
    }

    //if he does not exist , create a new user
    const createdUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      age,
    });

    //create a token
    generateToken(res, createdUser._id);

    res.redirect("/home");
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//login user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //if user is not present
    if (!user) {
      return res.status(400).json({
        error: "User does not exist , please sign up",
      });
    }

    //if he is present , match password

    const isMatch = await bcrypt.compare(password, user.password);

    //if password does not match
    if (!isMatch) {
      return res.status(400).json({
        error: "Password mismatch , try again",
      });
    }

    //create a token
    generateToken(res, user._id);

    res.redirect("/home");
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

//logout user
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};
