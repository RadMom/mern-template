const express = require("express");
const router = express.Router();

//userControllers functions
const { loginUser, signupUser } = require("../controllers/userControllers");

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

module.exports = router;
