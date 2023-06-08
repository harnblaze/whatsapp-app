import React from "react";
import styles from "./ChatEmpty.module.css";
import { BsWhatsapp } from "react-icons/bs";

const ChatEmpty = () => {
  return (
    <div className={styles.container}>
      <BsWhatsapp className={styles.icon} />
      <h1 className={styles.title}>Whatsapp Web</h1>
    </div>
  );
};

export default ChatEmpty;
