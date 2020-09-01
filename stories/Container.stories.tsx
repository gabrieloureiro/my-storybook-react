import React from "react";
import { Container } from "../src";
import { FiPieChart, FiUser } from "react-icons/fi";

export default {
  title: "components/Container",
  component: Container,
};

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

export const Default = () => (
  <Container links={links} footer="jhdsfbsdkjfnsdkjf">
    DIGHIOSHNJGDOASIGSIOHFOSIDGOI
  </Container>
);
