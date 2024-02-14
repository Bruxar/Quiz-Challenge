import React from 'react';
import { useNavigate } from 'react-router-dom';

const Score = ({ score, totalQuestions }) => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  // Calcula el porcentaje de respuestas correctas
  const percentage = (score / totalQuestions) * 100;

  // Define los rangos y los mensajes correspondientes
  let message = '';
  if (percentage <= 40) {
    message = "Maybe this isn't your forte!";
  } else if (percentage <= 80) {
    message = "You've been hitting the books, huh?";
  } else {
    message = "You're the professor now!";
  }

  // Función para manejar el reinicio del quiz
  const handleRestart = () => {
    navigate('/Quiz-Challenge/'); // Navega a la página de inicio del quiz
  };

  return (
    <div className='contenedor container-score'>
      <div className='score'>
        <h1>Score</h1>
        <p><span>{score}</span> / {totalQuestions}</p>
      </div>
      <p className='message-score'>{message}</p>
      {/* Usa la función navigate para reiniciar el quiz */}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Score;
