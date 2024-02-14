import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import { fetchQuestionsWithDelay } from '../api/triviaApi';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);

    async function getTriviaData() {
        try {
            const data = await fetchQuestionsWithDelay(100);
            setQuestions(data.results.map(question => ({
                ...question,
                question: removeCharacters(question.question),
                options: shuffleArray([
                    ...question.incorrect_answers,
                    question.correct_answer,
                ]),
            })));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

    useEffect(() => {
        getTriviaData();
    }, []);
    
    const shuffleArray = (array) => {
        // Creamos una copia del array para evitar modificar el original
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
    };

    const removeCharacters = (question) => {
        return question
            .replace(/(&quot;)/g, '"')
            .replace(/(&rsquo;)/g, "'")
            .replace(/(&#039;)/g, "'")
            .replace(/(&amp;)/g, "&");
    };

    return (
        <div className='contenedor contenedor-pregunta'>
            {loading ? (
                <p>Loading...</p>
            ) : questions.length > 0 && currentQuestion < questions.length ? (
                <div>
                    <QuestionCard
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        handleAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                        setSelectedAnswer={setSelectedAnswer}
                    />
                </div>
            ) : (
                <p>Score: {score}</p>
            )}
        </div>
    );
};

export default Quiz;
