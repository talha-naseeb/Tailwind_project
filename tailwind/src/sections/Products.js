import React from "react";
import shoesImages from "../user/images";
function Products() {
  return (
    <div className='grid justify-between grid-cols-1 md:grid-cols-4 gap-5  m-[2%]'>
      {shoesImages.map((image, index) => (
        <div key={index} className='items-cente mt-1 flex-row rounded-[50px] bg-white-400 p-2 custom-shadow '>
          <div className='mt-5 flex justify-center bg-white items-center'>
            <img src={image} alt={`user${index + 1}`} />
          </div>
          <div className='mt-5 inline'>"Shoes are essential footwear that combines style and comfort for everyday life."</div>
        </div>
      ))}
    </div>
  );
}

export default Products;
