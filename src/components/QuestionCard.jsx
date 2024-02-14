import React from "react";

const QuestionCard = ({ question, options, handleAnswer, correctAnswer }) => {
    return (
        <div className="card">
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => {
                    console.log(correctAnswer);
                    const isCorrect = option === correctAnswer;
                    console.log(isCorrect);
                    const buttonClass = isCorrect ? 'boton-verde' : 'boton-normal';
                    return (
                        <li key={index}>
                            <button 
                                className={buttonClass}
                                onClick={() => handleAnswer(option)}
                            >
                                {option}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuestionCard;
