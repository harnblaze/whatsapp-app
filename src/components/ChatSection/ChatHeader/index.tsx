import React from "react";
import styles from "./ChatHeader.module.css";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import { useAppSelector } from "../../../hooks/useAppSelector";

const ChatHeader = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconButton>
          <HiUserCircle className={styles.icon} />
          <h2>+{recipientNumber}</h2>
        </IconButton>
      </div>
      <div className={styles.buttons}>
        <IconButton>
          <AiOutlineSearch className={styles.icon} />
        </IconButton>
        <IconButton>
          <BsThreeDotsVertical className={styles.icon} />
        </IconButton>
      </div>
    </header>
  );
};

export default ChatHeader;
