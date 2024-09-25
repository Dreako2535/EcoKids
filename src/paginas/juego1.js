import React, { useState, useEffect } from 'react';
import ContenedorBasura from '../componentes/Basurero';
import BasuraItem from '../componentes/Basura';
import Temporizador from '../componentes/temporizador';
import Puntuacion from '../componentes/puntuacion';
import Botella from '../imgenes/botella-plastica.png'
import Lata from '../imgenes/lata.png'

const tiposBasura = [
    { tipo: 'Reciclables', color: 'blue' },
    { tipo: 'No Reciclables', color: 'red' },
    { tipo: 'Orgánicos', color: 'green' },
  ];
  
  const objetosBasura = [
    { id: 1, nombre: 'Botella de plástico', tipo: 'Reciclables', img: Botella },
    { id: 2, nombre: 'Lata de aluminio', tipo: 'Reciclables', img: Lata },
    { id: 3, nombre: 'Papel', tipo: 'Reciclables', img: '/images/papel.png' },
    { id: 4, nombre: 'Pañal', tipo: 'No Reciclables', img: '/images/panal.png' },
    { id: 5, nombre: 'Envoltura de plástico', tipo: 'No Reciclables', img: '/images/envoltura_plastico.png' },
    { id: 6, nombre: 'Cáscaras de frutas', tipo: 'Orgánicos', img: '/images/cascaras_frutas.png' },
    { id: 7, nombre: 'Restos de comida', tipo: 'Orgánicos', img: '/images/restos_comida.png' },
  ];
  
  function App() {
    const [puntuacion, setPuntuacion] = useState(0);
    const [tiempoRestante, setTiempoRestante] = useState(60);
    const [basuraAleatoria, setBasuraAleatoria] = useState(null);
  
    useEffect(() => {
      generarBasuraAleatoria();
      const timer = setInterval(() => {
        setTiempoRestante((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (tiempoRestante === 0) {
        alert(`Juego terminado! Puntuación final: ${puntuacion}`);
        setTiempoRestante(60);
        setPuntuacion(0);
      }
    }, [tiempoRestante]);
  
    const generarBasuraAleatoria = () => {
      const indiceAleatorio = Math.floor(Math.random() * objetosBasura.length);
      setBasuraAleatoria(objetosBasura[indiceAleatorio]);
    };
  
    const manejarBasuraClasificada = (tipoContenedor) => {
      if (basuraAleatoria.tipo === tipoContenedor) {
        setPuntuacion(puntuacion + 10);
      } else {
        setPuntuacion(puntuacion - 5);
      }
      generarBasuraAleatoria();
    };
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Recicla Correctamente</h1>
        <Temporizador tiempoRestante={tiempoRestante} />
        <Puntuacion puntuacion={puntuacion} />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          {tiposBasura.map((contenedor) => (
            <ContenedorBasura
              key={contenedor.tipo}
              tipo={contenedor.tipo}
              color={contenedor.color}
              manejarBasuraClasificada={manejarBasuraClasificada}
            />
          ))}
        </div>
        {basuraAleatoria && <BasuraItem basura={basuraAleatoria} />}
      </div>
    );
  }
  
  export default App;