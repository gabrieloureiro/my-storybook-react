import React, { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledIcon } from "../Sider";

interface SideLinkProps {
  label: string;
  icon: any;
  path: string;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }

  &.active {
  }
`;

export const StyledLinkText = styled.span`
  /* margin-left: 16px; */
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
