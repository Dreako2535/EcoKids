import React from 'react';

function Puntuacion({ puntuacion, movimientos }) {
  const containerStyle = {
    marginBottom: '20px',
    backgroundColor: '#FFB6C1', // Color de fondo
    color: '#333', // Color del texto
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #FF69B4', // Borde rosa
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)', // Sombreado
    textAlign: 'center', // Alineación del texto
  };

  const paragraphStyle = {
    margin: '5px 0', // Espaciado entre los párrafos
    fontSize: '20px', // Tamaño de la fuente
    fontWeight: 'bold', // Negrita
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>Puntuación: {puntuacion}</p>
      <p style={paragraphStyle}>Movimientos: {movimientos}</p>
    </div>
  );
}

export default Puntuacion;
