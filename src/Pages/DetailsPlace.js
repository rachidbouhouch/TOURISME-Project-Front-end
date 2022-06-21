import React , {useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

 
function DetailsPlace({cityName}){
    const { id } = useParams();
    const [place , setPlace]=useState({})
    const [reviews,setReviews]=useState([])
    const [review , setReview]=useState({
        contenu : "",
        rating: 0.0

      })
      const navigate = useNavigate();


      const changeHandler = e => {
        setReview({...review,[e.target.name]:e.target.value});
      }
      
      useEffect(()=>{
        const getPlaceDetails = async () => {
            const places = await axios.get("/endroits/"+id)
            .then(
                (res) => {
                    setPlace(res.data);
                    setReviews(res.data.reviews);
                }
            )
            .catch(
                (err)=>{
                 console.log(err)
                }
            )
        }
        getPlaceDetails();
     },[])
    const onSubmitReview = () => {
        console.log(review.rating)
        if (review.contenu === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field write something  is required',
              })

        }
            const postReview = async () => {
                 await axios.post("/endroits/"+id+"/reviews",review)
                .then(
                    (res) => {
                        Swal.fire(
                            'Good job!',
                            'Rating added',
                            'success'
                          ).then(
                            ()=> {
                                setReviews([...reviews, review]);
                                setReview({
                                    contenu : "",
                                    rating: 0.0
                            
                                  })

                            }
                          )
                    }
                )
                .catch(
                    (err)=>{
                     console.log(err)
                    }
                )
            }
            postReview();
        

    }

    const getFirstImage = ()=> {
        if (place.image == null){
            return <img alt="" src={require(`../Assets/images/no-image.png`)} className="w-full" />
        }
        else {
        const array_image = place.image?.split(',');
        return array_image?.map(function(index,val){
            console.log(index,val)
            if (val === 0){
                return <img alt="" id="main-img" src={require(`../Assets/images/${index}`)} className="w-full" />

            }
         }); 
        }
    }
    const getOtherImages = ()=> {
        const array_image = place.image?.split(',');
        return array_image?.map(function(index,val){

            console.log(index,val)
            if (val !== 0){
                return <a href={require(`../Assets/images/${index}`)}><img alt="picutrecity" src={require(`../Assets/images/${index}`)} className="single-img w-full h-full cursor-pointer border border-primary" />
</a>
            }
            
         }); 
        
        
    }
    
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
     const ReviewRating = (reviewRating) => {
        if (reviewRating == 0.0) {
            return "0 Star";
        }
        else if (reviewRating<=1.0){
            return <span><i className="fas fa-star"></i></span>
        }
        else if (reviewRating<=2.0){
            return <>
            <span><i className="fas fa-star"></i></span>
            <span><i className="fas fa-star"></i></span>
        </>}
        else if (reviewRating<=3.0){
           return <>
            <span><i className="fas fa-star"></i></span>
            <span><i className="fas fa-star"></i></span>
            <span><i className="fas fa-star"></i></span>
            </>
        }
        else if (reviewRating<=4.0){
            return <>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             </>
         }
         else if (reviewRating<=5.0){
            return <>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>
             <span><i className="fas fa-star"></i></span>

             </>
         }
        
     }

    
     const GetReviews = () => {
        return reviews === [] ? "There is no reviews" : reviews.map((review)=> {
            return (
                <>
                <div className="flex ml-3 mt-6">
               <div className="mr-3">
              <img src="http://picsum.photos/50" alt="" className="rounded-full"/>
             </div>
            <div>
            <h1 className="font-semibold">{review.contenu}</h1>
            <p class="text-xs text-gray-500">Rating : {review.rating}</p>
            <div className="flex gap-1 text-sm text-yellow-400">
            {ReviewRating(review.rating)}
            </div>
            </div>
            </div>
    
                </>
    
            )
        })
       }
        return(
            <>
        <div className="py-4 container flex gap-3 items-center">
        <p className="text-primary text-base">
            <i className="fas fa-home"></i>
        </p>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <p className="text-gray text-base font-medium uppercase">
        Place
        </p>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <p className="text-gray-600 font-medium uppercase">{place.villeName}</p>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <p className="text-primary text-gray-600 font-medium uppercase">{place.name}</p>


        
         </div>
         <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        <div>
           <div>
           {getFirstImage()}
           </div>
           <div className="grid grid-cols-4 gap-4 mt-5">
            {getOtherImages()}
            </div>
            
        </div>
        <div>
            <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">{place.name}</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    {ratingAvg(place.ratingAvg)}
                </div>
                
                <div className="text-xs text-gray-500 ml-3">{place.ratingAvg} ({place.numberOfReviews} Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>City: </span>
                    <span className="text-green-600">{place.villeName}</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Country: </span>
                    <span className="text-gray-600">Morroco</span>
                </p>
  
            </div>
            <div className="flex space-x-3 mt-4">
                {
                 place.videoLink == null ? "No video Link" :  <a href={place.videoLink}
                 className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                 <i className="fab fa-youtube"></i>
             </a>
              
                }
                
            </div>
            <div class="flex justify-center mt-8">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label>
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                    </div>
                    <input type="file" class="opacity-0" />
                </label>
            </div>
        </div>
    </div>
        </div>
    </div>
    <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Place Description
        </h3>
        <div className="lg:w-4/5 xl:w-3/5 pt-6">
            <div className="space-y-3 text-gray-600">
                <p>
                    {place.description == null? "There is no description": place.description }
                </p>
            </div>
        </div>
    </div>
    <div className="container pb-16">
    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Reviews
        </h3>
        <GetReviews/>
    <div className="mt-3 p-3 w-full">
      <textarea onChange={changeHandler} value={review.contenu} rows="3" className="border p-2 rounded w-full" name="contenu" placeholder="Write something..."></textarea>
    </div>
     <div className="flex justify-center">
                
                <input type="number"
                   name="rating"
                   placeholder="Review"
                   min="0.0"
                   max="5.0"
                   value={review.rating}
                   onChange={changeHandler}
                   step="0.1"
                   className="placeholder-black text-black px-8 py-3 font-medium rounded-md uppercase" />
            </div>
    

    <div className="flex justify-center mt-4">
      <div><button onClick={onSubmitReview} className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
    </div>
  </div>

         </>
        );
    }

export default DetailsPlace;
