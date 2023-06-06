import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createChat } from "../../store/slices//chatSlice";
import styles from "./RecipientForm.module.css";

const RecipientForm = () => {
  const dispatch = useDispatch();
  const [recipientNumber, setRecipientNumber] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recipientNumber) {
      dispatch(createChat(recipientNumber));
      setRecipientNumber("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Chat</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient Number"
          className={styles.input}
          value={recipientNumber}
          onChange={(e) => setRecipientNumber(e.target.value)}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Create Chat
        </button>
      </form>
    </div>
  );
};

export default RecipientForm;
