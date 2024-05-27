import axios from 'axios';

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3020'; 

const api = axios.create({
  baseURL: SERVER_URL,
});

export async function fetchAllQuestions() {
  try {
    const response = await api.get('/questions');
    const questions = response.data;
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
      throw error; 
  }
};

export async function fetchQuestionById() {
  try {
    const response = await api.get('/questions:id');
    const question = response.data;
    return question;
  } catch (error) {
    console.error('Error fetching question:', error);
      throw error; 
  }
};

export async function fetchAllAnswers() {
  try {
    const response = await api.get('/answers');
    const answers = response.data;
    return answers;
  } catch (error) {
    console.error('Error fetching answers:', error);
      throw error; 
  }
};

export async function fetchAnswerById() {
  try {
    const response = await api.get('/answers:id');
    const answer = response.data;
    return answer;
  } catch (error) {
    console.error('Error fetching answer:', error);
      throw error; 
  }
};

export async function fetchUsers() {
  try {
    const response = await api.get('/users');
    const users = response.data;
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function fetchUserById() {
  try {
    const response = await api.get('/users/:id');
    const user = response.data;
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

