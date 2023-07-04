import { PropTypes } from "prop-types";

import goitLogo from "../../assets/goit_logo.svg";
import { formatNumer } from "../../utils/formatNumber";
import {
  AvatarImage,
  CardHeader,
  CardSplitter,
  CardWrapper,
  FollowButton,
  Logo,
  Text,
} from "./UserCard.styled";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../../redux/users/operations";

UserCard.propTypes = {
  avatar: PropTypes.string,
  followers: PropTypes.number,
  id: PropTypes.string,
  isFollow: PropTypes.bool,
  tweets: PropTypes.number,
};

export function UserCard({
  avatar = null,
  followers = 100500,
  id = null,
  isFollow,
  tweets = 777,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateUserThunk({
        id,
        isFollow: !isFollow,
        followers: isFollow ? followers - 1 : followers + 1,
      })
    );
  };
  return (
    <CardWrapper>
      <Logo src={goitLogo} />
      <CardHeader />
      <CardSplitter />
      <div>
        <AvatarImage src={avatar} />
        <Text> {formatNumer(tweets)} tweets</Text>
        <Text> {formatNumer(followers)} Followers</Text>
        <FollowButton status={isFollow} type="button" onClick={handleClick}>
          {isFollow ? "Following" : "Follow"}
        </FollowButton>
      </div>
    </CardWrapper>
  );
}
