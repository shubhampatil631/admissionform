import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateUseradmin = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isPending, setIsPending] = useState();
  const [UserUsername, setUserUsername] = useState("");
  const [Lastuser, setLastUser] = useState("");
  const [Lastuserdept, setLastUserdept] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [UserDepartment, setUserDepartment] = useState("");
  const [UserContactNo, setUserContactNo] = useState("");

  const [AdminUsername, setAdminUsername] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");
  const [AdminDepartment, setAdminDepartment] = useState("");
  const [AdminContactNo, setAdminContactNo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUsers/" + id)
      .then((result) => {
        setUserUsername(result.data.UserUsername);
        setUserPassword(result.data.UserPassword);
        setUserDepartment(result.data.UserDepartment);
        setUserContactNo(result.data.UserContactNo);
        setLastUser(result.data.UserUsername);
        setLastUserdept(result.data.UserDepartment);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAdmins/" + id)
      .then((result) => {
        setAdminUsername(result.data.AdminUsername);
        setAdminPassword(result.data.AdminPassword);
        setAdminDepartment(result.data.AdminDepartment);
        setAdminContactNo(result.data.AdminContactNo);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const UpdateAdmin = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/UpdateAdmin/" + id, {
        AdminUsername,
        AdminPassword,
        AdminDepartment,
        AdminContactNo,
      })
      .then((result) => {
        history.goBack();
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const UpdateUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/UpdateUser/" + id, {
        UserUsername,
        UserPassword,
        UserDepartment,
        UserContactNo,
      })
      .then((result) => {
        history.goBack();
        console.log(result);
      })
      .catch((err) => console.log(err));
    axios
      .put("http://localhost:5000/UpdateUserOnstd", {
        SubmitedUsername: Lastuser,
        UserUsername: UserUsername,
        SubmitedDepartment: UserDepartment,
        UserDepartment: UserDepartment,
      })
      .then((result) => {
        history.goBack();
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="headupdate">
        {UserUsername ? (
          <div className="logininerr">
            <div class="background">
              <div class="shape"></div>
              <div class="shape"></div>
            </div>
            <form class="nform1" onSubmit={UpdateUser}>
              <h3>Update Teacher</h3>
              {Lastuser}
              <label for="username">Username</label>
              <input
                placeholder="Email or Phone"
                id="username"
                type="text"
                required
                value={UserUsername}
                onChange={(e) => setUserUsername(e.target.value)}
              />

              <label for="password">Password</label>
              <input
                placeholder="Password"
                id="password"
                type="password"
                required
                value={UserPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />

              <label>Department</label>
              <input
                placeholder="Password"
                id="username"
                type="text"
                required
                value={UserDepartment}
                onChange={(e) => setUserDepartment(e.target.value)}
              />
              <label>ContactNo</label>
              <input
                placeholder="ContactNo"
                id="username"
                type="text"
                required
                value={UserContactNo}
                onChange={(e) => setUserContactNo(e.target.value)}
              />
              <button type="onSubmit">Log In</button>
            </form>
          </div>
        ) : (
          <div className="logininerr">
            <div class="background">
              <div class="shape"></div>
              <div class="shape"></div>
            </div>
            <form class="nform1" onSubmit={UpdateAdmin}>
              <h3>Update Admin</h3>
              <label for="username">Username</label>
              <input
                placeholder="Email or Phone"
                id="username"
                type="text"
                required
                value={AdminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
              />

              <label for="password">Password</label>
              <input
                placeholder="Password"
                id="password"
                type="password"
                required
                value={AdminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />

              <label>Department</label>
              <input
                placeholder="Password"
                id="username"
                type="text"
                required
                value={AdminDepartment}
                onChange={(e) => setAdminDepartment(e.target.value)}
              />
              <label>ContactNo</label>
              <input
                placeholder="ContactNo"
                id="username"
                type="text"
                required
                value={AdminContactNo}
                onChange={(e) => setAdminContactNo(e.target.value)}
              />
              <button type="onSubmit">Log In</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateUseradmin;
/*

        <div className="login2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-4 login-box1">
                <div class="col-lg-12 login-title1">Update Admin</div>
                <div class="login-form1">
                  <div class="col-lg-12 login-form1">
                    <form onSubmit={UpdateAdmin}>
                      <div class="form-group1">
                        <label class="form-control-label1">USERNAME</label>
                        <input
                          class="form-control1"
        
        type="text"
                          required
                          value={AdminUsername}
                          onChange={(e) => setAdminUsername(e.target.value)}
                        />
                      </div>
                      <div class="form-group1">
                        <label class="form-control-label1">PASSWORD</label>
                        <input
                          class="form-control1"
                          type="password"
                          required
                          
                          value={AdminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                        />
                      </div>
                      <div class="form-group1">
                        <label class="form-control-label1">Department</label>
                        <input
                          class="form-control1"
                          type="text"
                          required
                          
                          value={AdminDepartment}
                          onChange={(e) => setAdminDepartment(e.target.value)}
                        />
                      </div>
                      <div class="form-group1">
                        <label class="form-control-label1">
                          AdminContactNo{" "}
                        </label>
                        <input
                          class="form-control1"
                          type="text"
                          required
                          
                          value={AdminContactNo}
                          onChange={(e) => setAdminContactNo(e.target.value)}
                        />
                      </div>

                      <div class="col-lg-12 loginbttm">
                        <div class="col-lg-12 login-btm login-button">
                          <button type="submit" class="btn btn-outline-primary">
                            Update Admin
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/
