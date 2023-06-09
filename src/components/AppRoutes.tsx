import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ChatSection from "./ChatSection";
import RecipientForm from "./RecipientForm";

const AppRoutes = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return isAuth ? (
    <Routes>
      <Route path="/whatsapp-app" element={<MainPage />}>
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/add" element={<RecipientForm />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="whatsapp-app/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
