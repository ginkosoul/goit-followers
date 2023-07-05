import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  height: 100vh;
  padding-top: 120px;
  border-right: 2px solid teal;
  background: ${({ theme }) => theme.colors.cardBackground[1]};
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-inline: 8px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.cardBackground[1]};
  box-shadow: ${({ theme }) => theme.shadows.button};
  transition: scale ${({ theme }) => theme.animation.cubicBezier};
  &:hover {
    scale: 1.05;
  }
`;
