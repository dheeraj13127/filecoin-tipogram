const MestifyUser = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();


exports.signUpWithEmail = async (req, res) => {
  try {
   
    MestifyUser.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(400).json({
          message: "Email address already exists",
        });
      }
    });

    var hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const newUser = await MestifyUser.create(req.body);
   
    return res.status(200).json({
      user: newUser,
      message: "Success",
    });
  } catch (e) {
  
  }
};

exports.signInWithEmail = async (req, res) => {
  try {
    const emailAddress = req.body.email;
    const password = req.body.password;

    const isEmailPresent = await MestifyUser.findOne({ email: emailAddress });
   
    if (!isEmailPresent) {
      return res.status(400).json({ message: "No such email address found." });
    }

    if (!bcrypt.compareSync(password, isEmailPresent.password)) {
      return res.status(400).json({
       
        message: "Incorrect Password",
      });
    }

   
    return res
      .status(200)
      .json({ user:isEmailPresent, message: "Welcome back !" });
  } catch (e) {
    
  }
};
exports.getProfile = async (req, res) => {
  const { userId } = req.body;
 
  try {
    await MestifyUser.findById({ _id: userId }).then((resp) =>
      res.status(200).json({ user: resp })
    );
  } catch (e) {

  }
};