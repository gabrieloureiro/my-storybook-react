import React from "react";
import Container from "./components/Container";
import Routes, { links } from "./routes/Routes";
import "./reset.css";

function App() {
  return (
    <Container links={links}>
      <Routes />
    </Container>
  );
}

export default App;
