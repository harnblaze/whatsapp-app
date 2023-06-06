import React, { FC } from "react";
import styles from "./Chat.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";

interface ChatProps {
  recipientNumber: string;
}

const Chat: FC<ChatProps> = () => {
  const messages = useAppSelector((state) => state.message.entities);

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
    </div>
  );
};

export default Chat;
