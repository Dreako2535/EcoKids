import React from 'react';
import Cablanca from '../imgenes/cablanca.png'
import Caverde  from '../imgenes/caverde.png'
import Canegra from '../imgenes/canegra.png'

function ContenedorBasura({ tipo, manejarBasuraClasificada }) {
  const manejarSoltar = (e) => {
    e.preventDefault();
    manejarBasuraClasificada(tipo);
  };

  const permitirSoltar = (e) => {
    e.preventDefault();
  };

  // Mapa de imágenes por tipo
  const imagenesContenedores = {
    'Reciclables': Cablanca,
    'No Reciclables': Canegra,
    'Orgánicos': Caverde,
  };

  return (
    <div
      onDrop={manejarSoltar}
      onDragOver={permitirSoltar}
      style={{
        width: '150px',
        height: '150px',
        margin: '0 10px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', 
      }}
    >
      <img
        src={imagenesContenedores[tipo]}
        alt={tipo}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '10px',
        }}
      />
    </div>
  );
}

export default ContenedorBasura;
