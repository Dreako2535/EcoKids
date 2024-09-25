import React, { useState, useEffect } from 'react';
import ObjetoReciclable from '../componentes/objetoReciclabe';
import Temporizador from '../componentes/temporizador';
import Puntuacion from '../componentes/puntuacion';

const objetosBasura = [
  { id: 1, nombre: 'Botella de plástico', reciclable: true, img: '/images/botella_plastico.png' },
  { id: 2, nombre: 'Papel', reciclable: true, img: '/images/papel.png' },
  { id: 3, nombre: 'Lata de aluminio', reciclable: true, img: '/images/lata_aluminio.png' },
  { id: 4, nombre: 'Pañal', reciclable: false, img: '/images/panal.png' },
  { id: 5, nombre: 'Envoltura de plástico', reciclable: false, img: '/images/envoltura_plastico.png' },
  { id: 6, nombre: 'Cáscaras de frutas', reciclable: false, img: '/images/cascaras_frutas.png' },
];

function App() {
  const [puntuacion, setPuntuacion] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(30);
  const [basurasMostradas, setBasurasMostradas] = useState([]);

  useEffect(() => {
    generarBasurasAleatorias();
    const timer = setInterval(() => {
      setTiempoRestante((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tiempoRestante === 0) {
      alert(`Juego terminado! Puntuación final: ${puntuacion}`);
      setTiempoRestante(30);
      setPuntuacion(0);
      generarBasurasAleatorias();
    }
  }, [tiempoRestante]);

  const generarBasurasAleatorias = () => {
    const nuevasBasuras = [];
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * objetosBasura.length);
      nuevasBasuras.push(objetosBasura[indiceAleatorio]);
    }
    setBasurasMostradas(nuevasBasuras);
  };

  const manejarSeleccion = (esReciclable) => {
    if (esReciclable) {
      setPuntuacion(puntuacion + 10);
    } else {
      setPuntuacion(puntuacion - 5);
    }
    generarBasurasAleatorias();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Encuentra el Objeto Reciclable</h1>
      <Temporizador tiempoRestante={tiempoRestante} />
      <Puntuacion puntuacion={puntuacion} />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {basurasMostradas.map((basura) => (
          <ObjetoReciclable
            key={basura.id}
            basura={basura}
            manejarSeleccion={manejarSeleccion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
