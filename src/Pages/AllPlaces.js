import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import CardPlace from "../Components/Cards/cardPlace";
import axios from "axios";
import Pagination from "../Components/Pagination/Pagination";

const AllPlaces =() =>{
    const BASE_URL = "/api";
    const navigate=useNavigate();
    const [values , setValues]=useState([])
    //const [sort,setSort]=useState("Default Sorting")
    const getAllPlaces = async () => {
        const places = await axios.get(BASE_URL+"/endroits")
        .then(
            (res) => {
                
                setValues(res.data.data);
            }
        )
        .catch(
            (err)=>{
             console.log(err)
            }
        )
    }

     useEffect(()=>{
        getAllPlaces();
       
     },[])

     const handleChange = (event)=> {
        
        //console.log(event.target.value)
        if (event.target.value === "Default Sorting"){
            getAllPlaces();
        }
        else if (event.target.value === "name"){
            const getAllPlacesByName = async () => {
                const places = await axios.get(BASE_URL+"/endroits/all/sorting?sortBy=name")
                .then(
                    (res) => {
                        console.log(res.data)
                        setValues(res.data.data);
                    }
                )
                .catch(
                    (err)=>{
                     console.log(err)
                    }
                )
            }
            getAllPlacesByName();
        }
      }
    
     const GetPlaces = () => {
        console.log(values)
         const ratingAvg = (ratingAverge)=> {
            if (ratingAverge == 0.0) {
                return "0 Star";
            }
            else if (ratingAverge<=1.0){
                return <span><i className="fas fa-star"></i></span>
            }
            else if (ratingAverge<=2.0){
                return <>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
            </>}
            else if (ratingAverge<=3.0){
               return <>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                </>
            }
            else if (ratingAverge<=4.0){
                return <>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 </>
             }
             else if (ratingAverge<=5.0){
                return <>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
                 <span><i className="fas fa-star"></i></span>
    
                 </>
             }
         }
         const getFirstImage = (image)=> {
            if (image == null){
                return <img alt="" src={require(`../Assets/images/no-image.png`)} className="w-full h-full" />
            }
            else {const array_image = image?.split(',');
            return array_image?.map(function(index,val){
                console.log(index , val)
                if (val === 0){
                   return <img alt="" src={require(`../Assets/images/${index}`)} className="w-full h-full" />
    
                }
             }); }
        }
    
        return values.length == 0 ? "There is no places" :values.map((place)=> {
            return (
                <div key={place.id}>
                <div className="group rounded bg-white shadow overflow-hidden">
                <div className="relative" >
                    {
                        getFirstImage(place.image)
                    }
                    
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="view.html"
                            className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                            <i className="fas fa-search"></i>
                </a>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <a href="view.html">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            {place.name}
                        </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-roboto font-semibold">{place.villeName}</p>
                    </div>
                    <div class="flex items-center">
                                <div class="flex gap-1 text-sm text-yellow-400">
                                    {ratingAvg(place.ratingAvg)}
                                </div>
                                <div class="text-xs text-gray-500 ml-3">({place.numberOfReviews} Reviews)</div>
                            </div>
                </div>
                <button
                  onClick={() => {
                    navigate(`/city/${place.villeId}/places/${place.id}`)
                  }}
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                    Détails
                </button>
                </div>
    
                </div>
    
            )
        })
       }

    return(
        <>
        <div className="container py-4 flex justify-between">
        <div className="flex gap-3 items-center">
            <p className="text-primary text-base">
                <i className="fas fa-home"></i>
            </p>
            <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
            <p className="text-gray-600 font-medium">List of Places</p>
        </div>
    </div>
    <div className="container grid gap-6 pt-4 pb-16 items-start relative">
        <div className="col-span-3">
            <div className="mb-4 flex items-center">
                <select
                    onChange={handleChange}
                    className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option value="Default Sorting">Default sorting</option>
                    <option value="name" >Name</option>
                </select>
                <div className="flex gap-2 ml-auto">
                    <div
                        className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fas fa-th"></i>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
               
            <GetPlaces />
                </div>
                <div className="flex justify-center mt-6 mb-6">
                 <Pagination />
                  </div>
        </div>
        
    </div>
    </>
    );
  }

  export default AllPlaces;