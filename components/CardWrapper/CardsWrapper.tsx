import React from 'react'
import styles from "./CardWrapper.module.css"
import Card from '../Card/Card'
import { QuestionType } from '../../types/question'

type CardWrapper = {
  questions: QuestionType[]; 
}

const CardsWrapper = ({questions}: CardWrapper) => {

  const sortedQuestions = questions.slice().sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });


  return (
    <div className={styles.container} >
      {questions.map((question)=>(
<Card
key={question.id}
id= {question.id} 
title= {question.title}
content= {question.content}
photoUrl= {question.photoUrl}
userId= {question.userId}
createdAt= {question.createdAt}
updatedAt={question.updatedAt}
votesUp={question.votesUp}
votesDown={question.votesDown}
/>
      ))}
      </div>

  )}; 




export default CardsWrapper;

