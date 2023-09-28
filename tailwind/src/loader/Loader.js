import React, { useEffect, useState } from "react";
import Products from "../sections/Products";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='loader'>
        <div className='circle'>
        </div>
      </div>
    );
  }

  return (
    <>
      <Products />
    </>
  );
}

export default Loader;
