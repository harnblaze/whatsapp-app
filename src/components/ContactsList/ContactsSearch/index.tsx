import React from "react";
import styles from "./ContactsSearch.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CgSortAz } from "react-icons/cg";

const ContactsSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <AiOutlineSearch className={styles.icon} />
        <input placeholder={"Поиск"} className={styles.input} />
      </div>
      <button className={styles.button}>
        <CgSortAz className={styles.icon} />
      </button>
    </div>
  );
};

export default ContactsSearch;
