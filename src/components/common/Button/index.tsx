import styles from "./Button.module.css";
import React, { FC, MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="submit" className={styles.submitButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
