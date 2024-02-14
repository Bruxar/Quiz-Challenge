import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuestionsWithDelay } from '../api/triviaApi';
import { useLocation } from 'react-router-dom';

import QuestionCard from '../components/QuestionCard';
import Score from '../components/Score';

const Quiz = () => {
    const location = useLocation();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [totalQuestions, setTotalQuestions] = useState(0);
    
    async function getTriviaData() {
        try {
            const searchParams = new URLSearchParams(location.search);
            const amount = searchParams.get('amount') || 5; // Valor predeterminado de 5 preguntas
            setTotalQuestions(amount);
            const category = searchParams.get('category');
            const difficulty = searchParams.get('difficulty');
            const type = searchParams.get('type');

            const data = await fetchQuestionsWithDelay(amount, category, difficulty, type);
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
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const handleAnswer = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        if (selectedOption === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer('');
        }, 1000);
    };

    const removeCharacters = (text) => {
        return text
            .replace(/(&eacute;)/g, 'é')
            .replace(/(&quot;)/g, '"')
            .replace(/(&rsquo;)/g, "'")
            .replace(/(&#039;)/g, "'")
            .replace(/(&amp;)/g, "&");
    };

    return (
        <div className='contenedor contenedor-pregunta'>
            {loading ? (
                <div className="loader"></div>
            ) : questions.length > 0 && currentQuestion < questions.length ? (
                <div>
                    <QuestionCard
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        handleAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                        correctAnswer={questions[currentQuestion].correct_answer}
                        currentQuestion={currentQuestion}
                        totalQuestions={totalQuestions}
                    />
                </div>
            ) : (
                <Score 
                    score={score}
                    totalQuestions={totalQuestions}
                />
            )}
        </div>
    );
};

export default Quiz;
