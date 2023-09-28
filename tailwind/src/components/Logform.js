import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userLoginHandler } from "./helper";

function Loginform({ setAuthenticated }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState(false);

  const onSubmit = useCallback(
    (data) => {
      userLoginHandler(data, setAuthenticated, setLoginError);
    },
    []
  );

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className='flex justify-center items-center h-[70vh]'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center mt-3 w-full max-w-md p-4 rounded-[50px] bg-white py-8 custom-shadow'>
        <div className='mb-5'>
          <label className='text-2xl font-semibold p-3 rounded-xl text-black shadow-xl ring-3'>Login Form</label>
        </div>
        {loginError && <div className='mb-3 text-red-500'>Login failed. You are not the user.</div>}
        <div className={`text-gray-900 ${errors.email ? "error" : ""}`}>
          <label className='mb-1 flex text-xm'>Email:</label>
          <input
            className={`p-3 h-10 w-full sm:w-[22rem] border-2 border-gray-200 rounded-lg focus:outline-none ${errors.email ? "border-red-500" : ""} `}
            type='email'
            name='email'
            placeholder='Enter your email'
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email format",
              },
              maxLength: {
                value: 30,
                message: "Email is too long",
              },
            })}
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>

        <div className={`text-gray-900 ${errors.password ? "error" : ""}`}>
          <label className='mb-1 flex text-xm'>Password:</label>
          <input
            className={`p-3 h-10 w-full sm:w-[22rem] border-2 border-gray-200 rounded-lg focus:outline-none ${errors.password ? "border-red-500" : ""}`}
            type='password'
            name='password'
            placeholder='Enter your password'
            {...register("password", { required: "Password is required!" })}
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>

        <div className='flex'>
          <button className='text-white px-4 text-sm font-medium mt-5 p-2 m-2 hover:bg-green-500 bg-blue-400 rounded-lg' type='submit'>
            Submit
          </button>

          <Link to='/signup'>
            <button className='text-white px-4 text-sm font-medium mt-5 p-2 m-2 hover:bg-green-500 bg-blue-400 rounded-lg'>New Registration</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
