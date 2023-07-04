import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

const NavBar = styled.nav`
  height: 100vh;
  padding-top: 120px;
  width: 120px;
  border-right: 2px solid teal;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
`;

export function Layout() {
  return (
    <Wrapper>
      <NavBar>
        <NavList>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </NavList>
      </NavBar>
      <Outlet />
    </Wrapper>
  );
}
