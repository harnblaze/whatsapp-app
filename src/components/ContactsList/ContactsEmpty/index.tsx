import React from "react";
import styles from "./ContactsEmpty.module.css";
import { MdPermContactCalendar } from "react-icons/md";

const ContactsEmpty = () => {
  return (
    <div className={styles.container}>
      <MdPermContactCalendar className={styles.icon} />
      <span>Список контактов пуст</span>
    </div>
  );
};

export default ContactsEmpty;
