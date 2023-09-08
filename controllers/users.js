const User = require("../models/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const generateAccessToken = (id, name, email) => {
  return jwt.sign({ signupId: id, name: name, email: email }, "8247533361a");
};

exports.postSignup = async (req, res, next) => {
  try {
    const name = req.body.obj.name;
    const email = req.body.obj.email;
    const phone = req.body.obj.phone;
    const password = req.body.obj.password;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      res.status(200).json({ message: "User Already Exists" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        const data = await User.create({
          name: name,
          email: email,
          phoneNumber: phone,
          password: password,
          password: hash,
        });
        res.status(201).json({ data });
      });
    }
  } catch (err) {
    res.status(400).json({ message: "Something went Wrong" });
  }
};
