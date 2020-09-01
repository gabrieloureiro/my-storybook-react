import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IconBase } from "react-icons";

export interface SideLinkProps {
  label: string;
  path: string;
  icon: JSX.Element;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }

  &.active {
  }
`;

export const StyledLinkText = styled.span`
  margin-top: 8px;
  font-size: 16px;
`;

export const StyledIcon = styled(IconBase)`
  font-size: 32px;
`;

const SideLink: React.FC<SideLinkProps> = ({ label, icon, path, ...rest }) => {
  return (
    <StyledNavLink to={path} exact activeClassName="active" {...rest}>
      <StyledIcon children={icon} />
      <StyledLinkText>{label}</StyledLinkText>
    </StyledNavLink>
  );
};

export default SideLink;
