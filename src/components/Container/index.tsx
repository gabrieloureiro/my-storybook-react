import React, { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sider from "./Sider";
import { FiPieChart, FiUser } from "react-icons/fi";

export const Container: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    {
      path: "/",
      label: "Dashboard",
      icon: <FiPieChart />,
    },
    {
      path: "/clients",
      label: "Clients",
      icon: <FiUser />,
    },
  ];

  return (
    <BrowserRouter>
      <Layout hasSider>
        <Header handleCollpase={() => setCollapsed(!collapsed)} />
        <Sider links={links} collapsed={collapsed} />
        <Layout>
          {children}
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};
