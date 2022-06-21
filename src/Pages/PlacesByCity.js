import React ,{useEffect, useState} from "react";
import CardPlace from "../Components/Cards/cardPlace";
import { useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../Components/Pagination/Pagination";

const PlacesByCity =() =>{
    const { id } = useParams();
    const [values , setValues]=useState([])
     useEffect(()=>{
        const getPlacesByCityName = async () => {
            const places = await axios.get("/villes/"+id+"/endroits")
            .then(
                (res) => {
                    setValues(res.data);
                }
            )
            .catch(
                (err)=>{
                 console.log(err)
                }
            )
        }
        getPlacesByCityName();
     },[])
    

 
  console.log(id);



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
    <div className="container grid gap-6 pt-4 pb-16 items-start relative">
        <div className="col-span-3">
            <div className="mb-4 flex items-center">
                <div className="flex gap-2 ml-auto">
                    <div
                        className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fas fa-th"></i>
                    </div>

                </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <CardPlace places={values} id={id} ></CardPlace>
                </div>
                <div className="flex justify-center mt-6 mb-6">
                 <Pagination />
                  </div>
        </div>
        
    </div>
    </>
    );
  }

  export default PlacesByCity;