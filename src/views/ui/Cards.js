import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border: 1px solid #ccc; /* Añade un borde */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: transform 0.2s; /* Transición suave */
  
  &:hover {
    transform: scale(1.05); /* Efecto de aumento al pasar el mouse */
  }
`;

const Cards = () => {
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const toggle = () => setModal(!modal);

  const handleAgregarForo = () => {
    console.log("Título:", titulo);
    console.log("Contenido:", contenido);
    toggle(); // Cierra el modal
  };

  return (
    <>
      <Row>
        <h5 className="mb-3 mt-3">FOROS</h5>
        <Col md="6" lg="4">
          <StyledCard body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-warning" onClick={toggle}>Agregar Foro</Button>
            </div>
          </StyledCard>
        </Col>
        <Col md="6" lg="4">
          <StyledCard body className="text-center">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger" onClick={toggle}>Agregar Foro</Button>
            </div>
          </StyledCard>
        </Col>
        <Col md="6" lg="4">
          <StyledCard body className="text-end">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-success" onClick={toggle}>Agregar Foro</Button>
            </div>
          </StyledCard>
        </Col>
      </Row>

      {/* Modal para agregar foro */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Foro</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <Input
            type="textarea"
            placeholder="Contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            style={{ marginTop: "10px" }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAgregarForo}>Agregar</Button>
          <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Cards;
