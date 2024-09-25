import React from 'react';

function Temporizador({ tiempoRestante }) {
  return (
    <div style={{ fontSize: '24px', marginBottom: '20px' }}>
      Tiempo restante: {tiempoRestante}s
    </div>
  );
}

export default Temporizador;
