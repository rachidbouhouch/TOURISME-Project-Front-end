import React from 'react';

function sideBar() {
    return (
        <div class="col-span-3">
        <div class="px-4 py-3 shadow flex items-center gap-4">
            <div class="flex-shrink-0">
                <img src={require('../../Assets/images/avatar.png')} class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" alt="" />
            </div>
            <div>
                <p class="text-gray-600">Hello,</p>
               
                <h4 class="text-gray-800 capitalize font-medium">Rachid bouhouch

                </h4>
            </div>
        </div>
        <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
            <div class="space-y-1 pl-8">
                <a  href="##"
                   class="relative text-base font-medium capitalize hover:text-primary transition block">
                    Manage account
                    <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                </a>
                <a href="##" class="hover:text-primary transition capitalize block text-primary">Profile information</a>
            </div>
            <div class="pl-8 pt-4">
                <a href="##"
                   class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                    logout
                    <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
                </a>
            </div>
        </div>
    </div>
    );
  }
  
  export default sideBar;
  