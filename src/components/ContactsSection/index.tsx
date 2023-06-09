import React, { useEffect } from "react";
import ContactsHeader from "./ContactsHeader";
import ContactsSearch from "./ContactsSearch";
import ContactsEmpty from "./ContactsEmpty";
import styles from "./ContactsList.module.css";
import ContactsButton from "./ContactsButton";
import { useAppSelector } from "../../hooks/useAppSelector";
import Contacts from "./Contacts";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { resetMessages } from "../../store/slices/messageSlice";

const ContactsSection = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetMessages());
  }, [recipientNumber, dispatch]);

  return (
    <div className={styles.container}>
      <ContactsHeader />
      <ContactsSearch />
      {recipientNumber === "" ? <ContactsEmpty /> : <Contacts />}

      <ContactsButton />
    </div>
  );
};

export default ContactsSection;
