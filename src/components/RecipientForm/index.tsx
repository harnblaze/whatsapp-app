import React, { FormEvent, useState } from "react";
import { addChat } from "../../store/slices/chatSlice";
import Title from "../common/Title";
import Container from "../common/Container";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import styles from "./RecipientForm.module.css";
import Button from "../common/Button";
import Input from "../common/Input";

const RecipientForm = () => {
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user
  );

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(addChat(phoneNumber, idInstance, apiTokenInstance));
    setPhoneNumber("");
    navigate(`/chat`);
  };

  return (
    <Container>
      <Title>Create New Chat</Title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type={"text"}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <Button>Create Chat</Button>
      </form>
    </Container>
  );
};

export default RecipientForm;
