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
      }}
    >
      <img
        src={basura.img}
        alt={basura.nombre}
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <p>{basura.nombre}</p>
    </div>
  );
}

export default ObjetoReciclable;
