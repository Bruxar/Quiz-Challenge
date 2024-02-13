import './app.scss'
import React from 'react';
import Quiz from './pages/Quiz';

function App() {

  return (
    <div className='contenedor contenedor-pregunta'>
      <h1>Trivia APP</h1>
      <Quiz />
    </div>
  )
}

export default App
