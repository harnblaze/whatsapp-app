import React, { useMemo } from "react";
import styles from "./ChatHeader.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import IconButton from "../../common/IconButton";
import { useAppSelector } from "../../../hooks/useAppSelector";

const ChatHeader = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);

  const recipientImage = useMemo(
    () =>
      `https://avatars.dicebear.com/api/avataaars/${recipientNumber.substring(
        7
      )}.svg`,
    [recipientNumber]
  );
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconButton>
          <img className={styles.icon} alt={"avatar"} src={recipientImage} />
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
