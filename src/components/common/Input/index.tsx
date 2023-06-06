import styles from "./Input.module.css";
import React, { ChangeEventHandler, FC } from "react";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
}

const Input: FC<InputProps> = ({ placeholder, value, onChange, required }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
