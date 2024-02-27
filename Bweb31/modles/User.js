import mongoose from "mongoose";

const UserSchema1 = new mongoose.Schema({
  UserUsername: String,
  UserPassword: String,
  UserDepartment: String,
  UserContactNo: Number,
});
const UserModel1 = mongoose.model("users", UserSchema1);

export default UserModel1;
