import styles from "./Input.module.css";
import React, { ChangeEventHandler, FC } from "react";

export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required: boolean;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div className={styles.input}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
