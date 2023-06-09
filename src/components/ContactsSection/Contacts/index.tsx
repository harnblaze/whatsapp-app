import React, { useMemo } from "react";
import styles from "./Contacts.module.css";
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

  const recipientImage = useMemo(
    () =>
      `https://avatars.dicebear.com/api/avataaars/${recipientNumber.substring(
        7
      )}.svg`,
    [recipientNumber]
  );

  return (
    <div className={styles.container} onClick={ClickHandle}>
      <img className={styles.icon} alt={"avatar"} src={recipientImage} />
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
