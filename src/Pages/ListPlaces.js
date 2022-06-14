import React from "react";
import CardPlace from "../Components/Cards/cardPlace";

export default class ListPlaces extends React.Component{
  
  render(){
    return(
        <>
        <div className="container py-4 flex justify-between">
        <div className="flex gap-3 items-center">
            <a href="index.html" className="text-primary text-base">
                <i className="fas fa-home"></i>
            </a>
            <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
            <p className="text-gray-600 font-medium">List of Places</p>
        </div>
    </div>
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        <div
            className="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
            <div className="divide-gray-200 divide-y space-y-5 relative">
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Informations :</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text"
                            className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                            placeholder="Ville" />
                        
                    </div>

                    <div class="mt-6 flex justify-end">
                        <button type="submit" >
                        <a href="##" class="bg-primary border border-primary text-white px-6 py-2 ml-4 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition">search</a>
                    </button></div>
                </div>
            </div>
        </div>
        <div className="col-span-3">
            <div className="mb-4 flex items-center">
                <button 
                    className="bg-primary border border-primary text-white px-10 py-3 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition lg:hidden text-sm mr-3 focus:outline-none">
                    Filter
                </button>
                <select
                    className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option>Default sorting</option>
                    <option>Price low-high</option>
                    <option>Price high-low</option>
                    <option>Latest product</option>
                </select>
                <div className="flex gap-2 ml-auto">
                    <div
                        className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fas fa-th"></i>
                    </div>
                    <div
                        className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                        <i className="fas fa-list"></i>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <CardPlace></CardPlace>
                </div>
        </div>
    </div>
    </>
    );
  }

}