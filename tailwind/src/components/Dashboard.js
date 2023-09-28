import React from "react";
import Loader from "../loader/Loader";
import "../App.css";

function Dashboard() {
  return (
    <div className='w-full mx-auto'>
      <div className='container mx-auto p-4'>
        <Loader />
      </div>
    </div>
  );
}

export default Dashboard;
