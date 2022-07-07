import React from 'react';
import { useAuth } from '../../utils/AuthProvider';

export default function CardReview({review,ReviewRating,RemoveReview,UpdateReview}) {
    const {user} = useAuth();
    const [showModal, setShowModal] = React.useState(false);
    const handleClick = (id) => (event) =>{ event.preventDefault()
        RemoveReview(id)};

    const handleUpdate = (review) => (event) =>{ event.preventDefault()
        UpdateReview(review)};

    console.log(review.nameUser);
    console.log(user.id);
    console.log(review.nameUser);



    return (        
        <div
        className="flex items-center gap-4 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap mb-3">
            <img alt="" src="http://picsum.photos/50" className="w-20 rounded-full" />
        <div className="w-full">
            <h2 className="text-gray-800  xl:text-xl textl-lg font-medium uppercase">
            {review.contenu}
            </h2>
            <div className="flex">
            <p className="text-primary font-semibold">User : </p>
            <p className="font-semibold text-gray-500 ml-2">{review.nameUser}</p>
            </div>
            <div className="flex">
            <p className="text-yellow-400 font-semibold">{ReviewRating(review.rating)}</p>
            <p className="font-semibold text-gray-500 ml-2">({review.rating})</p>
            </div>
        </div>
        {
            user.id === review.idUser ? <div className="flex text-gray-600">
            <i className="fas fa-edit hover:text-primary cursor-pointe" onClick={() => setShowModal(true)} ></i>
            <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto w-60">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Review
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
              <textarea id="message" rows="4" value={review.contenu} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Something..."></textarea>
               </div>
               <div className="flex justify-center mb-6">
                
                <input type="number"
                   name="rating"
                   placeholder="Review"
                   min="0.0"
                   max="5.0"
                   value={review.rating}
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
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
            
            <i className="fas fa-trash ml-6 hover:text-primary cursor-pointe" onClick={handleClick(review.id)}></i>
        </div>: ""
        }
       
        
    </div>
    );
  }
  

  