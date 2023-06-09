import React from "react";
import styles from "./Contacts.module.css";
import { HiUserCircle } from "react-icons/hi";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { SlArrowDown } from "react-icons/sl";
import IconButton from "../../common/IconButton";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);
  const navigate = useNavigate();

  const ClickHandle = () => {
    navigate("/chat");
  };

  return (
    <div className={styles.container} onClick={ClickHandle}>
      <HiUserCircle className={styles.icon} />
      <h2>+{recipientNumber}</h2>
      <div className={styles.button}>
        <IconButton>
          <SlArrowDown />
        </IconButton>
      </div>
    </div>
  );
};

export default Contacts;
