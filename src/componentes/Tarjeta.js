import React from 'react';

function Tarjeta({ carta, manejarSeleccion }) {
  return (
    <div
      onClick={manejarSeleccion}
      style={{
        width: '150px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #ddd',
        borderRadius: '10px',
        backgroundColor: carta.volteada || carta.emparejada ? '#fff' : '#ccc',
        cursor: 'pointer',
      }}
    >
      {carta.volteada || carta.emparejada ? (
        <img
          src={carta.img}
          alt={carta.nombre}
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}
        />
      ) : null}
    </div>
  );
}

export default Tarjeta;
