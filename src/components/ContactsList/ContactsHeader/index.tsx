import React from "react";
import styles from "./ContactsHeader.module.css";
import { HiUserCircle, HiUserGroup } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import IconButton from "../../common/IconButton";

const ContactsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconButton>
          <HiUserCircle className={styles.icon} />
        </IconButton>
      </div>
      <div className={styles.buttons}>
        <div className={styles.icons}>
          <IconButton>
            <HiUserGroup className={styles.icon} />
          </IconButton>
          <IconButton>
            <TbCircleDashed className={styles.icon} />
          </IconButton>
          <IconButton>
            <MdMessage className={styles.icon} />
          </IconButton>
        </div>
        <button className={styles.button}>
          <BsThreeDotsVertical className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default ContactsHeader;
