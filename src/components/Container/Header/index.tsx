import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

const StyledTitle = styled.h2`
  margin-left: 54px;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <StyledTitle>{children}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
