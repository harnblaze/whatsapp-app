import React, { FormEvent, useState } from "react";
import { setCredentials } from "../../store/slices/userSlice";
import classes from "./CredentialsForm.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const CredentialsForm = () => {
  const dispatch = useAppDispatch();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idInstance && apiTokenInstance) {
      dispatch(setCredentials({ idInstance, apiTokenInstance }));
      setIdInstance("");
      setApiTokenInstance("");
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>WhatsApp Web</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID Instance"
          className={classes.input}
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="API Token Instance"
          className={classes.input}
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          required
        />
        <button type="submit" className={classes.submitButton}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default CredentialsForm;
