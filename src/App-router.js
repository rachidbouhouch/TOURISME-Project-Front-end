
import React ,{useEffect,useState} from "react";
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
import Profile from "./Pages/Profile";
import axios from "axios";

const App = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "contactus", element: <Contact /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "listplaces", element: <ListPlaces /> },
    { path: "detailsplace", element: <DetailsPlace /> },
    { path: "favoris", element: <Favoris /> },
    { path: "profile", element: <Profile /> },
  ]);
  return routes;
};


export default function AppRouter() {
   const [currentUser , setCurrentUser]=useState({id: 0 ,email : "" , firstName : "" , lastName : "" , address:""});
  const {id ,email,firstName ,lastName ,address} = currentUser;

  useEffect(() => {
    axios.get('user/me')
    .then((result)=> {
      console.log(result.data.obj)
       setCurrentUser(...currentUser ,result.data.obj);
    })
    .catch((error) => {
      console.log(error)
      setCurrentUser(...currentUser,null);
    })
  });  
  return (
    <>
    <Router>
     <Header currentUser={currentUser} />
      <App />
      <div className="content-end">
      <Footer />
      </div>
    </Router>
  </>
  );
}