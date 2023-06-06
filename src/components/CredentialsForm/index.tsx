import React, { FormEvent, useState } from "react";
import { signIn } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Input from "../common/Input";
import Button from "../common/Button";
import Title from "../common/Title";
import Container from "../common/Container";
import Form from "../common/Form";

const CredentialsForm = () => {
  const dispatch = useAppDispatch();
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idInstance && apiTokenInstance) {
      dispatch(signIn(idInstance, apiTokenInstance));
      setIdInstance("");
      setApiTokenInstance("");
    }
  };

  return (
    <Container>
      <Title>WhatsApp Web</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="ID Instance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          required
        />
        <Input
          placeholder="API Token Instance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          required
        />
        <Button>Log In</Button>
      </Form>
    </Container>
  );
};

export default CredentialsForm;
