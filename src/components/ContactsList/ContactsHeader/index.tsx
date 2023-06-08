import React from "react";
import styles from "./ContactsHeader.module.css";
import { HiUserCircle, HiUserGroup } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";

const ContactsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <button className={styles.button}>
          <HiUserCircle className={styles.icon} />
        </button>
      </div>
      <div className={styles.buttons}>
        <div className={styles.icons}>
          <button className={styles.button}>
            <HiUserGroup className={styles.icon} />
          </button>
          <button className={styles.button}>
            <TbCircleDashed className={styles.icon} />
          </button>
          <button className={styles.button}>
            <MdMessage className={styles.icon} />
          </button>
        </div>
        <button className={styles.button}>
          <BsThreeDotsVertical className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default ContactsHeader;
