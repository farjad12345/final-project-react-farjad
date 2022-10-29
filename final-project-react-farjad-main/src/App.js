import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import ThemeLayout from "./ThemeLayout/ThemeLayout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { LoginContext } from "./LoginContext";


function App() {
  const userContext = useContext(LoginContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userContext.isLogin ? <ThemeLayout /> : <Login />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter >


  );
}

export default App;
