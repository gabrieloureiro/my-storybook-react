import React from "react";
import Container from "./components/Container";
import { FiUser, FiPieChart } from "react-icons/fi";
import "./reset.css";

function App() {
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
    <Container
      links={links}
      title={links.forEach((item) => {
        return item.label;
      })}
    >
      <div className="teste">Teste</div>
    </Container>
  );
}

export default App;
