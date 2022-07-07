import './App.css';
import "./Assets/css/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Footer from './Components/footer/footer';
import Header from './Components/header/Header';
import Home from './Pages/LandingPage';
import Contact from './Pages/ContactUs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PlacesByCity from './Pages/PlacesByCity';
import DetailsPlace from "./Pages/DetailsPlace";
import Profile from "./Pages/Profile";
import ProtectedRoutes from './utils/ProtectedRoutes';
import AllPlaces from './Pages/AllPlaces';
export default function App() {
  
  return (
    <>
    <Router>
     <Header />
    <Routes>        
        <Route element={<ProtectedRoutes />}>
        <Route path="places" element={<AllPlaces />} />
        <Route path="city/:id/places" element={<PlacesByCity />} />
        <Route path="city/:id/places/:id" element={<DetailsPlace />} />
        <Route path="profile" element={<Profile/>} />
        </Route>
        <Route element={<Home/>} path="/" exact/>
        <Route path="contactus" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />

    </Routes> 
      <div className="fixed left-0 bottom-0 w-full">
      <Footer />
      </div>


    </Router>

  </>
  );
}