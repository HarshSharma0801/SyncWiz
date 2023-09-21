import React from "react";
import { useState , } from "react";
import axios from "axios";
import { Link , useNavigate } from "react-router-dom";

const LoginPage = () => {

  const Navigate = useNavigate();

  const [LoginInput, SetLoginInput] = useState({
    email: "",
    password: "",
  });

  const email = LoginInput.email;

  const EmailHandler = (event) => {
    SetLoginInput({ ...LoginInput, email: event.target.value });
  };
  const PasswordHandler = (event) => {
    SetLoginInput({ ...LoginInput, password: event.target.value });
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();
    try{
      await axios.post("http://localhost:3000/login",  LoginInput )
      .then(res=>{
        console.log(res)
        if(res.data.valid=='exists'){
          Navigate("/home" , {state:{id:res.data.name}})
        }
        else if(res.data=='not exists'){
          alert("Wrong Password or Email")
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
            Log in to your account
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
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
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

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
        <div>
          <Link to='/register'>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-blue-500 text-sm font-medium rounded-md text-black bg-silver-600 hover:bg-metal-700  focus:ring-2 focus:ring-offset-20 hover:bg-indigo-700 hover:text-white"
          >
            Create Account
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
