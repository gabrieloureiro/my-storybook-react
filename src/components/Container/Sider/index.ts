import { HTMLAttributes } from "react";
import styled from "styled-components";

interface SiderProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

const Sider = styled.aside<SiderProps>`
  overflow: hidden;
  flex: 0 0 auto;
  width: ${(props) => (props.collapsed ? "260px" : "96px")};
  height: 100vh;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default Sider;
