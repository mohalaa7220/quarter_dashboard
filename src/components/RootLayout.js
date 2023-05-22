import React, { useState } from "react";
// import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import SidebarHome from "../components/Sidebar/sidebar";
import { Container } from "react-bootstrap";
import Header from "./Header";
const RootLayout = ({ children }) => {
  const [close, setClose] = useState(false);
  return (
    <Container fluid>
      <SidebarHome close={close} />
      <main>
        <Header close={close} setClose={setClose} />
        <Outlet />
        {children}
      </main>
    </Container>
  );
};

export default RootLayout;
