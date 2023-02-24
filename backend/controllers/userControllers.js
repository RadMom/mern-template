const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    //login is from userSchema.statics.login in userModel.js
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.json({ email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//singup controller
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    //signup is from userSchema.statics.signup in userModel.js
    const user = await User.signup(email, password);

    //create token
    const token = createToken(user._id);

    res.json({ email, token });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
