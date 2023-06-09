import React from "react";
import ContactsHeader from "./ContactsHeader";
import ContactsSearch from "./ContactsSearch";
import ContactsEmpty from "./ContactsEmpty";
import styles from "./ContactsList.module.css";
import ContactsButton from "./ContactsButton";
import { useAppSelector } from "../../hooks/useAppSelector";
import Contacts from "./Contacts";

const ContactsSection = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);
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
