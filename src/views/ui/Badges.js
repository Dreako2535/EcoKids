import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Blog from "../../components/dashboard/Blog";

const Badges = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  
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
    return <div>Cargando artículos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h5 className="mb-3" style={{ marginTop: "40px" }}>Artículos sobre Reciclaje</h5>
      <Row style={{ marginTop: "20px" }}>
        {articulos.map((articulo, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={articulo.urlToImage || "https://via.placeholder.com/300"} 
              title={articulo.title}
              subtitle={`${new Date(articulo.publishedAt).toLocaleDateString()} - ${articulo.source.name}`} 
              text={articulo.description || "Descripción no disponible"} 
              color="primary" 
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Badges;
