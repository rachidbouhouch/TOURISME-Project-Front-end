import React , { useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";

const Profile = () => {
    const BASE_URL = "/api/";
    const [userCurrent , setUser]=useState({})
    const {firstName,lastName,email,address,password,confirmPassword}=userCurrent
    const navigate = useNavigate();
    const [token,setToken]=useState(false)
    const {setAuth,user} = useAuth();

     useEffect(()=>{
        setUser(user);
        setToken(localStorage.getItem('token')?true:false)

     },[user])


     const logout = e => {
        localStorage.removeItem('token');
        setToken(false)
        setAuth(false)
        navigate("/login", { replace: true });

      }
    const changeHandler = e => {
        setUser({...userCurrent,[e.target.name]:e.target.value});
      }
    const onSubmit = (e)=> {
        e.preventDefault();
         if (userCurrent.firstName === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field first name is required',
              })
        }
        else if ( userCurrent.lastName ===""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field last name is required',
              })
        }
        else if (userCurrent.email===""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field email is required',
              })
        }
        else if ( userCurrent.password === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field password is required',
              })
        }
        else if (userCurrent.confirmPassword === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',

                text: 'Field Confirm password is required',
              })
        }
        else if (userCurrent.address === "" ){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field address is required',
              })
        }        
        else if (userCurrent.password !== userCurrent.confirmPassword){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'password and confirm password not equals',
              })
        }
        else {
            console.log(userCurrent)
            axios.post(BASE_URL+"user/update",userCurrent)
            .then(e => {
                Swal.fire(
                    'Good job!',
                    'Informations updated',
                    'success'
                  )
            })
            .catch(error => {
                //console.log(error.response)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message ,
                  })
            } )
          
        }
    }
        
        return(
<>
<div class="py-4 container flex gap-3 items-center">
    <a href="index.html" class="text-primary text-base">
        <i class="fas fa-home"></i>
    </a>
    <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
    <p class="text-gray-600 font-medium uppercase"></p>
</div>

<div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
<div class="col-span-3">
        <div class="px-4 py-3 shadow flex items-center gap-4">
            <div class="flex-shrink-0">
                <img src={require('../Assets/images/avatar.png')} class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover" alt="" />
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
                <button
                   onClick={logout}
                   class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                    logout
                    <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
                </button>
            </div>
        </div>
    </div>
    <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
        <form onSubmit={onSubmit}>
            <h3 class="text-lg font-medium capitalize mb-4">
                Profile Information
            </h3>
            <div class="space-y-4">
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            first Name
                        </label>
                        <input type="text" class="input-box" name="firstName" value={firstName} onChange={changeHandler} />
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Last Name
                        </label>
                        <input type="text" class="input-box" name="lastName" value={lastName} onChange={changeHandler} />
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input type="email" name="email" class="input-box" value={email} onChange={changeHandler} />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Address
                        </label>
                        <input type="text" name="address" class="input-box" value={address} onChange={changeHandler}/>
                    </div>

                </div>
                <h3 class="text-lg font-medium capitalize mb-4">
                Change password
            </h3>
            <div class="space-y-4 max-w-sm">
                <div>
                    <label class="text-gray-600 mb-2 block">
                        New Password <span class="text-primary">*</span>
                    </label>
                    <div class="relative">

                        <input type="password" class="input-box" name="password" placeholder="enter new password" value={password} onChange={changeHandler} />
                    </div>
                </div>
                <div>
                    <label class="text-gray-600 mb-2 block">
                        Confirm Password <span class="text-primary">*</span>
                    </label>
                    <div class="relative">
                        <input type="password" class="input-box" name="confirmPassword" placeholder="enter confirm password" value={confirmPassword} onChange={changeHandler} />
                    </div>
                </div>
                </div>
            </div>
            <div class="mt-6">
                <button type="submit"
                    class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Save change
                </button>
            </div>
        </form>
    </div>
</div>
</>
);
    

}

export default Profile;