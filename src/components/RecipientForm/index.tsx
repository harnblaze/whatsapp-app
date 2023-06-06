import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createChat } from "../../store/slices/chatSlice";
import Input from "../common/Input";
import Button from "../common/Button";
import Title from "../common/Title";
import Container from "../common/Container";

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
    <Container>
      <Title>Create New Chat</Title>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="Recipient Number"
          value={recipientNumber}
          onChange={(e) => setRecipientNumber(e.target.value)}
          required
        />
        <Button>Create Chat</Button>
      </form>
    </Container>
  );
};

export default RecipientForm;
