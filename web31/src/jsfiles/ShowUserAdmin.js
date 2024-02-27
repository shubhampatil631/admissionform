import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/index.css";
import Button from "react-bootstrap/Button";

const ShowUserAdmin = () => {
  const [isPending, setIsPending] = useState(false);
  const [Users, setUsers] = useState([]);
  const [Admins, setAdmins] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllUsers")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getAllAdmin")
      .then((result) => setAdmins(result.data))
      .catch((err) => console.log(err));
  }, []);
  const DeleteUser = (id) => {
    axios
      .delete("http://localhost:5000/DeleteUsers/" + id)
      .then((result) => {
        console.log(result);
        // Remove the deleted student from the state
        setUsers(Users.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };
  const DeleteAdmin = (id) => {
    axios
      .delete("http://localhost:5000/DeleteAdmin/" + id)
      .then((result) => {
        console.log(result);
        // Remove the deleted student from the state
        setAdmins(Admins.filter((admin) => admin._id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="adminuser">
      <div className="content">
        <table className="custom-table">
          <thead>
            <tr>
              <th>AdminUsername</th>
              <th>AdminPassword</th>
              <th>AdminDepartment</th>
              <th>AdminContactNo</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Admins.map((Admin) => (
              <tr key={Admin._id}>
                <td>{Admin.AdminUsername}</td>
                <td>{Admin.AdminPassword}</td>
                <td>{Admin.AdminDepartment}</td>
                <td>{Admin.AdminContactNo}</td>
                <td>
                  <NavLink to={`/UpdateAdmin/${Admin._id}`}>
                    <Button variant="outline-primary">Update</Button>
                  </NavLink>
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={(e) => DeleteAdmin(Admin._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="content">
        <table className="custom-table">
          <thead>
            <tr>
              <th>TeacherUsername</th>
              <th>TeacherPassword</th>
              <th>TeacherDepartment</th>
              <th>TeacherContactNo</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((User) => (
              <tr key={User._id}>
                <td>{User.UserUsername}</td>
                <td>{User.UserPassword}</td>
                <td>{User.UserDepartment}</td>
                <td>{User.UserContactNo}</td>
                <td>
                  <NavLink to={`/UpdateUser/${User._id}`}>
                    <Button variant="outline-primary">Update</Button>
                  </NavLink>
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={(e) => DeleteUser(User._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUserAdmin;
