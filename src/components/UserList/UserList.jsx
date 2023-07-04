import { useSelector } from "react-redux";
import {
  selectFilter,
  selectPage,
  selectUsers,
} from "../../redux/users/selectors";
import styled from "@emotion/styled";
import { FILTER } from "../../defaults";
import { UserCard } from "../UserCard/UserCard";

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: start;
  padding-inline: 8px;
  padding-block: 16px;
  overflow-y: auto;
  max-height: 100vh;
`;
const per_page = 6;

export function UserList() {
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  let filteredUsers = [];
  if (filter === FILTER.ALL)
    filteredUsers = users.slice(0, (page + 1) * per_page);
  if (filter === FILTER.FOLLOW)
    filteredUsers = users
      .filter((e) => e.isFollow)
      .slice(0, (page + 1) * per_page);
  if (filter === FILTER.UNFOLLOW)
    filteredUsers = users
      .filter((e) => !e.isFollow)
      .slice(0, (page + 1) * per_page);

  return (
    <Wrapper>
      {filteredUsers.length > 0 &&
        filteredUsers.map((e) => <UserCard key={e.id} {...e} />)}
    </Wrapper>
  );
}
