import styled from "@emotion/styled";
import mainLogo from "../../assets/card/card_logo@3x.webp";
import avatar from "../../assets/card/default_avatar.webp";
import frame from "../../assets/elipse.svg";

export const CardWrapper = styled.div`
  width: 380px;
  height: 460px;
  max-width: 100%;
  padding-top: 28px;
  position: relative;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.cardBackground[0]};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const Logo = styled.img`
  position: absolute;
  padding: 0;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const CardHeader = styled.div`
  width: 308px;
  height: 168px;
  max-width: 100%;
  margin-inline: auto;
  margin-bottom: 18px;
  background-image: url(${mainLogo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardSplitter = styled.div`
  height: 8px;
  background: #ebd8ff;
  box-shadow: ${({ theme }) => theme.shadows.splitter};
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  margin-top: -44px;
  margin-inline: auto;
  background-image: url(${frame}), url(${({ src }) => src || avatar}),
    linear-gradient(#5736a3, #5736a3);
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-block: 16px;
`;

export const FollowButton = styled.button`
  margin-inline: auto;
  margin-top: 26px;
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 10.311px;
  border: none;
  outline: none;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  color: #373737;
  font-size: 18px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  background-color: ${({ theme, status }) =>
    status ? theme.colors.accent : theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, status }) =>
      status ? theme.colors.primary : theme.colors.accent};
  }
`;
