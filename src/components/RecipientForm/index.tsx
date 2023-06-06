import React, { FormEvent, useState } from "react";
import { createChat } from "../../store/slices/chatSlice";
import Input from "../common/Input";
import Button from "../common/Button";
import Title from "../common/Title";
import Container from "../common/Container";
import Form from "../common/Form";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const RecipientForm = () => {
  const dispatch = useAppDispatch();
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
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Recipient Number"
          value={recipientNumber}
          onChange={(e) => setRecipientNumber(e.target.value)}
          required
        />
        <Button>Create Chat</Button>
      </Form>
    </Container>
  );
};

export default RecipientForm;
