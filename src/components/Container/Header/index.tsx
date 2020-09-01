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
  background: #fff;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h2`
  margin-left: 54px;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Header: React.FC<HeaderProps> = ({ handleCollpase }) => {
  return (
    <StyledHeader>
      <FiMenu onClick={handleCollpase} size={40} />
      <StyledTitle>KDJANLKSJID</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
