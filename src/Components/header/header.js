import React from "react";
import { Link } from 'react-router-dom';

function header({currentUser}) {
      console.log({currentUser})
    const notLogged = () => {
        if (!{currentUser}){
            return(
                <>
                <Link to="/login" class="text-gray-200 hover:text-white transition mr-4">
                                            login
                 </Link>
                 <Link to="/register" class="text-gray-200 hover:text-white transition">
                                            register
                 </Link>
               </>)
        }
    }
    const logged =() => {
        if ({currentUser}){
            return(
            <>
            <Link to="favoris" className="block text-center text-gray-700 hover:text-primary transition relative">
                       <span
                           className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                       <div className="text-2xl">
                           <i className="far fa-heart"></i>
                       </div>
                       <div className="text-xs leading-3">Favoris</div>
                   </Link>
                   
                   <Link to="/profile" className="block text-center text-gray-700 hover:text-primary transition">
                       <div className="text-2xl">
                           <i className="far fa-user"></i>
                       </div>
                       <div className="text-xs leading-3">Account</div>
   
                       </Link>
           </>)
        }
    }

    return (
        <>
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
        <div className="container flex items-center justify-between">
            <a href="####" className="block w-32">
                <img src={require('../../Assets/images/logo.png')} alt="logo" className="w-full" />
            </a>
            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fas fa-search"></i>
                </span>
                <input type="text"
                    className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                    placeholder="search" />
               <Link to="listplaces" className="bg-primary border border-primary text-white px-8 py-4 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">Search</Link>
        
            </div>
            <div className="space-x-4 flex items-center">
               {logged}
            </div>
        </div>
    </header>
     <nav className="bg-gray-800 hidden lg:block">
     <div className="container">
         <div className="flex">
             <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                 <span className="text-white">
                     <i className="fas fa-bars"></i>
                 </span>
                 <span className="capitalize ml-2 text-white">Famous Cities</span>
                 <div
                     className="absolute left-0 top-full w-full divide-gray-300 divide-dashed divide-y bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Rabat</span>
                     </a>
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Marrakech</span>
                     </a>
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Tanger</span>
                     </a>
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Agadir</span>
                     </a>
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Dakhala</span>
                     </a>
                     <a href="##" className="px-6 py-3 flex items-center border-gray-300 hover:bg-gray-100 transition">
                         <span className="ml-6 text-gray-600 text-sm">Casablanca</span>
                     </a>
                 </div>
             </div>
             <div className="flex items-center justify-between flex-grow pl-12">
                 <div className="flex items-center space-x-6 text-base capitalize">
                     <Link to="/" className="text-gray-200 hover:text-white transition">Home</Link>
                     <a href="##" className="text-gray-200 hover:text-white transition">About us</a>
                     <Link to="/contactus" className="text-gray-200 hover:text-white transition">Contact us</Link>
                 </div>
                 <div class="ml-auto justify-self-end">

                 {notLogged}
                 </div>
             </div>
         </div>
     </div>
 </nav>
    
    </>
    );
  }
  
  export default header;
  