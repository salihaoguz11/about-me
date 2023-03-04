import "./Nav.styled";
import { Div, Links } from "./Nav.styled";

const Nav = () => {
  return (
    <Div>
      <Links to="/">Home</Links>
      <Links to="/myproject">My Projects</Links>
      <Links to="/myskills">My Skills</Links>
      <Links to="/contact">Contact</Links>
    </Div>
  );
};

export default Nav;
