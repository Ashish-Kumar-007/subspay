import React from 'react';
// import { Link } from 'react-router-dom';
import { BsFillHouseFill, BsFillGridFill, BsGrid3X3GapFill, BsBookmarkFill, BsPersonFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <Link to="/" className="text-white text-2xl font-bold"> */}
            My Subscription dApp
          {/* </Link> */}
        </div>
        <ul className="flex space-x-4">
          <li>
            {/* <Link to="/" className="flex items-center text-white hover:text-gray-300"> */}
              <BsFillHouseFill className="mr-1" />
              Home
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/browse" className="flex items-center text-white hover:text-gray-300"> */}
              <BsFillGridFill className="mr-1" />
              Browse
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/categories" className="flex items-center text-white hover:text-gray-300"> */}
              <BsGrid3X3GapFill className="mr-1" />
              Categories
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/library" className="flex items-center text-white hover:text-gray-300"> */}
              <BsBookmarkFill className="mr-1" />
              My Library
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="/account" className="flex items-center text-white hover:text-gray-300"> */}
              <BsPersonFill className="mr-1" />
              Account
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
