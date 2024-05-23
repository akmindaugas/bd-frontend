import { QuestionType } from "../../types/question";
import React, { useState } from "react";
import styles from "./QuestionWrapper.module.css";
// import StatusMark from "../StatusMark/StatusMark";
import Button from "../Button/Button";
import axios from "axios";
// import cookies from "js-cookie";
import { useRouter } from "next/router";
// import Modal from "../Modal/Modal";

type QuestionWrapperProps = {
    question: QuestionType;
};

const ItemWrapper = ({ question }: QuestionWrapperProps) => {
  const router = useRouter();

  const [isShowWarning, setShowWarning] = useState(false);

  const deleteItem = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/questions/${router.query.id}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }

      console.log("response", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.photoUrl}>
        <img src={question.photoUrl} alt="img" />
      </div>

      <div className={styles.info}>
        <h1>{question.title}</h1>
        <p>
          Lorem ipsum 
        </p>
        {/* <StatusMark status={game.condition} />
        <h3>{game.price}$</h3>
        <h3>{game.releaseYear}</h3> */}

        <Button
          className={styles.deleteButton}
          type="WARNING"
          isLoading={false}
          title="Delete question"
          onClick={() => setShowWarning(true)}
        />
      </div>

      {isShowWarning && (
        <Modal
          message="Do you really want to delete this question?"
          onConfirm={deleteItem}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </main>
  );
};

export default ItemWrapper;