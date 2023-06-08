import React from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
