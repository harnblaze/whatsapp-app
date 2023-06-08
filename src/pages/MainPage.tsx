import React from "react";
import ContactsSection from "../components/ContactsSection";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <ContactsSection />
      <Outlet />
    </div>
  );
};

export default MainPage;
