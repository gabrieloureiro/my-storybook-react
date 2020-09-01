import React, { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sider from "./Sider";
import { SideLinkProps } from "./SideLink";

interface ContainerProps {
  title?: string;
  footer?: string;
  links: SideLinkProps[];
}

export const Container: React.FC<ContainerProps> = ({
  title,
  footer,
  links,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout hasSider>
        <Header handleCollpase={() => setCollapsed(!collapsed)}>{title}</Header>
        <Layout>
          <Sider links={links} collapsed={collapsed} />
          {children}
          <Footer>{footer}</Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
