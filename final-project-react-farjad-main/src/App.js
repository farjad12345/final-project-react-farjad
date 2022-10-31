import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import ThemeLayout from "./ThemeLayout/ThemeLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import { LoginContext } from "./LoginContext";


function App() {
  const userContext = useContext(LoginContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userContext.isLogin ? <ThemeLayout /> : <Login />}>
          <Route index element={<UserList />} />
          <Route path="login" element={<Login />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="signup" element={<SignUp />} />

        </Route>
      </Routes>
    </BrowserRouter >


  );
}

export default App;
