import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  handleCollpase: () => void;
}

const StyledHeader = styled.header`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #faca10;
`;

const StyledTitle = styled.h2`
  margin-left: 54px;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Header: React.FC<HeaderProps> = ({ handleCollpase, children }) => {
  return (
    <StyledHeader>
      <FiMenu onClick={handleCollpase} size={40} />
      <StyledTitle>{children}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
