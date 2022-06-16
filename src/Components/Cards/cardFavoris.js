import React from 'react';

export default function cardFavoris() {
    return (
        
        <div
        class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
        <div class="w-60 flex-shrink-0">
            <img alt="" src={require('../../Assets/images/Rabat.jpg')} class="w-full h-full" />
        </div>
        <div class="md:w-1/3 w-full">
            <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                Mosque hassan 2
            </h2>
            <p class="text-primary font-semibold">Rabat</p>
        </div>
        <div class="text-gray-600 r">
            <i class="fas fa-trash hover:text-primary cursor-pointe"></i>
            <i class="fas fa-eye ml-6 hover:text-primary cursor-pointe"></i>
        </div>
        
    </div>
    );
  }
  

  