const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const expressAsyncHandler = require("express-async-handler");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (req.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    console.log(token);
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECERET);
        // console.log(decoded);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized token expired, please Login again");
      toast.error("Login Again !!");
    }
  } else {
    throw new Error("There is no token attached to the header");
    toast.error("Login First !!");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user; //taking emial from user
  const adminUser = await User.findOne({ email });
  if (adminUser.role !== "admin") {
    throw new Error("You are not admin");
  } else {
    next();
  }
  //   console.log(req.user);
});
module.exports = { authMiddleware, isAdmin };
