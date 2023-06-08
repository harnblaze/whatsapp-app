import React, { FC, PropsWithChildren } from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps extends PropsWithChildren {
  text?: string;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ children, text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
      <span className={styles.span}>{text}</span>
    </button>
  );
};

export default IconButton;
