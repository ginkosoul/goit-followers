import styled from "@emotion/styled";

export const LoadMoreWrapper = styled.li`
  width: 100%;
  padding-block: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  margin-inline: auto;
  margin-top: 16px;
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
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animation.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding-inline: 8px;
  padding-block: 16px;
  overflow-y: auto;
  max-height: 100vh;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;
`;
