import React from 'react';

function Puntuacion({ puntuacion, movimientos }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Puntuación: {puntuacion}</p>
      <p>Movimientos: {movimientos}</p>
    </div>
  );
}

export default Puntuacion;
