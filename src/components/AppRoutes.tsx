import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import ChatPage from "../pages/ChatPage";

const AppRoutes = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  return isAuth ? (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
