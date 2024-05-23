import React, { useEffect, useState } from "react";
import axios from "axios";
// import cookies from "js-cookie";
import Header from "@/components/Header/Header";
import { links } from "../../constants/links";
// import ItemWrapper from "@/components/ItemWrapper/ItemWrapper";
import { useRouter } from "next/router";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const Question = () => {
  const [question, setQuestion] = useState();
  const router = useRouter();

  const fetchQuestion = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get(
        `${process.env.SERVER_URL}/questions/${router.query.id}`,
        {
          headers,
        }
      );

      setQuestion(response.data.question);
    } catch (err) {
      // @ts-expect-error this is correct way to catch error
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    router.query.id && fetchQuestion();
  }, [router]);

  return <PageTemplate logoPath="../components/assets/logo.jpg" >{question && <QuestionWrapper question={question} />}</PageTemplate>;
};

export default Question;