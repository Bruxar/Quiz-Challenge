import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php';

export const fetchQuestions = async (amount = 10, category = 15, difficulty = 'medium', type = 'multiple') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        amount,
        category,
        difficulty,
        type
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching questions from API');
  }
};

// Agregar una función para esperar un tiempo antes de realizar la siguiente solicitud
export const fetchQuestionsWithDelay = async (amount = 10, category = 15, difficulty = 'medium', type = 'multiple', delay = 0) => {
  try {
    // Esperar el tiempo especificado antes de realizar la solicitud
    await new Promise(resolve => setTimeout(resolve, delay));

    // Realizar la solicitud de preguntas después del retraso
    return fetchQuestions(amount, category, difficulty, type);
  } catch (error) {
    throw new Error('Error fetching questions with delay from API');
  }
};
