import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import "../css/index.css";
import axios from "axios";
const Admin = () => {
  const [isPending, setIsPending] = useState();
  const history = useHistory();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Department, setDepartment] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const SubmitAdmin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/CreateAdmin", {
        Username,
        Password,
        Department,
        ContactNo,
      })
      .then((result) => {
        console.log(result);
        history.goBack();
      })
      .catch((err) => console.log(err));
  };
  const SubmitUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/CreateUser", {
        Username,
        Password,
        Department,
        ContactNo,
      })
      .then((result) => {
        console.log(result);
        history.goBack();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="headupdate">
        <div className="logininerr">
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <form class="nform1">
            <h3>Create Teacher</h3>

            <label for="username">Username</label>
            <input
              placeholder="Email or Phone"
              id="username"
              type="text"
              required
              requiredvalue={Username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Department</label>
            <input
              placeholder="Password"
              id="username"
              type="text"
              required
              value={Department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <label>ContactNo</label>
            <input
              placeholder="ContactNo"
              id="username"
              type="text"
              required
              value={ContactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <button
              type="submit"
              class="btn btn-outline-primary"
              onClick={SubmitUser}
            >
              create Teacher
            </button>
            <button
              type="submit"
              class="btn btn-outline-primary"
              onClick={SubmitAdmin}
            >
              create Admin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Admin;
/*
<div className="login">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4"></div>
          <div class="col-lg-11 col-md-8 login-boxa">
            <div className="innerlogin">
              <div class="col-lg-12 login-titlea">
                Create new Teacher/Sub-Admin
              </div>
              <div class="login-forma">
                <div class="col-lg-12 login-forma">
                  <form>
                    <div class="form-groupa">
                      <label class="form-control-labela">USERNAME</label>
                      <input
                        class="form-controla"
                        type="text"
                        required
                        value={Username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div class="form-groupa">
                      <label class="form-control-labela">PASSWORD</label>
                      <input
                        class="form-controla"
                        type="password"
                        required
                        
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="form-groupa">
                      <label class="form-control-labela">Department</label>
                      <input
                        class="form-controla"
                        type="text"
                        required
                        
                        value={Department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>
                    <div class="form-groupa">
                      <label class="form-control-labela">ContactNo </label>
                      <input
                        class="form-controla"
                        type="text"
                        required
                        value={ContactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                      />
                    </div>

                    <div class="col-lg-12 loginbttm">
                      <div class="col-lg-12 login-btm login-button">
                        <div className="loginbtna">
                          <button
                            type="submit"
                            class="btn btn-outline-primary"
                            onClick={SubmitUser}
                          >
                            CREATE NEW TEACHER
                          </button>
                          <button
                            type="submit"
                            class="btn btn-outline-primary"
                            onClick={SubmitAdmin}
                          >
                            CREATE NEW Sub-Admin
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/
