import React from 'react';

function Temporizador({ tiempoRestante }) {
  const containerStyle = {
    marginBottom: '20px',
    backgroundColor: '#ADD8E6', // Color de fondo
    color: '#333', // Color del texto
    padding: '15px',
    borderRadius: '10px',
    border: '2px solid #00BFFF', // Borde azul
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)', // Sombreado
    textAlign: 'center', // Alineación del texto
  };

  const textStyle = {
    fontSize: '24px', // Tamaño de la fuente
    fontWeight: 'bold', // Negrita
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>Tiempo restante: {tiempoRestante}s</p>
    </div>
  );
}

export default Temporizador;

