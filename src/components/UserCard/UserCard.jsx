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
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "../../redux/users/operations";
import { useState } from "react";
import { selectIsLoading } from "../../redux/users/selectors";

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
  const [loading, setLoading] = useState(false);
  const loaded = !useSelector(selectIsLoading);

  if (loaded && loading) setLoading(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateUserThunk({
        id,
        isFollow: !isFollow,
        followers: isFollow ? followers - 1 : followers + 1,
      })
    );
    setLoading(true);
  };
  return (
    <CardWrapper>
      <Logo src={goitLogo} />
      <CardHeader />
      <CardSplitter />
      <div>
        <AvatarImage avatar={avatar} />
        <Text> {formatNumer(tweets)} tweets</Text>
        <Text> {formatNumer(followers)} Followers</Text>
        <FollowButton
          disabled={loading}
          status={isFollow}
          type="button"
          onClick={handleClick}
        >
          {loading ? "Loading..." : isFollow ? "Following" : "Follow"}
        </FollowButton>
      </div>
    </CardWrapper>
  );
}
