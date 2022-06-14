import React from "react";
    let mainImg = document.getElementById('main-img')
    let imgBars = document.getElementsByClassName('single-img')

    for(let imgBar of imgBars){
        imgBar.addEventListener('click', function(){
            clearActive()
            let imgPath = this.getAttribute('src')
            mainImg.setAttribute('src', imgPath)
            this.classList.add('border-primary')
        })
    }

    function clearActive(){
        for(let imgBar of imgBars){
            imgBar.classList.remove('border-primary')
        }
    }


export default class DetailsPlace extends React.Component{
    
    render(){
        return(
            <>
        <div className="py-4 container flex gap-3 items-center">
        <a href="index.html" className="text-primary text-base">
            <i className="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <a href="shop.html" className="text-primary text-base font-medium uppercase">
            Place
        </a>
        <span className="text-sm text-gray-400"><i className="fas fa-chevron-right"></i></span>
        <p className="text-gray-600 font-medium uppercase">Rabat </p>
         </div>
         <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        <div>
            <div>
                <img alt="" id="main-img" src={require('../Assets/images/Rabat.jpg')} className="w-full" />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
                <div>
                    <img alt="" src={require('../Assets/images/Rabat.jpg')} className="single-img w-full cursor-pointer border border-primary" />
                </div>
                <div>
                    <img alt="" src={require('../Assets/images/Rabat.jpg')} className="single-img w-full cursor-pointer border" />
                </div>
                <div>
                    <img alt="" src={require('../Assets/images/Rabat.jpg')} className="single-img w-full cursor-pointer border" />
                </div>
                <div>
                    <img alt="" src={require('../Assets/images/Rabat.jpg')} className="single-img w-full cursor-pointer border" />
                </div>
                <div>
                    <img alt="" src={require('../Assets/images/Rabat.jpg')} className="single-img w-full cursor-pointer border" />
                </div>
            </div>
        </div>
        <div>
            <h2 className="md:text-3xl text-2xl font-medium uppercase mb-2">Mosque Hassan 2</h2>
            <div className="flex items-center mb-4">
                <div className="flex gap-1 text-sm text-yellow-400">
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                    <span><i className="fas fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
                <p className="text-gray-800 font-semibold space-x-2">
                    <span>City: </span>
                    <span className="text-green-600">Rabat</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Country: </span>
                    <span className="text-gray-600">Morroco</span>
                </p>
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Region : </span>
                    <span className="text-gray-600">Rabat-Salé-Kénitra</span>
                </p>
            </div>
            <div className="mt-4">
                <h3 className="text-base text-gray-800 mb-1">Review </h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                    <div className="h-8 w-10 flex items-center justify-center">4</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                </div>
            </div>
            <div className="flex gap-3 border-b border-gray-200 pb-5 mt-20">
            <a href="##" class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                    <span class="mr-2"><i class="fas fa-heart"></i></span> Favoris
                </a>
            </div>
            <div className="flex space-x-3 mt-4">
                <a href="##"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="##"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="##"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Ville Description
        </h3>
        <div className="lg:w-4/5 xl:w-3/5 pt-6">
            <div className="space-y-3 text-gray-600">
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro,
                    make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so
                    much more. That’s not just brain power — that’s the power of a full stack of ML technologies.
                </p>
            </div>
        </div>
    </div>
         </>
        );
    }

}
