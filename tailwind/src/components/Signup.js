import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const existingUserData = JSON.parse(localStorage.getItem("userData")) || [];

    const userExists = existingUserData.some((user) => user.email === data.email);

    if (userExists) {
      alert("A user with this email already exists.");
    } else {
      const updatedUserData = [...existingUserData, data];

      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      setIsRegistered(true);
    }
    
  };

  const password = watch("password");
  const confirmPassword = watch("confirmpassword");
  const passwordMismatch = password !== confirmPassword;

  return (
    <div className='flex justify-center items-center h-[90vh] '>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-md p-4 bg-white custom-shadow rounded-2xl'>
        <div className='mb-5'>
          <label className='bg-white custom-shadow p-2 rounded-xl text-center text-xl'>New User</label>
        </div>
        {isRegistered ? <div className='text-green-600 text-center mb-4'>Account is registered. Please go back and login.</div> : null}
        <div className={`text-gray-900 ${errors.firstname ? "error" : ""}`}>
          <label className='mb-1 flex text-xm'>First Name:</label>
          <input
            className={`p-3 h-10 w-[22rem] border-2 border-gray-200 rounded-lg focus:outline-none ${errors.firstname ? "border-red-500" : ""} ${errors.firstname ? "text-red-500" : ""}`}
            type='text'
            name='firstname'
            placeholder={errors.firstname ? "First name is required!" : "Enter Your first name"}
            {...register("firstname", { required: "First name is required!" })}
          />
          {errors.firstname && <p className='text-red-500'>{errors.firstname.message}</p>}
        </div>

        <div className={`text-gray-900 ${errors.lastname ? "error" : ""}`}>
          <label className='mb-1 flex text-xm'>Last Name:</label>
          <input
            className={`p-3 h-10 w-[22rem] border-2 border-gray-200 rounded-lg focus:outline-none ${errors.lastname ? "border-red-500" : ""}`}
            type='text'
            name='lastname'
            placeholder='Enter your last name'
            {...register("lastname", { required: "Last name is required!" })}
          />
          {errors.lastname && <p className='text-red-500'>{errors.lastname.message}</p>}
        </div>

        <div className={`text-gray-900  ${errors.email ? "error" : ""}`}>
          <label className='mb-1 flex text-xm '>Email:</label>
          <input
            className={`p-3 h-10 w-[22rem] border-2 border-gray-200 rounded-lg focus:outline-none ${errors.email ? "border-red-500" : ""} `}
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
          <label className='mb-1 flex text-xm '>Password:</label>
          <input
            className={`p-3 h-10 border-2 border-gray-200 w-[22rem] rounded-lg focus:outline-none ${errors.password ? "border-red-500" : ""}`}
            type='password'
            name='password'
            placeholder='Enter your password'
            {...register("password", { required: "Password is required!" })}
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>

        <div className={`text-gray-900 ${errors.confirmpassword || passwordMismatch ? "error" : ""}`}>
          <label className={`flex mb-1 text-xm `}>Confirm Password:</label>
          <input
            className={`p-3 border-2 border-gray-200 h-10 w-[22rem] rounded-lg focus:outline-none ${passwordMismatch ? "border-red-500" : ""}`}
            type='password'
            name='confirmpassword'
            placeholder={errors.confirmpassword ? "Confirm password is required!" : "Enter your confirm password"}
            {...register("confirmpassword", { required: true })}
          />
          {passwordMismatch && <p className='text-red-500'>Passwords do not match</p>}
        </div>

        <div className='flex justify-center mt-5'>
          <button className='text-white px-4 text-sm font-medium p-2 m-2 hover:bg-green-500 bg-blue-400 rounded-lg' type='submit'>
            SignUp
          </button>
          <Link to='/'>
            <button className='text-white px-4 text-sm font-medium p-2 m-2 hover:bg-green-500 bg-blue-400 rounded-lg'>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
