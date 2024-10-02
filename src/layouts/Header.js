import React from "react";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
// import Logo from "../assets/images/logos/EcoKidslogo.png";
import Logo from "./Logo";

import { ReactComponent as LogoWhite } from "../assets/images/logos/materialprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const navigate = useNavigate();

  // Nombre del usuario (puede venir de un prop o de un estado global)
  const userName = "Nixon"; // Ejemplo: Este valor debería venir de la sesión o estado global

  return (
    <Navbar color="success" dark expand="md" className="fix-header" style={{ position: "relative" }}>
      <div className="d-flex align-items-center">
        {/* Logo en la esquina izquierda */}
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <NavbarBrand href="/">
          <LogoWhite className=" d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>

      {/* Título centrado "ECOKIDS" */}
      <div
        className="text-center"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)", // Asegura que el título esté en el centro horizontal
          top: "50%",
          transform: "translate(-50%, -50%)", // Centra también verticalmente en el `Navbar`
          margin: 0,
          fontWeight: "bold",
          color: "#fff", // Letras blancas
          fontSize: "60px",
          letterSpacing: "12px",
          opacity: 0.8
          
        }}
      >
        ECOKIDS
      </div>

      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      {/* Menú desplegable y foto de perfil con nombre del usuario */}
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar></Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent" className="d-flex align-items-center">
            {/* Imagen del perfil del usuario */}
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="50"
              style={{ marginRight: "10px" }}
            />
            {/* Nombre del usuario */}
            <span style={{ color: "#black", fontWeight: "bold", fontSize: "16px", fontstyle:"italic" }}>
              {userName}
            </span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem divider />
            <DropdownItem onClick={() => navigate("/login")}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
