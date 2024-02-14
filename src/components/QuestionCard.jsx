import React from "react";

const questionCard = ({question, options, handleAnswer}) => {
    return (
        <div className="card">
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button className="boton-normal" onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default questionCard;