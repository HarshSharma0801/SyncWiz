import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

  const Navigate = useNavigate();
  
  const [RegisterInput, SetRegisterInput] = useState({
    name:"",
    email: "",
    password: "",
  });

  const EmailHandler = (event) => {
    SetRegisterInput({ ...RegisterInput, email: event.target.value });
  };
  const PasswordHandler = (event) => {
    SetRegisterInput({ ...RegisterInput, password: event.target.value });
  };
  const NameHandler=(event)=>{
    SetRegisterInput({ ...RegisterInput, name: event.target.value });

  }

  const SubmitHandler = async (event) => {
    event.preventDefault();
    console.log("submitted")
    try{
      await axios.post("http://localhost:3000/register",  RegisterInput )
      .then(res=>{
        if(res.data.valid=='exists'){
          alert("User already exists")

        }
        else if(res.data.valid=='not exists'){
          Navigate("/home" , {state:{id:res.data.name}})

        }
      }
      )

    }
    catch(error){
      console.log(error);
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h1 className="mt-6 text-center text-4xl font-extrabold text-blue-900">
            SyncWiz
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={SubmitHandler}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Full Name
              </label>
              <input
                id="Name"
                name="name"
                type="String"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                onChange={NameHandler}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                onChange={EmailHandler}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={PasswordHandler}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

           
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default RegisterPage;
