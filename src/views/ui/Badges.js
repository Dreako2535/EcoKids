import React, { useEffect, useState } from "react";
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Blog from "../../components/dashboard/Blog"; // Asegúrate de que la ruta a Blog.js sea correcta

const Badges = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false); // Estado para controlar el modal
  const [selectedArticulo, setSelectedArticulo] = useState(null); // Estado para almacenar el artículo seleccionado

  // Clave de API de NewsAPI
  const apiKey = "8c6e347bf60d427abdd7dc01be5f5aa6";

  // Función para abrir/cerrar el modal
  const toggleModal = () => setModal(!modal);

  // Función para manejar el botón "Leer más"
  const handleReadMore = (articulo) => {
    setSelectedArticulo(articulo); // Almacena el artículo seleccionado
    toggleModal(); // Abre el modal
  };

  useEffect(() => {
    const obtenerArticulos = async () => {
      try {
        const respuesta = await fetch(
          `https://newsapi.org/v2/everything?q=reciclaje&language=es&apiKey=${apiKey}`
        );
        if (!respuesta.ok) {
          throw new Error("Error al obtener los artículos");
        }
        const datos = await respuesta.json();
        setArticulos(datos.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false); // Termina el estado de carga
      }
    };

    obtenerArticulos();
  }, [apiKey]);

  if (cargando) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Cargando artículos...</div>;
  }

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
  }

  return (
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <h5
        className="mb-3"
        style={{
          marginTop: "40px",
          fontSize: "28px",
          color: "#fff", // Cambiar el color del texto a blanco
          textAlign: "center",
          backgroundColor: "#007bff", // Color de fondo del título
          padding: "10px 20px", // Espaciado alrededor del texto
          borderRadius: "8px", // Bordes redondeados para el fondo
        }}
      >
        Artículos sobre Reciclaje
      </h5>

      {/* Lista de artículos */}
      <Row style={{ marginTop: "20px" }} className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {articulos.map((articulo, index) => (
          <Col sm="6" lg="6" xl="3" key={index} style={{ display: "flex" }}>
            <div
              className="card h-100"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={articulo.urlToImage || "https://via.placeholder.com/300"}
                alt="Artículo"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <h5 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>{articulo.title}</h5>
              <p
                style={{
                  flex: "1 0 auto",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {articulo.description || "Descripción no disponible"}
              </p>
              <Button
                color="link"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() => handleReadMore(articulo)}
              >
                Leer más
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal para mostrar la información completa */}
      {selectedArticulo && (
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>{selectedArticulo.title}</ModalHeader>
          <ModalBody>
            <img
              src={selectedArticulo.urlToImage || "https://via.placeholder.com/600"}
              alt="Artículo"
              style={{ width: "100%", height: "auto", marginBottom: "15px", objectFit: "cover" }}
            />
            <p>
              <strong>Fecha de publicación:</strong> {new Date(selectedArticulo.publishedAt).toLocaleDateString()}
            </p>
            <p>
              <strong>Fuente:</strong> {selectedArticulo.source.name}
            </p>
            <p>
              <strong>Descripción:</strong> {selectedArticulo.description || "Descripción no disponible"}
            </p>
            <p>
              <strong>Contenido:</strong> {selectedArticulo.content || "Contenido no disponible"}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default Badges;
