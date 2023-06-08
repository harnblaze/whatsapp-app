import React from "react";
import styles from "./ContactsButton.module.css";
import { TiUserAdd } from "react-icons/ti";
import IconButton from "../../common/IconButton";

const ContactsButton = () => {
  const buttonClickHandle = () => {
    console.log("click");
  };

  return (
    <footer className={styles.footer}>
      <IconButton text={"Добавить контакт"} onClick={buttonClickHandle}>
        <TiUserAdd className={styles.icon} />
      </IconButton>
    </footer>
  );
};

export default ContactsButton;
