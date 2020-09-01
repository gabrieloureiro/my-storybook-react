import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import SideLink from "../SideLink";
import { FiPieChart } from "react-icons/fi";

interface SiderProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

const StyledSider = styled.aside<SiderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex: 0 0 auto;
  width: ${(props) => (props.collapsed ? "192px" : "64px")};
  height: 100vh;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 16px;
`;

const Sider: React.FC<SiderProps> = ({ children, collapsed, ...rest }) => {
  return (
    <StyledSider collapsed={collapsed} {...rest}>
      <StyledNav>
        <SideLink
          path="/"
          label={!collapsed ? "" : "Dashboard"}
          icon={<FiPieChart />}
        />
      </StyledNav>
    </StyledSider>
  );
};

export default Sider;
