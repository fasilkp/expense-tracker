import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";
var salt = bcrypt.genSaltSync(10);

export const registerUser = async (req, res) => {
  //   try {
  const { name, email, password, monthlyLimit } = req.body;
  const hashPassword = bcrypt.hashSync(password, salt);
  const userExist = await UserModel.findOne({ email });
  if (userExist)
    return res.json({ register: false, message: "userName Already Taken" });
  const user = new UserModel({
    monthlyLimit,
    name,
    email,
    password: hashPassword,
  });
  user.save((err) => {
    if (err) return res.json({ register: false, message: "save error " });
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY
    );
    //store on coockie
    const exp = new Date() + 1000 * 60;
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "none",
      })
      .json({
        register: true,
        message: "registration successfull",
        user: user._id,
      });
  });
  //   } catch (err) {
  //     res.json({ register: false, message: "catch err" });
  //   }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email,
  });
  if (!user) {
    return res.json({
      login: false,
      message: "no user found",
      err: "login failed",
    });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.json({
      login: false,
      message: "invalid email or password",
      err: "login failed",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY
  );
  //store on coockie
  const exp = new Date() + 1000 * 60;
  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: "none",
    })
    .json({ login: true, message: "logged in successfully", user: user._id });
};
export const checkLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ loggedIn: false, error: "no token" });

    const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await UserModel.findOne(
      { _id: verifiedJWT.id },
      { password: 0 }
    );
    if (!user) {
      return res.json({ loggedIn: false, error: "no token" });
    }
    return res.json({ loggedIn: true, user });
  } catch (err) {
    res.json({ loggedIn: false, error: err });
  }
};
export const logoutUser = (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .json({ message: "logged out" });
};
