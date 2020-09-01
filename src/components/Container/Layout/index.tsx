import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
}

const Layout = styled.section<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => (props.hasSider ? "row" : "column")};
  flex: auto;
  min-height: 0;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
`;

// const Layout: React.FC<LayoutProps> = ({ hasSider, children }) => {
//   return <StyledLayout hasSider={hasSider}>{children}</StyledLayout>;
// };

export default Layout;
