import styles from "./Title.module.css";
import React, { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
export default Title;
