import React, { useState, useEffect } from 'react';
import ObjetoReciclable from '../components/objetoReciclabe';
import Temporizador from '../components/temporizador';
import Puntuacion from '../components/puntuacion';
import Botella from '../imgenes/botella-plastica.png'
import Papel from '../imgenes/papel.png'
import Lata from '../imgenes/lata.png'
import Pañal from '../imgenes/Pañal.png'
import Envoltura from '../imgenes/Envoltura.png'
import Cascara from '../imgenes/cascara.png'


const objetosBasura = [
  { id: 1, nombre: 'Botella de plástico', reciclable: true, img: Botella },
  { id: 2, nombre: 'Papel', reciclable: false, img: Papel },
  { id: 3, nombre: 'Lata de aluminio', reciclable: true, img: Lata },
  { id: 4, nombre: 'Pañal', reciclable: false, img: Pañal },
  { id: 5, nombre: 'Envoltura de plástico', reciclable: false, img: Envoltura },
  { id: 6, nombre: 'Cáscaras de frutas', reciclable: false, img: Cascara },
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
      <h1>Encuentra el Reciduo Reciclable</h1>
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
