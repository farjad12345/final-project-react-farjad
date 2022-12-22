import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useContext } from "react";
import ThemeLayout from "./ThemeLayout/ThemeLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import Gallery from "./pages/Gallery/Gallery";
import AboutUs from "./pages/AboutUs/AboutUs";
import Technology from "./pages/Technology/Technology";
import { LoginContext } from "./LoginContext";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});


function App() {
  const userContext = useContext(LoginContext);
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={userContext.isLogin ? <ThemeLayout /> : <Login />}>
          <Route index element={<UserList />} />
          <Route path="login" element={<Login />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </QueryClientProvider>



  );
}

export default App;
