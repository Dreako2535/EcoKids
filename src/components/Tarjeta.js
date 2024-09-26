import React from 'react';

function Tarjeta({ carta, manejarSeleccion }) {
  const cardStyle = {
    width: '150px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ddd',
    borderRadius: '10px',
    backgroundColor: carta.volteada || carta.emparejada ? '#fff' : '#ccc',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s', // Efecto de transición
    boxShadow: carta.volteada || carta.emparejada ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // Sombra cuando está volteada o emparejada
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)'; // Efecto de escalado al pasar el ratón
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)'; // Regresar al tamaño original
  };

  return (
    <div
      onClick={manejarSeleccion}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
