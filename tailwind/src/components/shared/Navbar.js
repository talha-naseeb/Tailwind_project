import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is below a certain breakpoint (e.g., 768 pixels)
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        // Close the mobile navigation when switching to a larger screen
        setIsNavOpen(false);
      }
    };

    // Initial check
    checkScreenWidth();

    // Add a listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className='p-2 bg-blue-400 custom-shadow'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            {isMobile && (
              <button onClick={toggleNav} className='md:hidden text-white text-xm'>
                <h1>&#9776; Menu</h1>
              </button>
            )}
            <ul className={`${isNavOpen || !isMobile ? "block" : "hidden"} md:flex gap-2 md:gap-3`}>
              <li className='text-white text-xm'>
                <h1>Clone App</h1>
              </li>
              <li className='text-white text-xm'>
                <a href='/'>Home</a>
              </li>
              <li className='text-white text-xm'>
                <a href='/createpost'>Create post</a>
              </li>
              <li className='text-white text-xm'>
                <a href='/contactus'>Contact us</a>
              </li>
            </ul>
          </div>
          <div className='flex gap-2'>
            <ul className='flex gap-2'>
              <li className='text-white text-xm'>
                <Link to='/userprofile'>
                  <h1>UserProfile</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
