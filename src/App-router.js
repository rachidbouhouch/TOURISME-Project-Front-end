
import React from "react";
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import Home from './Pages/LandingPage';
import Contact from './Pages/ContactUs';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ListPlaces from './Pages/ListPlaces';
import DetailsPlace from "./Pages/DetailsPlace";
import Favoris from "./Pages/Favoris";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "contactus", element: <Contact /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "listplaces", element: <ListPlaces /> },
    { path: "detailsplace", element: <DetailsPlace /> },
    { path: "favoris", element: <Favoris /> }
  ]);
  return routes;
};


export default function router() {
  return (
    <>
    <Router>
     <Header />
      <App />
      <div className="fixed bottom-0 w-full">
      <Footer />
      </div>
    </Router>
  </>
  );
}