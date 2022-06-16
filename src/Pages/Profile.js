
import React from "react";
import SideBar from "../Components/Cards/sideBar"

export default class Profile extends React.Component{
    render(){
        return(
<>
<div class="py-4 container flex gap-3 items-center">
    <a href="index.html" class="text-primary text-base">
        <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase">My Account</p>
</div>

<div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <SideBar></SideBar>
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <form action="profileinfo" method="post">
            <h3 class="text-lg font-medium capitalize mb-4">
                Profile Information
            </h3>
            <div class="space-y-4">
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            First Name
                        </label>
                        <input type="text" class="input-box" name="prenom" />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Last Name
                        </label>
                        <input type="text" class="input-box" name="nom" />
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Cin
                        </label>
                        <input type="text" class="input-box" name="cin" />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Ville
                        </label>
                        <input type="text" class="input-box" name="ville" />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Pays
                        </label>
                        <input type="text" class="input-box" name="pays" />
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input type="email" name="email" class="input-box" required />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Phone Number
                        </label>
                        <input type="text" class="input-box" name="telephone" />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Address
                        </label>
                        <input type="text" name="addresse" class="input-box" />
                    </div>

                </div>
                <h3 class="text-lg font-medium capitalize mb-4">
                Change password
            </h3>
            <div class="space-y-4 max-w-sm">
                <div>
                    <label class="text-gray-600 mb-2 block">
                        Current Password <span class="text-primary">*</span>
                    </label>
                    <div class="relative">
                        <input type="password" class="input-box" name="ancienpassword" placeholder="enter current password" required />
                    </div>
                </div>
                <div>
                    <label class="text-gray-600 mb-2 block">
                        New Password <span class="text-primary">*</span>
                    </label>
                    <div class="relative">

                        <input type="password" class="input-box" name="currentpassword" placeholder="enter new password" required />
                    </div>
                </div>
                <div>
                    <label class="text-gray-600 mb-2 block">
                        Confirm Password <span class="text-primary">*</span>
                    </label>
                    <div class="relative">
                        <input type="password" class="input-box" name="confirmpassword" placeholder="enter confirm password" required />
                    </div>
                </div>
                </div>
            </div>
            <div class="mt-6">
                <button type="submit"
                        >
                    <a 
                    href="##"
                    alt="" class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                    >Save change</a>
                </button>
            </div>
        </form>
    </div>
</div>
</>
);
    }

}
