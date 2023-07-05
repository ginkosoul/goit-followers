import styled from "@emotion/styled";

export const Header = styled.div`
  width: 100%;
  padding-block: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.splitter};
`;
