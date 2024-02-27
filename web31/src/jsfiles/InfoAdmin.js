import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect, useNavigation } from "react";
import Button from "react-bootstrap/Button";
import "../css/index.css";
import axios from "axios";
import Navbar from "./Navbar.js";
const InfoAdmin = (props) => {
  const { state: initialUserState } = useLocation();
  const [userData, setUserData] = useState(initialUserState);
  useEffect(() => {
    setUserData(initialUserState);
  }, [initialUserState]);
  const {
    Username,
    Password,
    AdminDepartment,
    AdminContactNo,
    admin,
    teacher,
    UserContactNo,
    UserDepartment,
  } = userData;
  const [User, setUsers] = useState([]);
  const [isPending, setIsPending] = useState();
  const history = useHistory();
  const [CountInfo, setCountInfo] = useState([]);
  const [CountInfo2, setCountInfo2] = useState([]);
  const [Count, setCount] = useState(0);
  const [Countform, setCountform] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/getCount", {
        params: {
          username: Username, // Assuming Username is a prop
        },
      })
      .then((res) => {
        setCountInfo(res.data);
      })
      .catch((err) => {
        console.log("client", err);
      });
  }, [Username]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getCount", {
        params: {
          username: Countform, // Assuming Username is a prop
        },
      })
      .then((res) => {
        setCountInfo2(res.data);
      })
      .catch((err) => {
        console.log("client", err);
      });
  }, [Countform]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllUsers")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const DeleteUser = (id) => {
    axios
      .delete("http://localhost:5000/DeleteUsers/" + id)
      .then((result) => {
        console.log(result);
        // Remove the deleted student from the state
        setUsers(User.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="infoadminuser">
      <div className="bginfo">
        <div className="infouseradmin">
          <div className="useradmin">
            <center>
              <h1>Wellcome&#160;&#160;{admin}</h1>
            </center>
            {admin ? (
              <div>
                <label>{admin} Name:&#160;&#160;</label>
                {Username}
                <br></br>
                <label>{admin} Password:</label>&#160;&#160;{Password}
                <br></br>
                <label>Department </label>&#160;:&#160;{AdminDepartment}
                <br></br>
                <label>Contact No</label>&#160;:&#160;{AdminContactNo}
                <br></br>
              </div>
            ) : (
              <div>
                <label>
                  {teacher} Name&#160;:&#160;{Username}
                </label>
                <br></br>
                <label>{teacher} Password</label>&#160;:&#160;{Password}
                <br></br>
                <label>Department </label>&#160;:&#160;{UserDepartment}
                <br></br>
                <label>Contact No</label>&#160;:&#160;{UserContactNo}
                <br></br>
              </div>
            )}
          </div>
          <div className="navbarcontent">
            {admin ? (
              <>
                <div>
                  <Navbar
                    navname="adminlogin"
                    Username={Username}
                    AdminDepartment={AdminDepartment}
                  />
                </div>
                <div className="toptable">
                  <div className="container">
                    <div className="content">
                      <table className="custom-table">
                        <thead>
                          <tr>
                            <th>TeacherUsername</th>
                            <th>TeacherPassword</th>
                            <th>TeacherDepartment</th>
                            <th>TeacherContactNo</th>
                            <th>count</th>
                            <th>Action</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {User.map((User) => (
                            <tr key={User._id}>
                              <td>{User.UserUsername}</td>
                              <td>{User.UserPassword}</td>
                              <td>{User.UserDepartment}</td>
                              <td>{User.UserContactNo}</td>
                              <td>count</td>
                              <td>
                                <NavLink to={`/UpdateUser/${User._id}`}>
                                  <Button variant="outline-primary">
                                    Update
                                  </Button>
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
                </div>
              </>
            ) : (
              <div className="userstdcont">
                <Navbar
                  navname="teacherlogin"
                  Username={Username}
                  UserDepartment={UserDepartment}
                />
                <h3 style={{ marginLeft: 50, marginTop: 120 }}>
                  Teacher total submited form is {CountInfo.length}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAdmin;
/* <>
      <div className="tt">
        <div class="blog-slider">
          <div class="blog-slider__wrp swiper-wrapper">
            <div class="blog-slider__item swiper-slide">
              <div class="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                  alt=""
                />
              </div>
              <div class="blog-slider__content text-black">
                <span class="blog-slider__code ">26 December 2019</span>
                <div class="blog-slider__title">Lorem Ipsum Dolor</div>

                
              </div>
            </div>
          </div>
          <div class="blog-slider__pagination"></div>
        </div>
      </div>
    </>*/
