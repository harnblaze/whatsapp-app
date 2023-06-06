import styles from "./Form.module.css";
import React, { FC, FormEventHandler, PropsWithChildren } from "react";

export interface FormProps extends PropsWithChildren {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
