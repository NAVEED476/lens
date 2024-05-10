// import React from 'react';
// import './navbar.css';

// const Navbar = () => {
//   return (
//     <header className="header">
//       <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75" alt="Logo" className="logo" />
//       <nav>
//         <ul className="nav-links">
//           <li href="#">Home</li>
//           <li href="#">Company</li>
//           <li href="#">Blogs</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-inner-logo">
          <img
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            alt="logo"
          />
        </div>
        <div className="navbar-headings">
          <div>
            <a class="nav-link">MakeMyWeb.</a>
          </div>
          <div>
            <a class="nav-active">Home</a>
          </div>
          <div>
            <a class="nav-link">Company</a>
          </div>
          <div>
            <a class="nav-link">Blog</a>
          </div>

          <button className="btn-dark">{<MdDarkMode />}</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
