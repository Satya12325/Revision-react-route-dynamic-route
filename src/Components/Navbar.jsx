import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  height: 40px;
  width: 100%;
  background: blue;
  color: white;
`;

export default function Navbar() {
  return (
    <Nav>
      <Link to={"/home"}>
        <h1>Shopping cart</h1>
      </Link>
    </Nav>
  );
}
