import React, { useEffect, useState } from "react";
import user from "../userprofile/user.png";

const Userprofile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem("user")) || [];
    setUserData(user);
    // debugger;
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location = "/";
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-md p-4 bg-white custom-shadow rounded-2xl'>
        <div className='inline=flex bg-white rounded-lg p-10'>
          <div className='text-center'>
            <img src={user} alt='user' className='w-50 h-50 rounded-full mx-auto' />
            <h1 className='text-2xl font-semibold mt-4'>{userData ? `${userData.firstname} ${userData.lastname}` : ""}</h1>
            <p className='text-gray-500 text-sm'>{userData ? userData.email : ""}</p>
          </div>
          <div className='mt-6 gap-5 flex justify-center'>
            <button onClick={handleLogout} className='bg-blue-400 p-4 custom-shadow py-2 px-4 rounded-lg hover:bg-green-400'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
