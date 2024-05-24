import React, {useEffect, useState} from 'react'
import axios from "axios"
import PageTemplate from '../components/PageTemplate/PageTemplate'
import styles from "../styles/Home.module.css"
import {QuestionType} from "../types/question"
import {useRouter} from "next/router"



const Index = () => {
  const router = useRouter;

  const [questions, setQuestions] = useState <QuestionType[] | null>(null);

  const fetchQuestions = async () => {
    try {
      // const headers = {
      //   authorization: cookies.get("jwt_token"),
      // };

      const response = await axios.get(`${process.env.SERVER_URL}/questions`,
      //  {headers, }
    );

      setQuestions(response.data.questions);

      console.log(response);
    } catch (err) {

      if (err?.response.status === 401) {
        router.push("/Login");
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <PageTemplate>

        <div className={styles.container} >
          
{/* <QuestionWrapper questions = {questions} */}







        </div>
    </PageTemplate>
  
  )
}

export default Index