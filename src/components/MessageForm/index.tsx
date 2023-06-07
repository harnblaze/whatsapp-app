import React, { FC, FormEvent, useState } from "react";
import { sendMessage } from "../../store/slices/messageSlice";
import Button from "../common/Button";
import Input from "../common/Input";
import Container from "../common/Container";
import Form from "../common/Form";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

interface MessageFromProps {
  recipientNumber: string;
}

const MessageForm: FC<MessageFromProps> = ({ recipientNumber }) => {
  const dispatch = useAppDispatch();
  const [messageText, setMessageText] = useState("");
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      sendMessage(recipientNumber, messageText, idInstance, apiTokenInstance)
    );
    setMessageText("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Type a message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required
        />
        <Button>Send</Button>
      </Form>
    </Container>
  );
};

export default MessageForm;
