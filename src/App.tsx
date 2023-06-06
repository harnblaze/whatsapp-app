import React from "react";
import Index from "./components/CredentialsForm";
import RecipientForm from "./components/RecipientForm";
import MessageForm from "./components/MessageForm";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Index />
      <RecipientForm />
      <MessageForm recipientNumber={"sdasdasd"} />
      <Chat recipientNumber={"sdasdasd"} />
    </div>
  );
}

export default App;
