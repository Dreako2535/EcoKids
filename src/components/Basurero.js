import React from 'react';

function ContenedorBasura({ tipo, color, manejarBasuraClasificada }) {
  const manejarSoltar = (e) => {
    e.preventDefault();
    manejarBasuraClasificada(tipo);
  };

  const permitirSoltar = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={manejarSoltar}
      onDragOver={permitirSoltar}
      style={{
        width: '150px',
        height: '150px',
        margin: '0 10px',
        backgroundColor: color,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
      }}
    >
      {tipo}
    </div>
  );
}

export default ContenedorBasura;
