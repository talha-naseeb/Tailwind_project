import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userprofile from "./components/Userprofile";
import Loginform from "./components/Logform";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Createpost from "./Pages/Customer/Dashboard/Createpost";
import Navbar from "./components/shared/Navbar";
import Contactus from "./components/portfolio/Contactus";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <div className='App'>
      <Router>
        {authenticated && <Navbar />}
        <Routes>
          {authenticated ? (
            <>
              <Route path='/' element={<Dashboard />} />
              <Route path='/createpost' element={<Createpost />} />
              <Route path='/contactus' element={<Contactus />} />
              <Route path='/userprofile' element={<Userprofile setAuthenticated={setAuthenticated} />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Loginform setAuthenticated={setAuthenticated} />} />
              <Route path='/signup' element={<Signup />} />
            </>
          )}
          <Route path='*' element={<h1 style={{ textAlign: "center", color: "red" }}>404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
