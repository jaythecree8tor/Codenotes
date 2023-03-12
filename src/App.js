import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Starred from "./pages/Starred";
function App() {
  return (
    <>
    <AuthContextProvider>
       <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route  path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route  path='/starred' element={<ProtectedRoute><Starred /></ProtectedRoute>} />
      <Route path="*" element={<NoPage />} />
     </Routes>
    </AuthContextProvider>
    
    </>
  );
}

export default App;
