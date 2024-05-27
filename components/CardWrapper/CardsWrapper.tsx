import React from 'react'
import styles from "./CardWrapper.module.css"
import Card from '../Card/Card'
import { QuestionType } from '../../types/question'

interface CardWrapperProps {
  questions: { [key: string]: any }[]; 
}

const CardsWrapper = (props: CardWrapperProps) => {
  return (
    <div>CardsWrapper</div>
  )}; 


interface  QuestionListProps {
  questions: { [key: string]: any }[]; 
}

const CardWrapper: React.FC<CardWrapperProps> = ({ questions }) => {
 
  const sortedQuestions = questions.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
});

return (
  <div className={styles.cardsWrapper}>
    {sortedQuestions.map((question: QuestionType) => (
      // Stringas, bet priima kaip numeri. Sprendimas?
      <Card key={question.id} question={question} /> 
    ))}
  </div>
);
};

export default CardsWrapper;

