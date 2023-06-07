import React from "react";
import RecipientForm from "../components/RecipientForm";
import { useAppSelector } from "../hooks/useAppSelector";
import Chat from "../components/Chat";

const MainPage = () => {
  const { recipientNumber } = useAppSelector((state) => state.chat);
  if (recipientNumber === "") return <RecipientForm />;
  return <Chat recipientNumber={recipientNumber} />;
};

export default MainPage;
