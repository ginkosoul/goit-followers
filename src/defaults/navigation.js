import { Home, UserList } from "../components";
import { HiHome, HiUsers } from "react-icons/hi";

export const navigation = [
  { to: "/", label: "Home", Element: Home, Icon: HiHome },
  { to: "/users", label: "Users", Element: UserList, Icon: HiUsers },
];
