import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
var salt = bcrypt.genSaltSync(10);

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, salt);
    const userExist = await UserModel.findOne({ userName });
    if (userExist)
      return res.json({ register: false, message: "userName Already Taken" });
    const user = new UserModel({
      userName,
      name,
      email,
      password: hashPassword,
      image: "defaultImage.jpg",
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
  } catch (err) {
    res.json({ register: false, message: "catch err" });
  }
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