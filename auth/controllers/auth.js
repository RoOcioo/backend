import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

const signUp = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
      });
  
// const signIn = async (req, res) => {
//         try {
//           const userFound = await User.findOne({ email: req.body.email }).populate(
//             " username"
          
//             const token = jwt.sign({ id: userFound._id }, config.secret_password, {
//                 expiresIn: 3600, 
//               });
          
//               res.json({ token });
//             } catch (error) {
//               console.log(error);
//             }

export default {signUp, signIn}