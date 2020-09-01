import React from "react";
import { Switch, Route } from "react-router-dom";
import { FiUser, FiPieChart } from "react-icons/fi";
import Teste from "../pages/Teste";

export const links = [
  {
    path: "/",
    label: "Dashboard",
    icon: <FiPieChart />,
    children: Teste,
  },
  {
    path: "/clients",
    label: "Clientes",
    icon: <FiUser />,
  },
];

const Routes: React.FC = () => {
  return (
    <Switch>
      {links.map((item, index) => {
        return (
          <Route key={index} exact path={item.path} component={item.children} />
        );
      })}
    </Switch>
  );
};

export default Routes;
