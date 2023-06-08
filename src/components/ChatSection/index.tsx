import React from "react";
import Chat from "./Chat";
import { useAppSelector } from "../../hooks/useAppSelector";
import ChatEmpty from "./ChatEmpty";
import ChatHeader from "./ChatHeader";
import styles from "./ChatSection.module.css";

const ChatSection = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);

  return (
    <div className={styles.container}>
      {recipientNumber === "" ? (
        <ChatEmpty />
      ) : (
        <>
          <ChatHeader />
          <Chat recipientNumber={recipientNumber} />
        </>
      )}
    </div>
  );
};

export default ChatSection;
