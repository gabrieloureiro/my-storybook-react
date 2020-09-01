import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sider from "./Sider";

export const Container: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout hasSider>
        <Header
          handleCollpase={() => setCollapsed(!collapsed)}
          title="Dashboard"
        />
        <Sider collapsed={collapsed} />
        <Layout>
          {children}
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
