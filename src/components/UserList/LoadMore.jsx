import { useDispatch, useSelector } from "react-redux";
import { LoadMoreButton, LoadMoreWrapper } from "./UserList.styled";
import { nextPage } from "../../redux/users/slice";
import { selectIsLoading } from "../../redux/users/selectors";

export function LoadMore() {
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(nextPage());
  };
  return (
    <LoadMoreWrapper>
      <LoadMoreButton disabled={loading} onClick={handleClick}>
        {loading ? "Loading..." : "Load More"}
      </LoadMoreButton>
    </LoadMoreWrapper>
  );
}
