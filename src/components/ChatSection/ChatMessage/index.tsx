import React, { FC, FormEvent, useState } from "react";
import { sendMessage } from "../../../store/slices/messageSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import styles from "./ChatMessage.module.css";
import IconButton from "../../common/IconButton";
import { IoMdSend } from "react-icons/io";

interface ChatMessageProps {
  recipientNumber: string;
}

const ChatMessage: FC<ChatMessageProps> = ({ recipientNumber }) => {
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.message}>
          <input
            className={styles.input}
            placeholder="Type a message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          />
        </div>

        <IconButton>
          <IoMdSend className={styles.icon} />
        </IconButton>
      </form>
    </div>
  );
};

export default ChatMessage;
