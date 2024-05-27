import React from 'react'
import styles from "./Card.module.css"
import Link from 'next/link';

type  QuestionProps = {
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

const Card = ({ id, title, content, photoUrl, userId,createdAt, 
  updatedAt,votesUp, votesDown}: QuestionProps) => {
  // del FunctionalComponent?
  return (
    <Link href={`/question/${id}`}  className={styles.container}>
      <div className={styles.cardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
    <div className={styles.cardImg}>
<img src={photoUrl}> </img>
    </div>
    <div className={styles.cardVotes}>
      <div>
        <p>{String(votesUp)}</p>
      </div>
      <div>
        <p>{String(votesDown)}</p>
      </div>

    </div>
    </Link>
  );
};

export default Card;
