import React from 'react'
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "./ForumPage/Forum.module.css"
import CardWrapper from '../components/CardWrapper/CardsWrapper'

const Index = ({ questions }) => {



  
  return (


    <PageTemplate>

       <div className={styles.container}>ForumPage
       
       <h1>Forum_questions</h1>
       <CardWrapper data={questions} sortBy="createdAt" />
       </div>


    </PageTemplate>
   
  )
}

// ===========================
// forum.tsx
import React, { useState, useEffect } from "react";
import CardWrapper from "./cardwrapper";
import { fetchQuestions } from "../utils"; // Assuming utils.js is in a sibling directory

const Forum: React.FC = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
    };

    fetchData();
  }, []);

  return (
    <div className="forum">
      <h1>Forum</h1>
      <CardWrapper questions={questions} />
    </div>
  );
};

export default Forum;


// ==================

export default Index