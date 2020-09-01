import { HTMLAttributes } from "react";
import styled from "styled-components";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
}

const Layout = styled.section<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasSider ? "column" : "row")};
  flex: auto;
  min-height: 0;
  max-height: 100vh;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  background: #fff;
`;

export default Layout;
