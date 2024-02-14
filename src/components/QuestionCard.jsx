import React from "react";

const QuestionCard = ({ question, options, handleAnswer, selectedAnswer, correctAnswer, currentQuestion, totalQuestions }) => {
    const isAnswerSelected = selectedAnswer !== '';
  
    return (
        <div className="card">

            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => {
                    const isCorrect = option === correctAnswer;
                    const isSelected = option === selectedAnswer;
                    let buttonClass = 'boton-normal';
                    if (isSelected) {
                        buttonClass = isCorrect ? 'boton-verde' : 'boton-rojo';
                    }
                    return (
                        <li key={index}>
                            <button 
                                className={buttonClass}
                                onClick={() => handleAnswer(option)}
                                disabled={isAnswerSelected} // Deshabilitar el botón si ya se ha seleccionado una respuesta
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <p className="question-index">{currentQuestion + 1} / {totalQuestions}</p>
        </div>
    );
};

export default QuestionCard;
