import React from 'react';

const Score = ({ score, totalQuestions }) => {
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

  return (
    <div className='contenedor container-score'>
      <div className='score'>
        <h1>Score</h1>
        <p><span>{score}</span> / {totalQuestions}</p>
      </div>
      <p className='message-score'>{message}</p>
      <a href="/Quiz-Challenge/">Restart</a>
    </div>
  );
};

export default Score;
