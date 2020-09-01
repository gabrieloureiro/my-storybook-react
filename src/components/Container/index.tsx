import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Sider from "./Sider";
import { SideLinkProps } from "./SideLink";
import Routes from "../../routes/Routes";

interface ContainerProps {
  title?: string;
  links: SideLinkProps[];
}

const Container: React.FC<ContainerProps> = ({ title, links, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout hasSider>
        <Header handleCollpase={() => setCollapsed(!collapsed)} />
        <Layout>
          <Sider links={links} collapsed={collapsed} />
          <Content>
            <Routes>{children}</Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Container;
