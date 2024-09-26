import React from 'react';

function Puntuacion({ puntuacion }) {
  const style = {
    fontSize: '24px',
    marginBottom: '20px',
    backgroundColor: '#FFB6C1', // Color de fondo
    color: '#333', // Color del texto
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #FF69B4', // Borde rosa
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)', // Sombreado
    textAlign: 'center', // Alineación del texto
  };

  return (
    <div style={style}>
      Puntuación: {puntuacion}
    </div>
  );
}

export default Puntuacion;
