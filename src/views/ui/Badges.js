import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Blog from "../../components/dashboard/Blog";

const Badges = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Usa tu clave de API de NewsAPI
  const apiKey = "8c6e347bf60d427abdd7dc01be5f5aa6"; 

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
        setCargando(false); 
      }
    };

    obtenerArticulos();
  }, [apiKey]);

  
  if (cargando) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando artículos...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>;
  }

  return (
    <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
      <h5 className="mb-3" 
          style={{ 
            marginTop: "40px", 
            fontSize: "28px", 
            color: "#fff", // Cambiar el color del texto a blanco
            textAlign: "center", 
            backgroundColor: "#007bff", // Color de fondo del título
            padding: "10px 20px", // Espaciado alrededor del texto
            borderRadius: "8px" // Bordes redondeados para el fondo
          }}>
        Artículos sobre Reciclaje
      </h5>
      <Row style={{ marginTop: "20px" }}>
        {articulos.map((articulo, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={articulo.urlToImage || "https://via.placeholder.com/300"} // Imagen del artículo o imagen de reserva
              title={articulo.title} // Título del artículo
              subtitle={`${new Date(articulo.publishedAt).toLocaleDateString()} - ${articulo.source.name}`} // Fecha y fuente
              text={articulo.description || "Descripción no disponible"} // Descripción del artículo
              color="primary" // Color del botón
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Badges;
