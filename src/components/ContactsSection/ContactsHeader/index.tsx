import React from "react";
import styles from "./ContactsHeader.module.css";
import { HiUserGroup } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import IconButton from "../../common/IconButton";

const ACCOUNT_IMAGE = `https://avatars.dicebear.com/api/avataaars/${(
  Math.random() + 1
)
  .toString(36)
  .substring(7)}.svg`;
console.log(ACCOUNT_IMAGE);

const ContactsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconButton>
          <img className={styles.icon} alt={"avatar"} src={ACCOUNT_IMAGE} />
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
          <IconButton>
            <BsThreeDotsVertical className={styles.icon} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default ContactsHeader;
