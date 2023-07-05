import { useSelector } from "react-redux";
import {
  selectFilter,
  selectPage,
  selectUsers,
} from "../../redux/users/selectors";
import { FILTER } from "../../defaults";
import { UserCard } from "../UserCard/UserCard";
import { Filter } from "../Filter/Filter";
import { List, Wrapper } from "./UserList.styled";
import { LoadMore } from "./LoadMore";

const per_page = 6;

export function UserList() {
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const page = useSelector(selectPage);
  const results = (page + 1) * per_page;

  let filteredUsers = [];
  if (filter === FILTER.ALL) filteredUsers = users;
  if (filter === FILTER.FOLLOW)
    filteredUsers = users.filter((e) => !e.isFollow);
  if (filter === FILTER.UNFOLLOW)
    filteredUsers = users.filter((e) => e.isFollow);

  const isShowLoadMore = filteredUsers.length > results;
  if (isShowLoadMore) filteredUsers = filteredUsers.slice(0, results);

  return (
    <Wrapper>
      <Filter />
      <List>
        {filteredUsers.length > 0 &&
          filteredUsers.map((e) => <UserCard key={e.id} {...e} />)}
        {isShowLoadMore && <LoadMore />}
      </List>
    </Wrapper>
  );
}
