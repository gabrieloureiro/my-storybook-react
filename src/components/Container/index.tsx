import React from "react";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sider from "./Sider";

export const Container: React.FC = ({ children }) => {
  return (
    <Layout hasSider>
      <Header />
      <Sider />
      <Layout>
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
