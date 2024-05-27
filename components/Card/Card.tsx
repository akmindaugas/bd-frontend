import React from 'react'
import styles from "./Card.module.css"


interface QuestionProps {
  question: {
    id:  String; 
    title:  String;
    content: String;
    photoUrl: String;
    userId: String;
    createdAt: Date;
    updatedAt: Date;
    votesUp:  Number;
    votesDown: Number;
  };
}

const Card: React.FC<QuestionProps> = ({ question }) => {
  // del FunctionalComponent?
  return (
    <div className={styles.container}>
      <div className={styles.cardTitle}>
        <h3>{question.title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{question.content}</p>
      </div>
    <div className={styles.cardImg}>
<img src={question.photoUrl}> </img>
    </div>
    <div className={styles.cardVotes}>
      <div>
        <p>{String(question.votesUp)}</p>
      </div>
      <div>
        <p>{String(question.votesDown)}</p>
      </div>

    </div>
    </div>
  );
};

export default Card;
