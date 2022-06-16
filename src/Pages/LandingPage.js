import React from "react";
import Background from '../Assets/images/banner-bg.jpg';

var sectionStyle = {
  backgroundImage: "url(" +  Background  + ")"
};

export default class LandingPage extends React.Component{
  
  render(){
    return(
      <div>
      <div className="bg-cover bg-no-repeat bg-center py-36 relative" style={sectionStyle} >
      <div className="container">
          <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
              Best Collection For <br className="hidden sm:block" /> Home Decoration
          </h1>
          <p className="text-base text-gray-600 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa <br className="hidden sm:block"/>
              assumenda aliquid inventore nihil laboriosam odio
          </p>
      </div>
  </div>
  <div className="container pb-16 py-16">
  <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">Famous cities in morocco</h2>
  <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/Rabat.jpg')} className="w-full"/>
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
              font-roboto font-medium tracking-wide transition">
              Rabat
          </a>
      </div>
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/Marrakech.jpg')}  className="w-full" />
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
              font-roboto font-medium tracking-wide transition">
              Marrakech
          </a>
      </div>
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/tanger.jpg')}  className="w-full" />
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
              font-roboto font-medium tracking-wide transition">
             Tanger
          </a>
      </div>
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/Agadir.jpg')}  className="w-full"/>
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
              font-roboto font-medium tracking-wide transition">
              Agadir  
          </a>
      </div>
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/dakhla.jpg')} className="w-full" />
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
              font-roboto font-medium tracking-wide transition">
              Dakhla
          </a>
      </div>
      <div className="relative group rounded-sm overflow-hidden">
          <img alt="" src={require('../Assets/images/Casablanca.jpg')} className="w-full"/>
          <a href="##" className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                  font-roboto font-medium tracking-wide transition">
              Casablanca
          </a>
      </div>
  </div>
</div>
  </div>
    );
  }

}