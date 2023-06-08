import React from "react";
import styles from "./ContactsButton.module.css";
import { TiUserAdd } from "react-icons/ti";

const ContactsButton = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.button}>
        <TiUserAdd className={styles.icon} /> <span>Добавить контакт</span>
      </button>
    </footer>
  );
};

export default ContactsButton;
