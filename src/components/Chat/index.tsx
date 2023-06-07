import React, { FC, useEffect } from "react";
import styles from "./Chat.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import MessageForm from "../MessageForm";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getMessage } from "../../store/slices/messageSlice";

interface ChatProps {
  recipientNumber: string;
}

const Chat: FC<ChatProps> = ({ recipientNumber }) => {
  const messages = useAppSelector((state) => state.message.entities);
  const { idInstance, apiTokenInstance } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    const interval = setInterval(
      () => dispatch(getMessage(idInstance, apiTokenInstance, recipientNumber)),
      10000
    );
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, idInstance, apiTokenInstance, recipientNumber]);

  return (
    <div className={styles.chat}>
      <div className={styles.messageContainer}>
        {messages.map((message, i) => (
          <div
            className={`${styles.message} ${
              message.sender === "Me"
                ? styles.sentMessage
                : styles.receivedMessage
            }`}
            key={i}
          >
            {message.text}
          </div>
        ))}
      </div>
      <MessageForm recipientNumber={recipientNumber} />
    </div>
  );
};

export default Chat;
