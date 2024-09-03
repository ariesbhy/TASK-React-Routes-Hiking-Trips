import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="page-top">
        <Nav />
        <Home />
      </div>
      <NavLink to={"/:tripId"}>TripDetail</NavLink>
    </div>
  );
}

export default App;
