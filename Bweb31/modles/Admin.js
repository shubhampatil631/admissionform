import mongoose from "mongoose";

const UserSchema2 = new mongoose.Schema({
  AdminUsername: String,
  AdminPassword: String,
  AdminDepartment: String,
  AdminContactNo: Number,
});
const UserModel2 = mongoose.model("admin", UserSchema2);

export default UserModel2;
