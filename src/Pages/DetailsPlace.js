import React , {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import CardReview from "../Components/Cards/CardReview";
import { useAuth } from "../utils/AuthProvider";
 
function DetailsPlace({cityName}){
    const { id } = useParams();
    const [place , setPlace]=useState({})
    const [reviews,setReviews]=useState([])
    const {user}=useAuth();
    const [showModal, setShowModal] = useState(false);
    const [reviewUpdated , setReviewUpdated]=useState({
      contenu : "",
      rating: 0.0,
    })

    const [review , setReview]=useState({
        contenu : "",
        rating: 0.0,
        idUser : null,
        nameUser:null

      })


      const changeHandler = e => {
        setReview({...review,[e.target.name]:e.target.value});
      }

      const changeReviewUpdated = e => {
        setReviewUpdated({...reviewUpdated,[e.target.name]:e.target.value});
      }
      
      useEffect(()=>{
        const getPlaceDetails = async () => {
            await axios.get("/endroits/"+id)
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
                                  review.idUser=user.id;
                                  review.nameUser=user.firstName+" "+user.lastName
                                  //console.log("hahah")
                                  console.log(review.nameUser)
                                 setReviews([...reviews,review]);
                                

                            }
                          )
                    }
                )
                .catch(
                    (err)=>{
                     console.log(err)
                    }
                ).finally(()=> {
                    setReview({
                        contenu : "",
                        rating: 0.0,
                
                      })

                })
            }
            postReview();
        

    }

    const getFirstImage = ()=> {
        if (place.image == null){
            return <img alt="" src={require(`../Assets/images/no-image.png`)} className="w-full" />
        }
        else {
        const array_image = place.image?.split(',');
        return array_image?.map((index,val)=>{
            console.log(index,val)
            if (val === 0){
                return <img alt="" id="main-img" src={require(`../Assets/images/${index}`)} className="w-full" />
            }
            return "";
         }); 
        }
    }
    const getOtherImages = ()=> {
        const array_image = place.image?.split(',');
        return array_image?.map((index,val)=>{
            if (val !== 0){
                return <a href={require(`../Assets/images/${index}`)}><img alt="picutrecity" src={require(`../Assets/images/${index}`)} className="single-img w-full h-full cursor-pointer border border-primary" />
</a>
            }
            return ""
            
         }); 
        
        
    }
    
     const ratingAvg = (ratingAverge)=> {
        if (ratingAverge === 0.0) {
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
        if (reviewRating === 0.0) {
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
     const [expanded, setExpanded] = useState(false)
     const dataForDisplay = expanded ? reviews : reviews.slice(0,3)

     const GetReviews = () => {    
        return dataForDisplay === [] ? "There is no reviews" : dataForDisplay.map((review)=> {
            return (
            <div
        class="flex items-center gap-4 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap mb-3">
            <img alt="" src="http://picsum.photos/50" class="w-20 rounded-full" />
        <div class="w-full">
            <h2 class="text-gray-800  xl:text-xl textl-lg font-medium uppercase">
            {review.contenu}
            </h2>
            <div className="flex">
            <p class="text-primary font-semibold">User : </p>
            <p className="font-semibold text-gray-500 ml-2">{review.nameUser}</p>
            </div>
            <div className="flex">
            <p class="text-yellow-400 font-semibold">{ReviewRating(review.rating)}</p>
            <p className="font-semibold text-gray-500 ml-2">({review.rating})</p>
            </div>
        </div>
        {
            user.id === review.idUser ? <div class="flex text-gray-600">
            <i className="fas fa-edit hover:text-primary cursor-pointe" onClick={() => setShowModal(true)} ></i>
            <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto w-60">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Review
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form>
               <div className="mt-3 p-3">
               <textarea rows="3" className="border p-2 rounded w-full" name="contenu" placeholder="Write something..."></textarea>
               </div>
             <div className="flex justify-center mb-6">           
                <input type="number"
                   name="rating"
                   placeholder="Review"
                   min="0.0"
                   max="5.0"
                   step="0.1"
                   className="placeholder-black text-black px-8 py-3 font-medium rounded-md uppercase" />

            </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                   className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>  
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
            
            <i class="fas fa-trash ml-6 hover:text-primary cursor-pointe" onClick={handleClick(review.id)}></i>
        </div>: ""
        }
       
        
    </div>
            )
        })
       }
       const handleClick = (id) => (event) =>{ event.preventDefault()
        RemoveReview(id)};

       const RemoveReview =  (id)=> {
        console.log(id);
        Swal.fire({
            title: 'Do you want to delete it ?',
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete("/reviews/"+id).then(res =>{
                Swal.fire('Saved!', '', 'success')
                const review = reviews.filter(item => item.id !== id);  
                setReviews(review);
               })
            } 
          })            
       }

       const UpdateReview =  (review)=> {
        Swal.fire({
            title: 'Update Review',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Update',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
              return fetch(`//api.github.com/users/${login}`)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(response.statusText)
                  }
                  return response.json()
                })
                .catch(error => {
                  Swal.showValidationMessage(
                    `Request failed: ${error}`
                  )
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              })
            }
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
                
                <div className="text-xs text-gray-500 ml-3">{place.ratingAvg?.toFixed(2)} ({place.numberOfReviews} Reviews)</div>
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
        <button type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
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
            <input type="hidden" value={user.id} onChange={changeHandler} name="idUser"/>
            <input type="hidden" value={user.firstName+" "+user.lastName} onChange={changeHandler} name="nameUser"/>


    <div className="flex justify-center mt-4">
      <div><button onClick={onSubmitReview} className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
    </div>
  </div>

         </>
        );
    }

export default DetailsPlace;
