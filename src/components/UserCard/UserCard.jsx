import { useState } from "react";

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

export function UserCard() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <CardWrapper>
      <Logo src={goitLogo} />
      <CardHeader />
      <CardSplitter />
      <div>
        <AvatarImage src={null} />
        <Text> {formatNumer(777)} tweets</Text>
        <Text> {formatNumer(100500)} Followers</Text>
        <FollowButton status={active} type="button" onClick={handleClick}>
          {active ? "Following" : "Follow"}
        </FollowButton>
      </div>
    </CardWrapper>
  );
}
