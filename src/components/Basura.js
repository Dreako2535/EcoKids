import React from 'react';

function BasuraItem({ basura }) {
  const manejarArrastrar = (e) => {
    e.dataTransfer.setData('text', basura.tipo);
  };

  return (
    <div
      draggable
      onDragStart={manejarArrastrar}
      style={{
        padding: '10px',
        margin: '20px',
        display: 'inline-block',
        cursor: 'grab',
      }}
    >
      <img
        src={basura.img}
        alt={basura.nombre}
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
    </div>
  );
}

export default BasuraItem;

