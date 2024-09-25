import React, { useState, useEffect } from 'react';
import ContenedorBasura from '../components/Basurero';
import BasuraItem from '../components/Basura';
import Temporizador from '../components/temporizador';
import Puntuacion from '../components/puntuacion';
import Botella from '../imgenes/botella-plastica.png'
import Lata from '../imgenes/lata.png'
import Papel from '../imgenes/papel.png'
import Envoltura from '../imgenes/Envoltura.png'
import Pañal from '../imgenes/Pañal.png'
import Cascara from '../imgenes/cascara.png'
import Restos from '../imgenes/restos.png'
import Cablanca from '../imgenes/cablanca.png'
import Caverde  from '../imgenes/caverde.png'
import Canegra from '../imgenes/canegra.png'


const imagenesContenedores = {
  'Reciclables': Cablanca,
  'No Reciclables': Canegra,
  'Orgánicos': Caverde,
};


const tiposBasura = [
  { tipo: 'Reciclables' },
  { tipo: 'No Reciclables' },
  { tipo: 'Orgánicos' },
];

  const objetosBasura = [
    { id: 1, nombre: 'Botella de plástico', tipo: 'Reciclables', img: Botella },
    { id: 2, nombre: 'Lata de aluminio', tipo: 'Reciclables', img: Lata },
    { id: 3, nombre: 'Papel', tipo: 'NO Reciclables', img: Papel },
    { id: 4, nombre: 'Pañal', tipo: 'No Reciclables', img:  Pañal},
    { id: 5, nombre: 'Envoltura de plástico', tipo: 'No Reciclables', img: Envoltura },
    { id: 6, nombre: 'Cáscaras de frutas', tipo: 'Orgánicos', img: Cascara },
    { id: 7, nombre: 'Restos de comida', tipo: 'Orgánicos', img: Restos },
  ];
  
  function Juego1() {
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
              manejarBasuraClasificada={manejarBasuraClasificada}
            />
          ))}
        </div>
        {basuraAleatoria && <BasuraItem basura={basuraAleatoria} />}
      </div>
    );
  }
  
  export default Juego1;