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
            setQuestions(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

    useEffect(() => {
        console.log('Fetching trivia data...')
        getTriviaData();
    }, []);
    

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correct_answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : questions.length > 0 && currentQuestion < questions.length ? (
                <div>
                    <QuestionCard
                        question={questions[currentQuestion].question}
                        options={[
                            ...questions[currentQuestion].incorrect_answers,
                            questions[currentQuestion].correct_answer,
                        ]}
                        handleAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                        setSelectedAnswer={setSelectedAnswer}
                    />
                    <p>Score: {score}</p>
                </div>
            ) : (
                <p>No questions available</p>
            )}
        </div>
    );
};

export default Quiz;
