import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Contact from "./components/navcomponent/Contact";
import About from "./components/navcomponent/About";
import Teams from "./components/navcomponent/Teams";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Navbarr from "./pages/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbarr />
        <Switch>
          <PrivateRoute component={Dashboard} path="/Dashboard" exact />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" exact />
          <Route component={Home} path="/" exact />
          <Route component={Contact} path="/Contact" exact />
          <Route component={About} path="/About" exact />
          <Route component={Teams} path="/Teams" exact />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
