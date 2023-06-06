import React from "react";
import Index from "./components/CredentialsForm";
import RecipientForm from "./components/RecipientForm";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <div className="App">
      <Index />
      <RecipientForm />
      <MessageForm recipientNumber={"sdasdasd"} />
    </div>
  );
}

export default App;
