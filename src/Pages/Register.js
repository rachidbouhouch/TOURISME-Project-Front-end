import React ,{useState} from "react";
import { Link,useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";

function Register(){
    
    const navigate = useNavigate();
    const [newUser,setUser] = useState( {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword:"",
        address :""
    })
    const {
        firstName ,
        lastName,
        email ,
        password ,
        confirmPassword,
        address } = newUser;

    const changeHandler = e => {
        setUser({...newUser,[e.target.name]:e.target.value});
      }

     const onSignup = (e)=> {
        e.preventDefault();
         if (newUser.firstName === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field first name is required',
              })
        }
        else if ( newUser.lastName ===""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field last name is required',
              })
        }
        else if (newUser.email===""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field email is required',
              })
        }
        else if ( newUser.password === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field password is required',
              })
        }
        else if (newUser.confirmPassword === ""){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field Confirm password is required',
              })
        }
        else if (newUser.address === "" ){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Field address is required',
              })
        }        
        else if (newUser.password !== newUser.confirmPassword){
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'password and confirm password not equals',
              })
        }
        else {
            console.log(newUser)
            axios.post("user/signup",newUser)
            .then(e => {
                Swal.fire(
                    'Good job!',
                    'Signup Successful',
                    'success'
                  ).then(
                    ()=>{
                        navigate("/login", { replace: true });
                    }
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
            <div className="container py-16">
            <div className="bg-white max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    create an acocunt
                </h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Register here if you don't have account
                </p>
                <form onSubmit={onSignup}>
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                First Name <span className="text-primary">*</span>
                            </label>
                            <input type="text" name="firstName" className="input-box" placeholder="rachid" 
                            value={firstName}
                            onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                Last Name <span className="text-primary">*</span>
                            </label>
                            <input type="text" className="input-box" name="lastName" placeholder="ait lhouss" 
                             value={lastName}
                             onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">
                                Email Address <span className="text-primary">*</span>
                            </label>
                            <input type="email" className="input-box" name="email" placeholder="example@mail.com"
                            value={email}
                            onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Password <span className="text-primary">*</span></label>
                            <input type="password" className="input-box" name="password" placeholder="password"
                             value={password}
                             onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Confirm password <span className="text-primary">*</span></label>
                            <input type="password" className="input-box" name="confirmPassword" placeholder="Confirm Password"
                             value={confirmPassword}
                             onChange={changeHandler}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Address <span className="text-primary">*</span></label>
                            <input type="text" className="input-box" name="address" placeholder="Address"
                             value={address}
                             onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit"
                         className="text-black bg-primary block w-full py-2 px-20 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                                >
                            create account
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-600 text-center">
                    Already have an account? <Link to="/login" className="text-primary">Login Now</Link>
                </p>
            </div>
        </div>
        );
    

}

export default Register;
