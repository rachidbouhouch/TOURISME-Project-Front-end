import React from "react";
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    render(){
        return(
            <div className="container py-16">
            <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    LOGIN
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Login if you are a returing customer
                </p>
                <form action="login" method="post">
                    <div className="flex mb-4">
                        <div className="flex items-center mr-4 ">
                            <input id="inline-radio" type="radio" value="admin" name="radio-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="client" name="radio-type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                            <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Client</label>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                Email Address <span className="text-primary">*</span>
                            </label>
                            <input type="email" name="email" className="input-box" placeholder="Exemple@exemple.com" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                            <input type="password" name="password" className="input-box" placeholder="password" required />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit">
                           <a href="##" className="text-black bg-primary block w-full py-2 px-20 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</a>
                        </button>
                    </div>
                </form>
        
                <p className="mt-4 text-gray-600 text-center">
                    Don't have an account? <Link to="/register" className="text-primary">Register Now
                </Link>
                </p>
            </div>
        </div>
         );
    }

}
