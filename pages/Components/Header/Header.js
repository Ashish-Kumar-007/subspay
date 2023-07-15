import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { ConnectWallet } from "../WalletConnect/ConnectWallet";

export const Header = () => {
  const userBalance = 250; // User's ERC20 token balance (example value)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-3">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <h1 className="text-white lg:text-4xl text-2xl font-bold">
            SUBSPAY
          </h1>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:flex">
            <div className="mx-5 p-2 rounded-lg shadow-lg bg-neutral-800">
              <span className="text-gray-300 mr-2">Credits:</span>
              <span className="text-white font-semibold">
                {userBalance} SDT
              </span>
            </div>
            <button className="btn bg-neutral-800 text-white p-2 mr-6 rounded-lg font-semibold">Buy Credits</button>
            <ConnectWallet />
            {/* <FaUserCircle size={40} className="mx-5 text-gray-400 hover:text-gray-300" /> */}
          </div>
          <div className="lg:hidden">
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center mt-4">
          <div className="mx-5 p-2 rounded-lg shadow-lg bg-neutral-800 mb-4">
            <span className="text-gray-300 mr-2">Credits:</span>
            <span className="text-white font-semibold">{userBalance} SDT</span>
          </div>
          <button className="btn bg-neutral-800 text-white p-2 rounded-lg font-semibold mb-4">
            Buy Credits
          </button>
          <ConnectWallet />
          {/* <FaUserCircle size={40} className="mx-5 text-gray-400 hover:text-gray-300" /> */}
        </div>
      </div>
    </header>
  );
};