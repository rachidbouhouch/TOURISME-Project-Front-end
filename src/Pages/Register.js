import React from "react";
import { Link } from 'react-router-dom';


export default class Register extends React.Component{
    render(){
        return(
            <div className="container py-16">
            <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    create an acocunt
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Register here if you don't have account
                </p>
                <form action="register" method="post">
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                First Name <span className="text-primary">*</span>
                            </label>
                            <input type="text" name="prenom" className="input-box" placeholder="rachid" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                Last Name <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="input-box" name="nom" placeholder="ait lhouss" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                Email Address <span className="text-primary">*</span>
                            </label>
                            <input type="email" className="input-box" name="email" placeholder="example@mail.com" required />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                            <input type="password" className="input-box" name="password" placeholder="password" required />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit"
                                >
                            <a href="##" className="text-black bg-primary block w-full py-2 px-20 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create account</a>
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-600 text-center">
                    Already have an account? <Link to="/login" className="text-primary">Login Now</Link>
                </p>
            </div>
        </div>
        );
    }

}
