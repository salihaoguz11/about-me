import "./Nav.styled";
import { Div } from "./Nav.styled";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Div>
      <Link to="/">Home</Link>
      <Link to="/myproject">My Projects</Link>
      <Link to="/myskills">My Skills</Link>
      <Link to="/contact">Contact</Link>
    </Div>
  );
};

export default Nav;
