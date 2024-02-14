// src/api/triviaApi.js
import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching questions from API');
  }
};

// Agregar una función para esperar un tiempo antes de realizar la siguiente solicitud
export const fetchQuestionsWithDelay = async (delay) => {
  try {
    // Esperar el tiempo especificado antes de realizar la solicitud
    await new Promise(resolve => setTimeout(resolve, delay));

    // Realizar la solicitud de preguntas después del retraso
    return fetchQuestions();
  } catch (error) {
    throw new Error('Error fetching questions with delay from API');
  }
};
