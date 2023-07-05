import { navigation } from "../../defaults";
import { theme } from "../../styles/theme";
import { Link, NavList, NavWrapper } from "./NavBar.styled";

export function NavBar() {
  return (
    <NavWrapper>
      <NavList>
        {navigation.map(({ label, to, Icon }) => (
          <li key={label}>
            <Link to={to}>
              {({ isActive }) => (
                <Icon
                  style={{
                    width: "62px",
                    height: "62px",
                    fill: isActive
                      ? `${theme.colors.accent}`
                      : `${theme.colors.primary}`,
                  }}
                />
              )}
            </Link>
          </li>
        ))}
      </NavList>
    </NavWrapper>
  );
}
