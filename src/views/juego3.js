import React, { useState, useEffect } from 'react';
import Tarjeta from '../componentes/Tarjeta';
import Puntuacion from '../componentes/putua';

const objetosBasura = [
  { id: 1, nombre: 'Botella de plástico', reciclable: true, img: '/images/botella_plastico.png' },
  { id: 2, nombre: 'Papel', reciclable: true, img: '/images/papel.png' },
  { id: 3, nombre: 'Lata de aluminio', reciclable: true, img: '/images/lata_aluminio.png' },
  { id: 4, nombre: 'Pañal', reciclable: false, img: '/images/panal.png' },
  { id: 5, nombre: 'Envoltura de plástico', reciclable: false, img: '/images/envoltura_plastico.png' },
  { id: 6, nombre: 'Cáscaras de frutas', reciclable: false, img: '/images/cascaras_frutas.png' },
];

function App() {
  const [cartas, setCartas] = useState([]);
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);
  const [puntuacion, setPuntuacion] = useState(0);
  const [movimientos, setMovimientos] = useState(0);

  useEffect(() => {
    inicializarCartas();
  }, []);

  const inicializarCartas = () => {
    // Duplicamos y mezclamos las cartas
    const cartasDuplicadas = [...objetosBasura, ...objetosBasura].sort(() => Math.random() - 0.5);
    setCartas(cartasDuplicadas.map(carta => ({ ...carta, volteada: false, emparejada: false })));
  };

  const manejarSeleccionCarta = (index) => {
    const nuevaCartas = [...cartas];
    nuevaCartas[index].volteada = true;
    setCartas(nuevaCartas);

    if (cartaSeleccionada === null) {
      setCartaSeleccionada(index);
    } else {
      verificarEmparejamiento(cartaSeleccionada, index);
    }
  };

  const verificarEmparejamiento = (index1, index2) => {
    const nuevaCartas = [...cartas];
    if (nuevaCartas[index1].nombre === nuevaCartas[index2].nombre) {
      nuevaCartas[index1].emparejada = true;
      nuevaCartas[index2].emparejada = true;
      setPuntuacion(puntuacion + 10);
    } else {
      setTimeout(() => {
        nuevaCartas[index1].volteada = false;
        nuevaCartas[index2].volteada = false;
        setCartas(nuevaCartas);
      }, 1000);
    }
    setCartaSeleccionada(null);
    setMovimientos(movimientos + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Memoria del Reciclaje</h1>
      <Puntuacion puntuacion={puntuacion} movimientos={movimientos} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 150px)', gap: '10px', justifyContent: 'center' }}>
        {cartas.map((carta, index) => (
          <Tarjeta
            key={index}
            carta={carta}
            manejarSeleccion={() => manejarSeleccionCarta(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
