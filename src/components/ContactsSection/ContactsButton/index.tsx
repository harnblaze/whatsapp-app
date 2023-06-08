import React from "react";
import styles from "./ContactsButton.module.css";
import { TiUserAdd } from "react-icons/ti";
import IconButton from "../../common/IconButton";
import { useNavigate } from "react-router-dom";

const ContactsButton = () => {
  const navigate = useNavigate();

  const buttonClickHandle = () => {
    navigate("/add");
  };

  return (
    <footer className={styles.footer}>
      <IconButton text={"Add contact"} onClick={buttonClickHandle}>
        <TiUserAdd className={styles.icon} />
      </IconButton>
    </footer>
  );
};

export default ContactsButton;
