import React from 'react';

function ObjetoReciclable({ basura, manejarSeleccion }) {
  const manejarClick = () => {
    manejarSeleccion(basura.reciclable);
  };

  return (
    <div
      onClick={manejarClick}
      style={{
        cursor: 'pointer',
        padding: '10px',
        border: '2px solid #ddd',
        borderRadius: '10px',
        display: 'inline-block',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s', // Transición para suavizar el efecto
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra sutil
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; // Efecto de escalado al pasar el ratón
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'; // Sombra más pronunciada
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Regresar al tamaño original
        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Sombra normal
      }}
    >
      <img
        src={basura.img}
        alt={basura.nombre}
        style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '5px' }} // Espacio debajo de la imagen
      />
      <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>{basura.nombre}</p> {/* Estilo para el nombre */}
    </div>
  );
}

export default ObjetoReciclable;
