import React from "react";
import ContactsHeader from "./ContactsHeader";
import ContactsSearch from "./ContactsSearch";
import ContactsEmpty from "./ContactsEmpty";
import styles from "./ContactsList.module.css";
import ContactsButton from "./ContactsButton";

const ContactsSection = () => {
  return (
    <div className={styles.container}>
      <ContactsHeader />
      <ContactsSearch />
      <ContactsEmpty />
      <ContactsButton />
    </div>
  );
};

export default ContactsSection;
