import React, { FormEvent, useEffect, useState } from "react";
import { addChat } from "../../store/slices/chatSlice";
import Input from "../common/Input";
import Button from "../common/Button";
import Title from "../common/Title";
import Container from "../common/Container";
import Form from "../common/Form";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const RecipientForm = () => {
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user
  );
  const recipientNumber = useAppSelector((state) => state.chat.recipientNumber);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(addChat(phoneNumber, idInstance, apiTokenInstance));
    setPhoneNumber("");
  };
  useEffect(() => {
    if (recipientNumber !== "") {
      navigate(`/chat`);
    }
  }, [recipientNumber, navigate]);

  return (
    <Container>
      <Title>Create New Chat</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Button>Create Chat</Button>
      </Form>
    </Container>
  );
};

export default RecipientForm;
