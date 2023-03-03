const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify authentication. We get JWT from req.headers. 
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  //example : Bearer dsadfjsflhalfhasl

  const token = authorization.split(" ")[1]; //token = dsadfjsflhalfhasl

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    console.log("This is _id: "+_id);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = requireAuth;
