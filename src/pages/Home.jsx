import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [type, setType] = useState('');

    const handleStartQuiz = () => {
        // Verificar si el número de preguntas está dentro del rango permitido
        if (numberOfQuestions < 1 || numberOfQuestions > 10) {
            alert('Please enter a number between 1 and 10 for the number of questions.');
            return;
        }

        // Validar los campos restantes
        if (!category || !difficulty || !type) {
            alert('Please complete all fields');
            return;
        }

        // Redirigir a la página de la trivia con los parámetros seleccionados
        navigate(`/quiz?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`);
    };

    return (
        <div className="contenedor home-container">
            <img src="/quiz.png" alt="quiz icon" />
            <form>
                <div className='elem-group'>
                    <label htmlFor="numberOfQuestions">Number of Questions:</label>
                    <input
                        min={1}
                        max={10}
                        type="number"
                        id="numberOfQuestions"
                        value={numberOfQuestions}
                        onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                    />
                </div>
                <div className='elem-group'>
                    <label htmlFor="category">Category:</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        <option value="9">General Knowledge</option>
                        <option value="11">Films</option>
                        <option value="12">Music</option>
                        <option value="15">Video Games</option>
                        <option value="17">Science</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="23">History</option>
                        <option value="27">Animals</option>
                        <option value="32">Cartoon/Animations</option>
                    </select>
                </div>
                <div className='elem-group'>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="">Select a Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className='elem-group'>
                    <label htmlFor="type">Type of Question:</label>
                    <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Select a Type</option>
                        <option value="multiple">Multiple</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>
                <button type="button" className='boton-verde-estatico' onClick={handleStartQuiz}>Start!</button>
            </form>
        </div>
    );
};

export default Home;
