import React ,{useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
function cardPlace({places ,id}) {

   const GetPlaces = () => {
    const navigate = useNavigate();
    console.log(places)
    const [cityName , setCityName]=useState();
    useEffect(()=>{
        const getCityById = async () => {
            const data = await axios.get("/villes/"+id)
            .then(
                (res) => {
                    setCityName(res.data.villename);
                    console.log(res.data)
                }
            )
            .catch(
                (err)=>{
                 console.log(err)
                }
            )
        }
        getCityById();
     },[])

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
            return <img alt="" src={require(`../../Assets/images/no-image.png`)} className="w-full" />
        }
        else {const array_image = image?.split(',');
        return array_image?.map(function(index,val){
            console.log(index , val)
            if (val === 0){
               return <img alt="" src={require(`../../Assets/images/${index}`)} className="w-full" />

            }
         }); }
    }

    return places.length == 0 ? "There is no places" :places.map((place)=> {
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
                navigate(`/city/${id}/places/${place.id}` ,{
                      CityName: cityName
                  });
              }}
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                Détails
            </button>
            </div>

            </div>

        )
    })
   }
   
    return (
            
            <GetPlaces />
    );
  }
  
  export default cardPlace;
  