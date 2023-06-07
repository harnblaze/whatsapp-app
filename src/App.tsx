import React from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
