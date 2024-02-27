import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.js";
import Navbarall from "./Navbarall.js";
import Create from "./FORM.js";
import Show from "./Show.js";
import Login from "./Login.js";
import Admin from "./Admin.js";
import Newupdate from "./Newupdate.js";
import ShowUserAdmin from "./ShowUserAdmin.js";
import UpdateUseradmin from "./UpdateUseradmin.js";
import Filterstd from "./Filterstd.js";
import Filter2 from "./Filter2.js";
import Info from "./InfoAdmin.js";
import Welcome from "./Welcome.js";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbarall />
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/Admin">
        <Admin />
      </Route>
      <Route exact path="/Create">
        <Create />
      </Route>
      <Route exact path="/Showtable">
        <Show />
      </Route>
      <Route exact path="/Newupdate/:id">
        <Newupdate />
      </Route>
      <Route exact path="/ShowUserAdmin">
        <ShowUserAdmin />
      </Route>
      <Route exact path="/UpdateAdmin/:id">
        <UpdateUseradmin />
      </Route>
      <Route exact path="/UpdateUser/:id">
        <UpdateUseradmin />
      </Route>
      <Route exact path="/Filterstd">
        <Filterstd />
      </Route>
      <Route exact path="/Filter2">
        <Filter2 />
      </Route>
      <Route exact path="/InfoAdmin">
        <Info />
      </Route>
    </div>
  );
}

export default App;
