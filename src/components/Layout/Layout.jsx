import { Outlet } from "react-router-dom";
import { NavBar } from "@components";
import { Wrapper } from "./Layout.styled";

export function Layout() {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
}
